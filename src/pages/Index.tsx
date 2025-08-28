
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import ProductCatalog from '@/components/ProductCatalog';
import NewProducts from '@/components/NewProducts';
import PromotionsOffers from '@/components/PromotionsOffers';
import IdeasSelections from '@/components/IdeasSelections';
import PopularBrands from '@/components/PopularBrands';
import Showrooms from '@/components/Showrooms';
import NewsAndBlog from '@/components/NewsAndBlog';
import EmailSubscription from '@/components/EmailSubscription';
import Footer from '@/components/Footer';
import { useQuery } from '@tanstack/react-query';
import { initTabletLayoutFix } from '@/utils/tabletLayout';

const Index: React.FC = () => {
  // Инициализируем фикс планшетной раскладки
  useEffect(() => {
    const cleanup = initTabletLayoutFix();
    return cleanup;
  }, []);

  // Предзагружаем данные товаров сразу при загрузке главной страницы
  useQuery({
    queryKey: ['all-products'],
    queryFn: async () => {
      console.log('🚀 Предзагрузка товаров на главной странице...');
      const response = await fetch('https://cp44652.tw1.ru/catalog.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 минут
    gcTime: 30 * 60 * 1000, // 30 минут
  });
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="w-full">
        <div className="max-w-[1800px] mx-auto flex flex-col gap-6 md:gap-4 lg:gap-6 pt-6 md:pt-4 lg:pt-6 px-[30px] md:px-[20px] lg:px-[30px]">
          <Banner />
          <ProductCatalog />
          <NewProducts />
          <PromotionsOffers />
          <IdeasSelections />
          <PopularBrands />
          <Showrooms />
          <NewsAndBlog />
        </div>
        <EmailSubscription />
        <div className="h-[70px]"></div>
        <Footer />
      </div>
    </main>
  );
};

export default Index;
