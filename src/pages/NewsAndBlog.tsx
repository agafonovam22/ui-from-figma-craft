import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { getAllNews } from '@/data/newsData';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NewsAndBlogPage: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState(11);
  const allNews = getAllNews();
  const newsItems = allNews.slice(0, itemsToShow);
  const hasMoreNews = itemsToShow < allNews.length;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Новости и блог</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Title */}
          <h1 className="text-[40px] font-bold text-[#17171E] leading-tight mb-8">
            Новости и блог
          </h1>

          {/* News Grid - Same layout as About page */}
          <div className="grid grid-cols-12 gap-4 mb-12">
            {/* Первый контейнер - большой квадрат слева */}
            <div className="col-span-12 md:col-span-6">
              <Link
                to={`/news/${newsItems[0]?.slug}`}
                className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-full"
              >
                <div className="relative">
                  <img
                    src={newsItems[0]?.image}
                    alt={newsItems[0]?.title}
                    className="w-full h-[350px] object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                      НОВОСТИ
                    </div>
                    <div className="text-sm text-gray-600">
                      {newsItems[0]?.date}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                    {newsItems[0]?.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {newsItems[0]?.description}
                  </p>
                </div>
              </Link>
            </div>

            {/* Правая колонка */}
            <div className="col-span-12 md:col-span-6 flex flex-col">
              {/* Второй контейнер - горизонтальный прямоугольник */}
              <div className="h-[250px] mb-4">
                <Link
                  to={`/news/${newsItems[1]?.slug}`}
                  className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-full"
                >
                  <div className="relative">
                    <img
                      src={newsItems[1]?.image}
                      alt={newsItems[1]?.title}
                      className="w-full h-[120px] object-cover"
                    />
                  </div>
                  
                  <div className="p-4 h-[130px] flex flex-col justify-between">
                    <div className="flex justify-between items-center mb-2">
                      <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        НОВОСТИ
                      </div>
                      <div className="text-xs text-gray-600">
                        {newsItems[1]?.date}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-sm mb-2 group-hover:text-[#F53B49] transition-colors line-clamp-3 leading-tight">
                      {newsItems[1]?.title}
                    </h3>
                    
                    <p className="text-xs text-gray-600 line-clamp-4 leading-relaxed">
                      {newsItems[1]?.description}
                    </p>
                  </div>
                </Link>
              </div>

              {/* Третий и четвертый контейнеры - квадратные, выровнены по нижней границе */}
              <div className="flex gap-4 flex-1 items-end">
                {/* Третий контейнер */}
                <div className="flex-1">
                  <Link
                    to={`/news/${newsItems[2]?.slug}`}
                    className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[280px]"
                  >
                    <div className="relative h-[200px]">
                      <img
                        src={newsItems[2]?.image}
                        alt={newsItems[2]?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-3 h-[80px] flex flex-col justify-center">
                      <div className="flex justify-between items-center mb-1">
                        <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                          НОВОСТИ
                        </div>
                        <div className="text-xs text-gray-600">
                          {newsItems[2]?.date}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                        {newsItems[2]?.title}
                      </h3>
                      
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {newsItems[2]?.description}
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Четвертый контейнер */}
                <div className="flex-1">
                  <Link
                    to={`/news/${newsItems[3]?.slug}`}
                    className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[280px]"
                  >
                    <div className="relative h-[200px]">
                      <img
                        src={newsItems[3]?.image}
                        alt={newsItems[3]?.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-3 h-[80px] flex flex-col justify-center">
                      <div className="flex justify-between items-center mb-1">
                        <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                          НОВОСТИ
                        </div>
                        <div className="text-xs text-gray-600">
                          {newsItems[3]?.date}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                        {newsItems[3]?.title}
                      </h3>
                      
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {newsItems[3]?.description}
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительные контейнеры новостей (до 11 на странице) */}
          {newsItems.length > 4 && (
            <>
              {/* Первый ряд - 4 контейнера */}
              {newsItems.slice(4, 8).length > 0 && (
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {newsItems.slice(4, 8).map((item) => (
                    <div key={item.id}>
                      <Link
                        to={`/news/${item.slug}`}
                        className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[280px]"
                      >
                        <div className="relative h-[200px]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="p-3 h-[80px] flex flex-col justify-center">
                          <div className="flex justify-between items-center mb-1">
                            <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                              НОВОСТИ
                            </div>
                            <div className="text-xs text-gray-600">
                              {item.date}
                            </div>
                          </div>
                          
                          <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                            {item.title}
                          </h3>
                          
                          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}

              {/* Остальные новости (8-11) */}
              {newsItems.slice(8, 11).length > 0 && (
                <div className={`mb-8 ${newsItems.slice(8, 11).length === 3 ? 'grid grid-cols-12 gap-4' : newsItems.slice(8, 11).length === 2 ? 'grid grid-cols-2 gap-4' : 'grid grid-cols-1 gap-4'}`}>
                  {newsItems.slice(8, 11).map((item, index) => {
                    // Для случая с 3 контейнерами: первый и третий квадратные (col-span-3), центральный вытянутый (col-span-6)
                    const colSpanClass = newsItems.slice(8, 11).length === 3 
                      ? (index === 1 ? 'col-span-6' : 'col-span-3')
                      : '';
                    
                    return (
                      <div key={item.id} className={colSpanClass}>
                        <Link
                          to={`/news/${item.slug}`}
                          className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[280px]"
                        >
                          <div className="relative h-[200px]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="p-3 h-[80px] flex flex-col justify-center">
                            <div className="flex justify-between items-center mb-1">
                              <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                                НОВОСТИ
                              </div>
                              <div className="text-xs text-gray-600">
                                {item.date}
                              </div>
                            </div>
                            
                            <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                              {item.title}
                            </h3>
                            
                            <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Дополнительные новости (начиная с 12-й) */}
              {newsItems.length > 11 && (
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {newsItems.slice(11).map((item) => (
                    <div key={item.id}>
                      <Link
                        to={`/news/${item.slug}`}
                        className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[280px]"
                      >
                        <div className="relative h-[200px]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="p-3 h-[80px] flex flex-col justify-center">
                          <div className="flex justify-between items-center mb-1">
                            <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                              НОВОСТИ
                            </div>
                            <div className="text-xs text-gray-600">
                              {item.date}
                            </div>
                          </div>
                          
                          <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                            {item.title}
                          </h3>
                          
                          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Show More Button */}
          {hasMoreNews && (
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setItemsToShow(prev => prev + 11)}
                className="px-6 py-2 text-sm font-medium border-2 border-red-500 bg-white text-red-500 rounded-[10px] hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                Показать еще
              </button>
            </div>
          )}

          {/* Pagination - показываем всегда если есть больше 11 новостей */}
          {allNews.length > 11 && (
            <div className="flex justify-center items-center gap-2 mb-12">
              {Array.from({ length: Math.ceil(allNews.length / 11) }, (_, index) => index + 1).map((page) => {
                const isActive = page <= Math.ceil(itemsToShow / 11);
                return (
                  <button
                    key={page}
                    onClick={() => setItemsToShow(page * 11)}
                    className={`w-8 h-8 rounded-full border-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 bg-white text-gray-600 hover:border-black hover:bg-black hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Email Subscription */}
        <EmailSubscription />
      </main>

      <Footer />
    </div>
  );
};

export default NewsAndBlogPage;
