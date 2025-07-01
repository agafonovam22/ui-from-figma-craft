import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
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

  const ideasAndSelections = [
    {
      title: 'Беговая дорожка Nautilus T628',
      subtitle: 'для подготовки к марафону',
      buttonText: 'Перейти →',
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

  const newProducts = [
    {
      title: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 12,
      image: '/lovable-uploads/f872751c-f187-4794-b1d8-66d545afba51.png',
      badges: ['АКЦИЯ', 'ХИТ ПРОДАЖ']
    },
    {
      title: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 12,
      image: '/lovable-uploads/f872751c-f187-4794-b1d8-66d545afba51.png',
      badges: ['АКЦИЯ', 'ХИТ ПРОДАЖ']
    },
    {
      title: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: '5 890 ₽',
      discount: '-25%',
      rating: 4.5,
      reviews: 12,
      image: '/lovable-uploads/f872751c-f187-4794-b1d8-66d545afba51.png',
      badges: ['РАСПРОДАЖА', 'ХИТ ПРОДАЖ']
    },
    {
      title: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 12,
      image: '/lovable-uploads/f872751c-f187-4794-b1d8-66d545afba51.png',
      badges: ['ХИТ', 'НОВИНКА']
    },
    {
      title: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 12,
      image: '/lovable-uploads/f872751c-f187-4794-b1d8-66d545afba51.png',
      badges: ['ХИТ', 'НОВИНКА']
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
          
          <div className="mt-6 flex justify-start">
            <button className="text-[#F53B49] border border-[#F53B49] px-6 py-2 rounded hover:bg-[#F53B49] hover:text-white transition-colors">
              Показать все идеи
            </button>
          </div>
        </section>

        {/* New Products */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#262631]">Новинки</h2>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                ←
              </button>
              <button className="w-8 h-8 rounded-full bg-[#262631] text-white flex items-center justify-center">
                →
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {newProducts.map((product, index) => (
              <div key={index} className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="relative mb-3">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-40 object-contain"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className={`px-2 py-1 text-xs rounded ${
                          badge === 'АКЦИЯ' ? 'bg-red-500 text-white' :
                          badge === 'ХИТ ПРОДАЖ' ? 'bg-blue-500 text-white' :
                          badge === 'РАСПРОДАЖА' ? 'bg-orange-500 text-white' :
                          badge === 'ХИТ' ? 'bg-red-500 text-white' :
                          badge === 'НОВИНКА' ? 'bg-green-500 text-white' :
                          'bg-gray-500 text-white'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>
                
                <h3 className="text-sm font-medium text-[#262631] mb-2 line-clamp-2">{product.title}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-[#262631]">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                  {product.discount && (
                    <span className="text-sm text-red-500">{product.discount}</span>
                  )}
                </div>
                
                <button className="w-full bg-[#F53B49] text-white py-2 rounded hover:bg-red-600 transition-colors">
                  Купить
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-start">
            <button className="text-[#F53B49] border border-[#F53B49] px-6 py-2 rounded hover:bg-[#F53B49] hover:text-white transition-colors">
              Показать все
            </button>
          </div>
        </section>
      </div>
      
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default HomeFitnessEquipment;
