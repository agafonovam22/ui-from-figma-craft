
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import IdeasSelections from '@/components/IdeasSelections';
import ProductCard from '@/components/ProductCard';
import { useBitrixCatalog } from '@/hooks/useBitrixCatalog';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

const HomeFitnessEquipment: React.FC = () => {
  // Используем реальные данные из Bitrix API
  const { products: bitrixProducts, loading, error } = useBitrixCatalog("https://cp44652.tw1.ru/catalog.php");
  
  // Берем реальные товары и создаем формат для ProductCard
  const homeProducts = bitrixProducts.map(product => ({
    id: product.id,
    name: product.name,
    image: product.image_url,
    price: `${product.price.toLocaleString()} ₽`
  }));

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-6">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Главная</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Тренажеры для дома</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#262631]">
            Тренажеры для дома
          </h1>
          <Link 
            to="/gym-equipment" 
            className="text-[#F53B49] hover:underline flex items-center gap-1"
          >
            Тренажеры для фитнес-клуба →
          </Link>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F53B49] mx-auto mb-4"></div>
              <p className="text-gray-600">Загрузка товаров...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600 mb-2">Ошибка загрузки товаров</p>
            <p className="text-gray-500 text-sm">{error}</p>
          </div>
        ) : (
          <>
            {/* Equipment Grid - First 5 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[10px] mb-[10px] [&>*]:h-auto [&>*]:min-h-0 [&_img]:w-full [&_img]:h-auto [&_img]:object-contain">
              {homeProducts.slice(0, 5).map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <img 
                      src={product.image || '/placeholder.svg'} 
                      alt={product.name || "Товар"}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-[#F53B49] font-bold">{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Equipment Grid - Next 5 items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[10px] mb-[10px] [&>*]:h-auto [&>*]:min-h-0 [&_img]:w-full [&_img]:h-auto [&_img]:object-contain">
              {homeProducts.slice(5, 10).map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="block">
                  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <img 
                      src={product.image || '/placeholder.svg'} 
                      alt={product.name || "Товар"}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                      <p className="text-[#F53B49] font-bold">{product.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Equipment Grid - Third row */}
            {homeProducts.length > 10 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[10px] mb-12 [&>*]:h-auto [&>*]:min-h-0 [&_img]:w-full [&_img]:h-auto [&_img]:object-contain">
                {homeProducts.slice(10).map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="block">
                    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <img 
                        src={product.image || '/placeholder.svg'} 
                        alt={product.name || "Товар"}
                        className="w-full h-auto object-contain"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="p-4">
                        <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                        <p className="text-[#F53B49] font-bold">{product.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Ideas and Selections */}
      <IdeasSelections />

      {/* New Products */}
      <NewProducts />
      
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default HomeFitnessEquipment;
