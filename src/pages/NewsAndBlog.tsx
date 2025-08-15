import React from 'react';
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
  const newsItems = getAllNews();

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

          {/* Дополнительные контейнеры новостей */}
          {/* Первый ряд - 4 контейнера */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {newsItems.slice(4, 8).map((item, index) => (
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

          {/* Второй ряд - 2 контейнера */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {newsItems.slice(8, 10).map((item, index) => (
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

          {/* Pagination */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#F53B49]"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>

        {/* Email Subscription */}
        <EmailSubscription />
      </main>

      <Footer />
    </div>
  );
};

export default NewsAndBlogPage;
