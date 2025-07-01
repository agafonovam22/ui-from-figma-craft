
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import IdeasSelections from '@/components/IdeasSelections';
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
  const equipmentCategories = [
    {
      title: 'Беговые дорожки',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png',
      hasButton: true
    },
    {
      title: 'Велотренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/31e0c62c-257c-4fe3-96b0-d53a4a23f8ca.png'
    },
    {
      title: 'Гребные тренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png'
    },
    {
      title: 'Эллиптические тренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png'
    },
    {
      title: 'Настольный теннис',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Аксессуары к тренажерам',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png'
    },
    {
      title: 'Силовые тренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Инверсионные столы',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png'
    },
    {
      title: 'Горизонтальные тренажеры',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png'
    },
    {
      title: 'Уличные виды спорта',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Батуты',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Массажные кресла',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png'
    },
    {
      title: 'Аксессуары для дома',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png'
    },
    {
      title: 'Свободные веса',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Игровые столы',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    }
  ];

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

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {equipmentCategories.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-square mb-3 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-medium text-[#262631] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.price}</p>
              {item.hasButton && (
                <button className="bg-[#262631] text-white px-3 py-2 rounded text-xs hover:bg-gray-800 transition-colors">
                  Перейти →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ideas and Selections - заменяем на компонент с главной страницы */}
      <IdeasSelections />

      {/* New Products - выносим из контейнера */}
      <NewProducts />
      
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default HomeFitnessEquipment;
