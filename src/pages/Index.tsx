
import React from 'react';
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

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center gap-[50px]">
      <Header />
      <Banner />
      <ProductCatalog />
      <NewProducts />
      <PromotionsOffers />
      <IdeasSelections />
      <PopularBrands />
      <Showrooms />
      <NewsAndBlog />
      <EmailSubscription />
    </main>
  );
};

export default Index;
