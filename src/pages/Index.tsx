
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
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <Header />
      <div className="flex flex-col gap-6 w-full pt-6">
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
      <Footer />
    </main>
  );
};

export default Index;
