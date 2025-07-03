import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const UslugiCategories: React.FC = () => {
  const categories = [
    {
      id: 'business',
      title: 'Для бизнеса',
      description: 'Профессиональные решения для фитнес-центров, спортивных залов и коммерческих объектов',
      image: '/lovable-uploads/1750c483-ca71-4fb0-85b9-fd2efc819a71.png',
      href: '/uslugi/business'
    },
    {
      id: 'individuals',
      title: 'Для физ лиц',
      description: 'Индивидуальные решения для домашних спортзалов и персональных тренировок',
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png',
      href: '/uslugi/individuals'
    },
    {
      id: 'service',
      title: 'Сервис',
      description: 'Техническое обслуживание, ремонт и поддержка спортивного оборудования',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png',
      href: '/uslugi/service'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-12">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
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
                <BreadcrumbPage>Услуги</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Услуги</h1>
          <p className="text-lg text-gray-600 mb-12">
            Выберите категорию услуг, которая подходит именно вам
          </p>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.href}
                className="group bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#F53B49] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {category.description}
                  </p>
                  <Button 
                    className="bg-[#F53B49] hover:bg-[#e63946] text-white w-full group-hover:bg-[#e63946]"
                    asChild
                  >
                    <span>Выбрать категорию →</span>
                  </Button>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Не знаете, какая категория подходит?
            </h2>
            <p className="text-lg mb-6 text-gray-200">
              Наши специалисты помогут вам определиться с выбором и подберут оптимальное решение
            </p>
            <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 text-lg font-semibold">
              Получить консультацию
            </Button>
          </div>
        </div>
      </main>

      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default UslugiCategories;