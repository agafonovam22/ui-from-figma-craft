import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('🔄 Проксируем запрос к Bitrix API...');
    
    // Делаем запрос к Bitrix API через edge function (это обходит CORS)
    const bitrixResponse = await fetch('https://cp44652.tw1.ru/catalog.php');
    
    if (!bitrixResponse.ok) {
      throw new Error(`Bitrix API error: ${bitrixResponse.status} ${bitrixResponse.statusText}`);
    }
    
    const catalogData = await bitrixResponse.json();
    
    console.log(`📊 Получены данные: ${catalogData.products?.length || 0} товаров, ${catalogData.categories?.length || 0} категорий`);
    
    return new Response(JSON.stringify(catalogData), {
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/json'
      },
    });
  } catch (error) {
    console.error('💥 Ошибка при получении данных Bitrix:', error);
    
    return new Response(JSON.stringify({ 
      error: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { 
        ...corsHeaders, 
        'Content-Type': 'application/json'
      },
    });
  }
});