import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const CompanyNews: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      category: 'НОВОСТИ',
      categoryColor: 'bg-blue-600',
      date: '5 ноября 2024',
      title: 'Участие в выставке FIBO 2024',
      description: 'Наша компания примет участие в крупнейшей европейской выставке фитнес-индустрии FIBO 2024...',
      image: '/lovable-uploads/023b26eb-eb56-4cda-a803-a5b956c04928.png',
      size: 'large',
      slug: 'uchastie-v-vystavke-fibo-2024'
    },
    {
      id: 2,
      category: 'АКЦИИ',
      categoryColor: 'bg-red-600',
      date: '3 ноября 2024',
      title: 'Скидки до 30% на кардиотренажеры',
      description: 'Специальное предложение на беговые дорожки, велотренажеры и эллиптические тренажеры...',
      image: '/lovable-uploads/03483cd7-94a8-4050-b663-8e2a5d663e53.png',
      size: 'medium',
      slug: 'skidki-kardiotrenazher'
    },
    {
      id: 3,
      category: 'НОВОСТИ',
      categoryColor: 'bg-blue-600',
      date: '1 ноября 2024',
      title: 'Новая линейка силовых тренажеров',
      description: 'Представляем обновленную серию профессиональных силовых тренажеров для коммерческих залов...',
      image: '/lovable-uploads/0462b888-2df8-4ad7-bb09-8316f32e5fd1.png',
      size: 'medium',
      slug: 'novaya-lineyka-silovyh-trenazherov'
    },
    {
      id: 4,
      category: 'СОБЫТИЯ',
      categoryColor: 'bg-green-600',
      date: '28 октября 2024',
      title: 'Открытие нового шоу-рума в Санкт-Петербурге',
      description: 'Мы рады объявить об открытии нового демонстрационного зала в центре Санкт-Петербурга...',
      image: '/lovable-uploads/049bf5bb-7991-4efb-b320-8c8dfb850ff2.png',
      size: 'small',
      slug: 'otkrytie-shou-ruma-spb'
    },
    {
      id: 5,
      category: 'АКЦИИ',
      categoryColor: 'bg-red-600',
      date: '25 октября 2024',
      title: 'Осенняя распродажа домашних тренажеров',
      description: 'Успейте приобрести домашние тренажеры со скидкой до 25% до конца месяца...',
      image: '/lovable-uploads/052844f7-bb47-4b45-ba40-d4123336188f.png',
      size: 'small',
      slug: 'osennyaya-rasprodazha'
    },
    {
      id: 6,
      category: 'НОВОСТИ',
      categoryColor: 'bg-blue-600',
      date: '22 октября 2024',
      title: 'Сертификация ISO 9001:2015',
      description: 'Наша компания успешно прошла сертификацию по международному стандарту качества...',
      image: '/lovable-uploads/05ba64f8-caa1-4ce9-8069-6889a6182ae3.png',
      size: 'small',
      slug: 'sertifikaciya-iso-9001'
    },
    {
      id: 7,
      category: 'СОБЫТИЯ',
      categoryColor: 'bg-green-600',
      date: '20 октября 2024',
      title: 'Мастер-класс по функциональному тренингу',
      description: 'Приглашаем на бесплатный мастер-класс от ведущих тренеров по функциональной подготовке...',
      image: '/lovable-uploads/0838e433-093a-4bb6-a996-3a7c584ed057.png',
      size: 'medium',
      slug: 'master-klass-funkcionalniy-trening'
    },
    {
      id: 8,
      category: 'НОВОСТИ',
      categoryColor: 'bg-blue-600',
      date: '18 октября 2024',
      title: 'Партнерство с ведущими спортивными клубами',
      description: 'Заключены договоры о сотрудничестве с крупнейшими фитнес-сетями России...',
      image: '/lovable-uploads/08975827-d091-4c00-9cb5-85e93a4b1853.png',
      size: 'small',
      slug: 'partnerstvo-sportivnye-kluby'
    },
    {
      id: 9,
      category: 'АКЦИИ',
      categoryColor: 'bg-red-600',
      date: '15 октября 2024',
      title: 'Специальное предложение для залов',
      description: 'Выгодные условия поставки оборудования для фитнес-центров и спортивных комплексов...',
      image: '/lovable-uploads/08d1344d-ca43-44d2-b953-28d3cb4c83d2.png',
      size: 'small',
      slug: 'specialnoe-predlozhenie-zaly'
    }
  ];

  const getCardClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-2 row-span-2';
      case 'medium':
        return 'col-span-2 row-span-1';
      case 'small':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getImageHeight = (size: string) => {
    switch (size) {
      case 'large':
        return 'h-64';
      case 'medium':
        return 'h-32';
      case 'small':
      default:
        return 'h-24';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <div className="container mx-auto px-4">
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
                  <Link to="/about">О компании</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>Новости и блог</BreadcrumbPage>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-8">Новости и блог</h1>

          {/* News Grid */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {newsItems.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.slug}`}
                className={`${getCardClasses(item.size)} group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full ${getImageHeight(item.size)} object-cover`}
                  />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-3 left-3 ${item.categoryColor} text-white px-2 py-1 rounded text-xs font-medium`}>
                    {item.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-2">
                    {item.date}
                  </div>
                  
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
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

export default CompanyNews;