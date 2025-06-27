
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
      
      <section className="container mx-auto px-4 py-12 bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Добро пожаловать в мир фитнеса
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональное оборудование для спортзалов, фитнес-центров и домашних тренировок. 
            Качество, надежность и инновации в каждом продукте.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#F53B49] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Качество</h3>
              <p className="text-gray-600">
                Только проверенные бренды и сертифицированное оборудование
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#F53B49] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Оперативная доставка по всей России с гарантией сохранности
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#F53B49] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Поддержка</h3>
              <p className="text-gray-600">
                Профессиональная техническая поддержка и сервисное обслуживание
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Популярные категории</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.1111 18.8115V18.8426C19.1111 19.1448 18.8667 19.3937 18.56 19.3937H0.551111C0.248889 19.3937 0 19.1493 0 18.8426V18.8115C0 18.5093 0.244444 18.2604 0.551111 18.2604H18.5644C18.8667 18.2604 19.1111 18.5093 19.1111 18.8115Z" fill="#F53B49"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-sm">Беговые дорожки</h3>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6373 7.03285C13.0048 6.38518 13.1994 5.65377 13.2022 4.90909C13.2022 2.20211 10.6331 0 7.47498 0C4.31675 0 1.7476 2.20211 1.7476 4.90909Z" fill="#F53B49"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-sm">Гантели</h3>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="#F53B49" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-sm">Велотренажеры</h3>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="13" height="18" stroke="#F53B49" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-sm">Мультистанции</h3>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F53B49] focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F53B49] focus:border-transparent"
                  placeholder="Введите ваш email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F53B49] focus:border-transparent"
                  placeholder="Введите ваше сообщение"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#F53B49] text-white py-2 px-4 rounded-md hover:bg-[#e63946] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F53B49] focus:ring-offset-2"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
