import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NewsCardioB35: React.FC = () => {
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
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/news">Новости и блог</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Новинка - Уже в продаже: Вертикальный велотренажёр CardioPower B35</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Back Button */}
          <Link 
            to="/news"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Назад к новостям
          </Link>
        </div>

        {/* Banner */}
        <section className="w-full bg-gradient-to-r from-[#F53B49] to-[#FF6B7A] text-white py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="text-center">
              <h1 className="text-[48px] font-bold leading-tight mb-4">
                Новинка - Уже в продаже: Вертикальный велотренажёр CardioPower B35
              </h1>
              <p className="text-xl opacity-90">
                06.09.2023
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-2 sm:px-4 lg:px-8">
            
            {/* Main heading */}
            <h2 className="text-3xl font-bold text-[#17171E] mb-8 text-center">
              Сообщаем о расширении линейки велотренажеров и поступлении новой модели CardioPower
            </h2>

            {/* Product Image */}
            <div className="mb-12 text-center">
              <img 
                src="/lovable-uploads/8eadf7c5-335a-457a-bc12-a5cc40bac122.png"
                alt="Вертикальный велотренажёр CardioPower B35"
                className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
                style={{ maxHeight: '600px' }}
              />
            </div>

            {/* Product Title */}
            <h3 className="text-2xl font-semibold text-[#17171E] mb-6">
              Вертикальный велотренажёр CardioPower B35
            </h3>

            {/* Product Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Вертикальный велотренажёр CardioPower B35, выполненный в инновационном, футуристическом дизайне, имеет заниженную раму для удобной посадки. Правильная эргономика тренажера сохраняет комфортное положения для людей разного роста и комплекции. Электромагнитная система сопротивления с 16 уровнями обеспечивает точную настройку нагрузки, что важно для достижения лучших фитнес результатов.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="text-center mt-12">
              <button className="bg-[#F53B49] hover:bg-[#E02B39] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 text-lg">
                Перейти
              </button>
            </div>

            {/* Related Articles or Back to News */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="text-center">
                <Link 
                  to="/news"
                  className="inline-flex items-center gap-2 text-[#F53B49] hover:text-[#E02B39] font-medium transition-colors"
                >
                  ← Вернуться к новостям
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsCardioB35;