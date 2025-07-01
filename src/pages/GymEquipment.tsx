import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import NewProducts from '@/components/NewProducts';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

const GymEquipment: React.FC = () => {
  const equipmentCategories = [
    {
      title: 'Профессиональные беговые дорожки',
      price: 'от 89 990 ₽',
      image: '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png',
      hasButton: true
    },
    {
      title: 'Профессиональные велотренажеры',
      price: 'от 79 990 ₽',
      image: '/lovable-uploads/31e0c62c-257c-4fe3-96b0-d53a4a23f8ca.png'
    },
    {
      title: 'Профессиональные гребные тренажеры',
      price: 'от 149 990 ₽',
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png'
    },
    {
      title: 'Профессиональные эллиптические тренажеры',
      price: 'от 119 990 ₽',
      image: '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png'
    },
    {
      title: 'Профессиональные мультистанции',
      price: 'от 159 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Скамьи и стойки',
      price: 'от 29 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Машина Смита',
      price: 'от 129 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Функциональный тренажер',
      price: 'от 89 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Грузоблочные тренажеры',
      price: 'от 99 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Нагружаемые дискавми',
      price: 'от 59 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Диски и грифы',
      price: 'от 9 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      title: 'Групповые программы',
      price: 'от 19 990 ₽',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    }
  ];

  const ideasAndSelections = [
    {
      title: 'Беговая дорожка Nautilus T628',
      subtitle: 'для подготовки к марафону',
      buttonText: 'для подготовки к марафону',
      image: '/lovable-uploads/f872751c-f187-4794-b1d8-66d545afba51.png'
    },
    {
      title: 'Беговая дорожка Nautilus T628',
      subtitle: 'для подготовки к марафону',
      buttonText: 'для подготовки к марафону',
      image: '/lovable-uploads/f872751c-f187-4794-b1d8-66d545afba51.png'
    },
    {
      title: 'Беговая дорожка Nautilus T628',
      subtitle: 'для подготовки к марафону',
      buttonText: 'для подготовки к марафону',
      image: '/lovable-uploads/f872751c-f187-4794-b1d8-66d545afba51.png'
    },
    {
      title: 'Беговая дорожка Nautilus T628',
      subtitle: 'для подготовки к марафону',
      buttonText: 'для подготовки к марафону',
      image: '/lovable-uploads/f872751c-f187-4794-b1d8-66d545afba51.png'
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
              <BreadcrumbPage>Тренажеры для фитнес-клуба</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#262631]">
            Тренажеры для фитнес-клуба
          </h1>
          <Link 
            to="/home-fitness-equipment" 
            className="text-[#F53B49] hover:underline flex items-center gap-1"
          >
            Тренажеры для дома →
          </Link>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-12">
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

        {/* Ideas and Selections */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#262631]">Идеи и подборки</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                ←
              </button>
              <button className="w-8 h-8 rounded-full bg-[#262631] text-white flex items-center justify-center">
                →
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ideasAndSelections.map((item, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white text-sm mb-3">{item.subtitle}</p>
                  <button className="bg-[#F53B49] text-white px-4 py-2 rounded text-sm w-fit hover:bg-red-600 transition-colors">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* New Products */}
        <NewProducts />
      </div>
      
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default GymEquipment;
