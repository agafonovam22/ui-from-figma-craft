import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface BitrixCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  url?: string;
}

interface BitrixProduct {
  id: string;
  name: string;
  description?: string;
  price: number;
  original_price?: number;
  discount_percentage?: number;
  image_url?: string;
  category_id?: string;
  is_available: boolean;
  in_stock: boolean;
  rating: number;
  reviews_count: number;
  badge?: string;
  badge_color?: string;
  has_comparison: boolean;
  bitrix_id: string;
  code?: string;
}

interface BitrixResponse {
  categories: BitrixCategory[];
  products: BitrixProduct[];
  timestamp: string;
  total_products: number;
  total_categories: number;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Starting Bitrix catalog sync...');

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // Get request body to check for custom URL
    let bitrixUrl = '';
    
    if (req.method === 'POST') {
      const body = await req.json();
      bitrixUrl = body.bitrix_url;
    }

    if (!bitrixUrl) {
      return new Response(
        JSON.stringify({ 
          error: 'Bitrix catalog URL is required',
          message: 'Please provide bitrix_url in request body' 
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log(`Fetching data from: ${bitrixUrl}`);

    // Fetch data from Bitrix
    const response = await fetch(bitrixUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Supabase-Sync/1.0'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from Bitrix: ${response.status} ${response.statusText}`);
    }

    const bitrixData: BitrixResponse = await response.json();
    console.log(`Fetched ${bitrixData.total_categories} categories and ${bitrixData.total_products} products`);

    // Start sync process
    let syncResults = {
      categories: { created: 0, updated: 0, errors: 0 },
      products: { created: 0, updated: 0, errors: 0 },
      timestamp: new Date().toISOString()
    };

    // Sync categories first
    for (const category of bitrixData.categories) {
      try {
        // Check if category exists
        const { data: existingCategory } = await supabase
          .from('categories')
          .select('id')
          .eq('slug', category.slug)
          .single();

        const categoryData = {
          name: category.name,
          slug: category.slug,
          description: category.description || null,
          image_url: category.image_url || null,
          updated_at: new Date().toISOString()
        };

        if (existingCategory) {
          // Update existing category
          const { error } = await supabase
            .from('categories')
            .update(categoryData)
            .eq('id', existingCategory.id);

          if (error) throw error;
          syncResults.categories.updated++;
          console.log(`Updated category: ${category.name}`);
        } else {
          // Create new category
          const { error } = await supabase
            .from('categories')
            .insert([categoryData]);

          if (error) throw error;
          syncResults.categories.created++;
          console.log(`Created category: ${category.name}`);
        }
      } catch (error) {
        console.error(`Error syncing category ${category.name}:`, error);
        syncResults.categories.errors++;
      }
    }

    // Get updated categories with their UUIDs
    const { data: allCategories } = await supabase
      .from('categories')
      .select('id, slug');

    const categoryMap = new Map(
      allCategories?.map(cat => [cat.slug, cat.id]) || []
    );

    // Sync products
    for (const product of bitrixData.products) {
      try {
        // Find category UUID by bitrix category ID
        const bitrixCategory = bitrixData.categories.find(
          cat => cat.id === product.category_id
        );
        const categoryUuid = bitrixCategory ? categoryMap.get(bitrixCategory.slug) : null;

        // Check if product exists by bitrix_id (stored in description or custom field)
        const { data: existingProduct } = await supabase
          .from('products')
          .select('id')
          .like('description', `%bitrix_id:${product.bitrix_id}%`)
          .single();

        const productData = {
          name: product.name,
          description: `${product.description || ''}\n\nbitrix_id:${product.bitrix_id}`.trim(),
          price: product.price,
          original_price: product.original_price || null,
          discount_percentage: product.discount_percentage || null,
          image_url: product.image_url || null,
          category_id: categoryUuid || null,
          is_available: product.is_available,
          in_stock: product.in_stock,
          rating: product.rating,
          reviews_count: product.reviews_count,
          badge: product.badge || null,
          badge_color: product.badge_color || null,
          has_comparison: product.has_comparison,
          updated_at: new Date().toISOString()
        };

        if (existingProduct) {
          // Update existing product
          const { error } = await supabase
            .from('products')
            .update(productData)
            .eq('id', existingProduct.id);

          if (error) throw error;
          syncResults.products.updated++;
          console.log(`Updated product: ${product.name}`);
        } else {
          // Create new product
          const { error } = await supabase
            .from('products')
            .insert([productData]);

          if (error) throw error;
          syncResults.products.created++;
          console.log(`Created product: ${product.name}`);
        }
      } catch (error) {
        console.error(`Error syncing product ${product.name}:`, error);
        syncResults.products.errors++;
      }
    }

    console.log('Sync completed:', syncResults);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Bitrix catalog synchronized successfully',
        results: syncResults,
        bitrix_data: {
          timestamp: bitrixData.timestamp,
          total_categories: bitrixData.total_categories,
          total_products: bitrixData.total_products
        }
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Sync error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});