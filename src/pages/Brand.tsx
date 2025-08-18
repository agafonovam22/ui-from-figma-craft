import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import IdeasSelections from '@/components/IdeasSelections';
import ProductCard from '@/components/ProductCard';
import { Link, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const Brand: React.FC = () => {
  const { brandSlug } = useParams();
  
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [expandedFilters, setExpandedFilters] = useState({
    price: true,
    type: true,
    power: true,
    trainer: true
  });

  const toggleFilter = (filterName: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };
  
  const products = [
    {
      id: 1,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.8,
      reviews: 124,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Новинка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: null,
      originalPrice: null,
      discount: null,
      rating: 4.6,
      reviews: 89,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Хит продаж',
      badgeColor: 'bg-orange-500',
      isAvailable: false,
      hasComparison: true,
      inStock: false
    },
    {
      id: 3,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.7,
      reviews: 67,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Скидка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    },
    {
      id: 4,
      name: 'Гребной тренажер CardioPower PRO CR300',
      price: '4 610 ₽',
      originalPrice: null,
      discount: null,
      rating: 4.9,
      reviews: 156,
      image: '/lovable-uploads/82291ada-a8f2-4776-8a6a-2257bf8ea4c1.png',
      badge: 'Скидка',
      badgeColor: 'bg-green-500',
      isAvailable: true,
      hasComparison: true,
      inStock: true
    }
  ];

  const allProducts = Array(8).fill(null).map((_, index) => ({
    ...products[index % 4],
    id: index + 1
  }));
  
  // В реальном приложении здесь бы был запрос к API для получения данных бренда
  const getBrandName = (slug: string) => {
    switch(slug) {
      case 'bowflex': return 'BowFlex';
      case 'true': return 'TRUE';
      case 'cardio-power': return 'Cardio Power';
      case 'cardiopower-pro': return 'CardioPower PRO';
      case 'schwinn': return 'Schwinn';
      case 'nautilus': return 'Nautilus';
      case 'sole-fitness': return 'Sole Fitness';
      case 'peach-builder': return 'PEACH BUILDER';
      case 'gym80': return 'Gym80';
      case 'oktan': return 'Octane';
      case 'visbody': return 'Visbody';
      case 'smith': return 'SMITH';
      case 'slide-fit': return 'Slide&FIT';
      case 'inspire': return 'INSPIRE';
      case 'hyfit': return 'HYFIT';
      case 'maxgym': return 'MAXGYM';
      case 'maxfit': return 'MAXFIT';
      case 'meridien': return 'MÉRIDIEN';
      case 'proski': return 'PROSKI';
      default: return 'kernel';
    }
  };
  
  const brandName = getBrandName(brandSlug || 'kernel');

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
                  <Link to="/brands">Бренды</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{brandName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Banner */}
        <section className="w-full">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            {brandSlug === 'smith' ? (
              <img 
                src="/lovable-uploads/f498a2f2-fe81-4399-a22b-4a862808da8e.png"
                alt="SMITH"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'true' ? (
              <img 
                src="/lovable-uploads/35e36954-8eff-4c7e-b767-25d10bdc4d5f.png"
                alt="TRUE"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'bowflex' ? (
              <img 
                src="/lovable-uploads/dfd89713-01a7-424b-ac65-9930cce15038.png"
                alt="BOWFLEX"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'schwinn' ? (
              <img 
                src="/lovable-uploads/f27b287e-146c-4c3b-8260-101fc643713c.png"
                alt="SCHWINN"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'peach-builder' ? (
              <img 
                src="/lovable-uploads/7204754a-8eef-44aa-9104-a96cbcc4fb22.png"
                alt="PEACH BUILDER"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'sole' ? (
              <img 
                src="/lovable-uploads/bea9a0e2-9f97-48ec-ab5d-a587519fd11b.png"
                alt="SOLE"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'variosling' ? (
              <img 
                src="/lovable-uploads/8fa0a3df-812f-4000-87a8-50dd066f0dee.png"
                alt="VARIOSLING"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'cardiopower' ? (
              <img 
                src="/lovable-uploads/837de395-dc6d-4619-8c00-7b73780fd538.png"
                alt="CARDIO POWER"
                className="w-full h-auto object-cover"
              />
             ) : brandSlug === 'inspire' ? (
               <img 
                 src="/lovable-uploads/081993fe-cd43-4ad8-ad5a-c50e3220df42.png"
                 alt="INSPIRE"
                 className="w-full h-auto object-cover"
               />
             ) : brandSlug === 'scholle' ? (
               <img 
                 src="/lovable-uploads/c5965882-8568-4b77-906d-1106ba604083.png"
                 alt="SCHOLLE"
                 className="w-full h-auto object-cover"
               />
             ) : brandSlug === 'hyfit' ? (
              <img 
                src="/lovable-uploads/2da03814-54a7-4db9-8c63-309d89c1fbbc.png"
                alt="HYFIT"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'maxgym' ? (
              <img 
                src="/lovable-uploads/127d325a-54b9-48cb-9292-271163e02120.png"
                alt="MAXGYM"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'meridien' ? (
              <img 
                src="/lovable-uploads/c72b78ed-7297-4a85-b929-5355941cde3f.png"
                alt="MERIDIEN"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'centr' ? (
              <img 
                src="/lovable-uploads/124c5630-193d-427c-93af-8c42f41f21aa.png"
                alt="CENTR"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'maxfit' ? (
              <img 
                src="/lovable-uploads/5511dc48-70e2-47a6-93b6-36eb7883670c.png"
                alt="MAXFIT - Эволюция фитнеса для прогрессивных тренировок"
                className="w-full h-auto object-cover"
              />
            ) : brandSlug === 'proski' ? (
              <img 
                src="/lovable-uploads/b29d37d2-b36a-4d9f-99db-1b1f4ab7ac17.png"
                alt="PROSKI - Горы у вас дома!"
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="bg-white overflow-hidden relative" style={{ height: '300px' }}>
                <div className="py-12 relative h-full">
                  <div className="flex items-center justify-between h-full">
                    {/* Левая часть с текстом */}
                    <div className="flex-1 max-w-lg z-10" style={{ paddingTop: '40px', paddingLeft: '60px' }}>
                      <div className="mb-6">
                        <span 
                          className="text-sm tracking-[3.78px] uppercase font-benzin"
                          style={{ 
                            color: '#F53B49',
                            fontWeight: 400,
                            lineHeight: '110%'
                          }}
                        >
                          {brandName.toUpperCase()}
                        </span>
                      </div>
                      
                       <h1 
                         className="text-4xl mb-6 leading-tight font-benzin"
                         style={{
                           color: '#262631',
                           fontWeight: 400,
                           lineHeight: '105%'
                         }}
                        >
                           {brandSlug === 'true' ? 'МЫ – TRUE' : brandSlug === 'cardio-power' ? 'CARDIO POWER' : brandSlug === 'schwinn' ? 'SCHWINN' : brandSlug === 'nautilus' ? 'NAUTILUS' : brandSlug === 'sole-fitness' ? 'SOLE FITNESS' : brandSlug === 'peach-builder' ? 'PEACH BUILDER' : brandSlug === 'gym80' ? 'GYM80' : brandSlug === 'oktan' ? 'OCTANE FITNESS' : brandSlug === 'visbody' ? 'VISBODY' : brandSlug === 'bowflex' ? 'BOWFLEX' : brandSlug === 'scholle' ? 'SCHOLLE: Немецкое качество для активного образа жизни' : brandSlug === 'smith' ? 'SMITH: профессиональное фитнес-оборудование с безупречной репутацией' : brandSlug === 'sintesi' ? 'SINTESI' : 'Качественное спортивное оборудование'}
                        </h1>
                      
                      <button className="bg-[#F53B49] text-white px-6 py-3 rounded hover:bg-[#e63946] transition-colors font-manrope">
                        Узнать больше
                      </button>
                    </div>
                    
                    {/* Правая часть с изображением */}
                    <div className="absolute" style={{ right: '60px', top: '10px' }}>
                      <div className="relative">
                        <div className="w-[350px] h-[350px] bg-[#F53B49] rounded-full flex items-center justify-center">
                           <img 
                             src={brandSlug === 'bowflex' ? '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png' : brandSlug === 'meridien' ? '/lovable-uploads/bccb9570-9519-4d88-a3b7-061c75d83b7a.png' : '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png'}
                             alt={`${brandName} оборудование`}
                             className="w-[350px] h-[350px] object-contain"
                             style={{ objectPosition: 'center right', transform: 'translateX(20px)' }}
                           />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Навигационные точки */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    <div className="w-8 h-1 bg-[#F53B49] rounded"></div>
                    <div className="w-2 h-1 bg-gray-300 rounded"></div>
                    <div className="w-2 h-1 bg-gray-300 rounded"></div>
                    <div className="w-2 h-1 bg-gray-300 rounded"></div>
                  </div>
                </div>
                
                {/* Стрелки навигации */}
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#262631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9L1 5L5 1" stroke="#262631" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </section>

        {/* First Content Block - Image Left, Text Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Image */}
              <div className="order-1">
                <img 
                  src={brandSlug === 'cardio-power' ? '/lovable-uploads/16904733-b1ae-4f10-8b24-795bc1b439f6.png' : brandSlug === 'true' ? '/lovable-uploads/21b038a7-1ec4-44c6-a96c-6a342c3603de.png' : brandSlug === 'bowflex' ? '/lovable-uploads/2047d7ac-2ac8-45b9-a8e0-ca22ab3a5013.png' : brandSlug === 'peach-builder' ? '/lovable-uploads/62839881-d0dc-4f55-81c1-2b042e81d0e3.png' : brandSlug === 'gym80' ? '/lovable-uploads/e2418140-1de7-4f5d-b34d-680fa363e740.png' : brandSlug === 'schwinn' ? '/lovable-uploads/5a7d56a3-1cee-438a-b65a-a3479013fe70.png' : brandSlug === 'oktan' ? '/lovable-uploads/b7860c53-38e6-490f-a402-9811296c1da3.png' : brandSlug === 'visbody' ? '/lovable-uploads/7f518539-41a1-4a19-8284-3b07384c5521.png' : brandSlug === 'smith' ? '/lovable-uploads/65e88678-9ddb-4054-8aa5-9168061e974c.png' : brandSlug === 'slide-fit' ? '/lovable-uploads/dedbea23-0db1-4b59-a6c3-480221fe1bce.png' : brandSlug === 'scholle' ? '/lovable-uploads/2426d4bb-0cd0-41f1-8fc4-e3685ff725c7.png' : brandSlug === 'inspire' ? '/lovable-uploads/02405569-7f43-47f4-997a-7d85e0efdea8.png' : brandSlug === 'hyfit' ? '/lovable-uploads/55597898-53a4-47b5-922e-18b6483925f6.png' : brandSlug === 'maxfit' ? '/lovable-uploads/2894b742-e7cf-47d8-96a8-7d07f315ba2a.png' : brandSlug === 'meridien' ? '/lovable-uploads/bf4193a1-d807-4319-80dd-08595cce7af3.png' : '/lovable-uploads/bf4193a1-d807-4319-80dd-08595cce7af3.png'}
                  alt="Спортивные тренировки"
                  className="w-full object-cover rounded-lg"
                  style={brandSlug === 'true' ? { height: '300px' } : brandSlug === 'smith' ? { height: '260px' } : brandSlug === 'bowflex' ? { height: '150px' } : { height: '500px' }}
                />
              </div>
              
              {/* Right Text */}
              <div className="order-2 lg:pl-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  {brandSlug === 'true' ? 'МЫ – TRUE' : brandSlug === 'cardio-power' ? 'CARDIO POWER' : brandSlug === 'cardiopower-pro' ? 'Надежность, проверенная потоком' : brandSlug === 'schwinn' ? 'Schwinn — легендарное качество для домашнего фитнеса' : brandSlug === 'nautilus' ? 'Nautilus – инновации, изменившие мир фитнеса' : brandSlug === 'sole-fitness' ? 'Sole Fitness – бескомпромиссное качество для тех, кто тренируется всерьез' : brandSlug === 'peach-builder' ? 'PEACH BUILDER — революция в тренировке ягодичных мышц' : brandSlug === 'gym80' ? 'GYM80 — немецкое качество для профессиональных результатов' : brandSlug === 'oktan' ? 'Octane Fitness — эллиптические тренажеры нового поколения' : brandSlug === 'visbody' ? 'Visbody — инновационные технологии для анализа тела' : brandSlug === 'bowflex' ? 'BOWFLEX' : brandSlug === 'scholle' ? 'SCHOLLE: Немецкое качество для активного образа жизни' : brandSlug === 'smith' ? 'SMITH: профессиональное фитнес-оборудование с безупречной репутацией' : brandSlug === 'slide-fit' ? 'Инновационные тренажеры из Словении для комплексного развития тела' : brandSlug === 'inspire' ? 'INSPIRE: Американское качество для профессионального тренинга' : brandSlug === 'hyfit' ? 'HYFIT: Интеллектуальный фитнес с регулируемыми нагрузками' : brandSlug === 'maxgym' ? 'MAXGYM: Профессиональная сила без компромиссов' : brandSlug === 'maxfit' ? 'MAXFIT: Инновационные тренажеры с интеллектуальной регулировкой нагрузки' : brandSlug === 'meridien' ? 'MÉRIDIEN: ГДЕ НАЧИНАЕТСЯ ВАШ КОМФОРТ' : brandSlug === 'sintesi' ? 'Будущее тренировок уже здесь' : 'МЫ – TRUE'}
                </h2>
                
                <div className="mb-8">
                  {brandSlug === 'cardio-power' ? (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        CardioPower – это передовые технологии, надежность и доступность в мире кардиотренажеров. С 2010 года мы создаем оборудование, которое помогает добиваться результатов – как дома, так и в профессиональных залах. Наши тренажеры выбирают те, кто ценит качество, безопасность и инновации без переплат.
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope mb-4">
                        Мы делаем только то, в чем действительно сильны:
                      </p>
                      <ul className="text-gray-600 text-sm leading-relaxed font-manrope mb-4 ml-4">
                        <li>- Беговые дорожки, где каждый шаг – это комфорт и мощность</li>
                        <li>- Эллипсы с плавностью профессионального уровня</li>
                        <li>- Сайклы, заряженные энергией групповых тренировок</li>
                        <li>- Гребные тренажеры для комплексной нагрузки</li>
                      </ul>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Наша философия проста: «Хороший кардиотренажер – не роскошь, а ваш надежный партнер».
                      </p>
                    </>
                  ) : brandSlug === 'schwinn' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      С момента своего основания в 1895 году компания Schwinn стала символом инноваций и надежности в мире спортивного оборудования. Начав с производства велосипедов, которые завоевали сердца миллионов, бренд перенес свои лучшие традиции в сферу домашнего фитнеса, создавая кардиотренажеры, сочетающие в себе проверенное качество и современные технологии.
                    </p>
                  ) : brandSlug === 'nautilus' ? (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        С 1986 года мы не просто создаем тренажеры – мы проектируем будущее фитнес-индустрии. Сегодня Nautilus Inc. – это:
                      </p>
                      <ul className="text-gray-600 text-sm leading-relaxed font-manrope mb-4 ml-4">
                        <li>- Мировой лидер в ТОП-3 производителей фитнес-оборудования</li>
                        <li>- 4 легендарных бренда в портфолио: Nautilus, Bowflex, Schwinn, Universal</li>
                        <li>- Технологии, которые задают тренды – 130+ стран доверяют нашему качеству</li>
                      </ul>
                    </>
                  ) : brandSlug === 'sole-fitness' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      С момента основания в 1999 году Sole Fitness зарекомендовал себя как бренд, для которого не существует компромиссов между качеством, технологичностью и долговечностью. Наше оборудование – это не просто тренажеры, а инвестиция в ваше здоровье на десятилетия вперед. Мы понимаем, что настоящие ценители фитнеса заслуживают оборудования, которое не подведет в самый ответственный момент тренировки, поэтому каждую деталь наших беговых дорожек, эллиптических и велотренажеров мы проектируем максимально прочными.
                    </p>
                  ) : brandSlug === 'gym80' ? (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        Мы всегда смотрим вперед. Мы не стоим на месте и никогда не удовлетворяемся достигнутым, потому что верим — нет предела совершенству. Эти ценности определяют Gym80 уже более сорока лет.
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Сегодня Gym80 — один из крупнейших европейских производителей силовых тренажеров с самой широкой линейкой оборудования на рынке. Мы входим в число мировых лидеров индустрии и продолжаем доказывать, что немецкое качество, внимание к деталям и научный подход могут создавать по-настоящему уникальные продукты.
                      </p>
                    </>
                  ) : brandSlug === 'peach-builder' ? (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        В мире фитнеса, где каждая деталь имеет значение, появилось оборудование, перевернувшее представление о тренировке ягодиц. PEACH BUILDER — это не просто линейка тренажеров, а тщательно продуманная система, созданная для тех, кто стремится к совершенству формы и функциональности.
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Рожденный из понимания анатомических особенностей и биомеханики, этот бренд объединил в себе инженерное мастерство и страсть к созданию идеальных пропорций. Каждый тренажер в коллекции — это результат многолетних исследований и тестирований, воплотивший в себе последние достижения в области фитнес-технологий.
                      </p>
                    </>
                  ) : brandSlug === 'oktan' ? (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        Octane Fitness — это бренд, который придумал, как сделать кардиотренировки удобными, эффективными и безопасными для всех. Компания появилась в 2001 году и сразу решила сосредоточиться на главном — создавать лучшие в мире эллиптические тренажеры. За эти годы Octane успела придумать множество новых решений, которых не было ни у кого.
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Главная идея бренда — помочь людям больше двигаться и получать от этого удовольствие. Все тренажеры Octane продуманы до мелочей: они удобные, тихие, красивые и занимают мало места. На них могут тренироваться и новички, и опытные спортсмены, и те, кому нужно восстановить силы после болезни или травмы.
                      </p>
                    </>
                  ) : brandSlug === 'visbody' ? (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        Visbody — это революционная технология анализа состава тела, которая выводит измерения на новый уровень точности и детализации. Используя передовые методы биоимпедансометрии и 3D-сканирования, оборудование Visbody предоставляет комплексную картину физического состояния за считанные секунды.
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Наши системы используются в ведущих фитнес-клубах, медицинских центрах и исследовательских институтах по всему миру, помогая специалистам принимать обоснованные решения и отслеживать прогресс с научной точностью.
                      </p>
                    </>
                  ) : brandSlug === 'bowflex' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Bowflex — это бренд из США с богатой историей, который уже почти сорок лет помогает людям по всему миру тренироваться дома и чувствовать себя лучше. С 1986 года компания создает удобные, надежные и современные тренажеры, которые подходят всем — от новичков до опытных спортсменов.
                    </p>
                  ) : brandSlug === 'scholle' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      На протяжении десяти лет немецкий бренд SCHOLLE завоевывает доверие потребителей, предлагая исключительно качественное спортивное оборудование для всей семьи. Специализируясь на производстве батутов, инверсионных столов и разнообразного спортинвентаря, компания воплощает в своих продуктах традиционную немецкую педантичность и внимание к деталям.
                    </p>
                  ) : brandSlug === 'smith' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Когда речь заходит о надежном и технологичном фитнес-оборудовании для коммерческого использования, бренд SMITH занимает особое место на рынке. Это не просто производитель тренажеров — это команда инженеров и дизайнеров, которые фанатично относятся к качеству каждой детали. Основа философии SMITH — доверие. Доверие к технологиям, которые они внедряют, доверие к материалам, которые используют, и доверие клиентов, которые выбирают их оборудование год за годом.
                    </p>
                   ) : brandSlug === 'slide-fit' ? (
                     <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                       Словенский бренд Slide&FIT создает профессиональные тренажеры, объединяющие в себе спортивные технологии и природную мощь альпийских традиций. Оборудование разработано для тех, кто стремится к гармоничному развитию всех групп мышц, сочетая функциональные тренировки с элементами горных видов спорта. Каждый тренажер – это симбиоз инженерной мысли и глубокого понимания биомеханики человеческого тела.
                     </p>
                   ) : brandSlug === 'inspire' ? (
                     <>
                       <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                         На протяжении четверти века бренд INSPIRE остается символом надежности и инноваций в мире фитнес-оборудования. С момента основания в 2003 году компания завоевала доверие профессионалов и любителей фитнеса по всему миру, предлагая уникальные решения для спортивных залов и домашних тренировок.
                       </p>
                      </>
                    ) : brandSlug === 'hyfit' ? (
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Бренд HYFIT совершил революцию в домашнем и профессиональном тренинге, предложив линейку полностью регулируемого оборудования. Философия проста: максимум функциональности при минимальном занимаемом пространстве. Каждый тренажер HYFIT – это универсальная тренировочная станция, позволяющая мгновенно изменять нагрузку до 40 кг одним движением руки.
                      </p>
                    ) : brandSlug === 'maxgym' ? (
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Бренд MAXGYM из линейки Smith Strength представляет собой золотую середину между профессиональным качеством и доступной ценой. Тренажеры созданы для тех, кто ценит надежность и функциональность в каждом элементе. От грузоблочных станций до машин Смита - каждое оборудование проходит строгий контроль качества и рассчитано на интенсивную эксплуатацию в условиях фитнес-клубов с высокой проходимостью.
                      </p>
                    ) : brandSlug === 'maxfit' ? (
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        MAXFIT – это новый стандарт в мире фитнес-оборудования, где технология встречается с универсальностью. Наши тренажеры с революционной системой регулировки нагрузки позволяют вам самостоятельно настраивать нагрузку от минимальной до максимальной за секунды.
                      </p>
                    ) : brandSlug === 'meridien' ? (
                      <div className="space-y-6">
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Закройте глаза на минуту. Представьте, как после долгого дня вы погружаетесь в мягкие объятия кресла MÉRIDIEN. Теплые волны массажа окутывают спину, умные ролики точно находят каждую напряженную точку, а поза Zero Gravity бережно снимает нагрузку с позвоночника.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Вы чувствуете, как напряжение покидает ваше тело, сменяясь приятной легкостью — будто опытный массажист разминает ваши плечи, а затем мягко прорабатывает поясницу. Встроенный подогрев усиливает ощущения, создавая эффект спа-салона прямо у вас дома.
                        </p>
                      </div>
                    ) : brandSlug === 'sintesi' ? (
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Sintesi переосмысливает фитнес и реабилитацию, объединяя технологии и спорт. Это компактное роботизированное устройство заменяет целый тренажерный зал, предлагая персонализированные нагрузки для любого уровня подготовки: от новичков до профессионалов.
                      </p>
                    ) : brandSlug === 'cardiopower-pro' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Наши тренажеры созданы для залов, где оборудование работает на пределе возможностей. Усиленные рамы из алюминия, двигатели переменного тока с защитой от перегрузок и износостойкие компоненты — каждый элемент рассчитан на многочасовую ежедневную эксплуатацию.
                    </p>
                  ) : (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        TRUE Fitness – премиальное оборудование для тех, кто ценит качество и надежность
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        TRUE – один из ведущих мировых брендов премиального фитнес-оборудования, входящий в топ-5 крупнейших производителей индустрии. С 1972 года мы создаем тренажеры, которые сочетают инновационные технологии, безупречную надежность и эргономичный дизайн.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Content Block - Text Left, Image Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Text */}
              <div className="order-2 lg:order-1 lg:pr-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  {brandSlug === 'cardio-power' ? 'Кому подходит CardioPower?' : brandSlug === 'cardiopower-pro' ? 'Технологии для профессионалов' : brandSlug === 'schwinn' ? 'Кому подходят тренажеры Schwinn?' : brandSlug === 'nautilus' ? 'Кому подходят решения Nautilus?' : brandSlug === 'sole-fitness' ? 'Что делает Sole Fitness особенным?' : brandSlug === 'peach-builder' ? 'Для кого создан PEACH BUILDER?' : brandSlug === 'gym80' ? 'Философия GYM80' : brandSlug === 'oktan' ? 'Инновации Octane Fitness' : brandSlug === 'visbody' ? 'Технологии Visbody' : brandSlug === 'bowflex' ? 'BOWFLEX ДЕЛАЕТ ТРЕНИРОВКИ ОСОБЕННЫМИ' : brandSlug === 'scholle' ? 'Надежность, проверенная временем' : brandSlug === 'smith' ? 'Инновации, проверенные временем' : brandSlug === 'slide-fit' ? 'Горнолыжный тренажер Slide&FIT Commercial Edition' : brandSlug === 'inspire' ? 'Инженерное превосходство в каждой детали' : brandSlug === 'hyfit' ? 'Главное преимущество – интеллектуальная система регулировки веса' : brandSlug === 'maxgym' ? 'Технологическое превосходство в деталях' : brandSlug === 'maxfit' ? 'Почему MAXFIT – это прорыв:' : brandSlug === 'meridien' ? 'Это не просто отдых — это ритуал' : brandSlug === 'sintesi' ? 'Умные технологии для идеальной формы' : 'Наше оборудование выбирают:'}
                </h2>
                
                {brandSlug === 'cardio-power' ? (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      <strong>Для дома</strong> – если хотите эффективное кардио без компромиссов: от утренних пробежек до интервальных тренировок.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      <strong>Для фитнес-клубов</strong> – профессиональные кардиотренажеры, выдерживающие многочасовые нагрузки каждый день.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      <strong>Для тренеров и спортсменов</strong> – точная биомеханика и настраиваемые программы для работы на выносливость, жиросжигание и функциональный тренинг.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      CardioPower — это технологии, созданные специально для кардио. Будь то бег, интервалы, ВИИТ или восстановительные тренировки — с нашим оборудованием вы получите максимум от каждого занятия.
                    </p>
                  </>
                ) : brandSlug === 'schwinn' ? (
                  <>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                       Schwinn предлагает решения для любых целей — от легких поддерживающих занятий до профессиональной подготовки.
                     </p>
                     <p className="text-gray-600 text-sm leading-relaxed mb-4 font-manrope">
                       Профессиональные спортсмены оценят точную имитацию сопротивления для подготовки в межсезонье. Любители активного образа жизни отметят виртуальные маршруты, превращающие тренировки в увлекательное занятие.
                     </p>
                     <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                       Для молодых мам это возможность поддерживать форму без выхода из дома. Офисные работники смогут компенсировать малоподвижный образ жизни, а пенсионеры – тренироваться без излишней нагрузки на суставы, благодаря продуманной эргономике.
                     </p>
                  </>
                ) : brandSlug === 'nautilus' ? (
                  <>
                    <div className="mb-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 font-manrope">
                        <strong>Для дома:</strong>
                      </p>
                      <ul className="text-gray-600 text-sm leading-relaxed font-manrope mb-6 ml-4">
                        <li>- Цифровые connected-решения Bowflex – фитнес будущего уже сегодня</li>
                        <li>- Умные тренажеры Schwinn – когда важны точность и комфорт</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 font-manrope">
                        <strong>Для премиум-залов:</strong>
                      </p>
                      <ul className="text-gray-600 text-sm leading-relaxed font-manrope ml-4">
                        <li>- Профессиональная линейка Nautilus – бесперебойная работа 24/7</li>
                        <li>- Инновационные системы Universal – для самых взыскательных клиентов</li>
                      </ul>
                    </div>
                  </>
                ) : brandSlug === 'sole-fitness' ? (
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Это уникальное сочетание американской инженерной мысли и строжайших стандартов контроля качества. В то время как многие производители идут по пути удешевления компонентов, мы продолжаем использовать только высококачественные материалы. Наши инженеры разрабатывают тренажеры с расчетом на интенсивную эксплуатацию.
                  </p>
                ) : brandSlug === 'gym80' ? (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Нашими тренажерами пользуются те, кто знает цену настоящей работе и высокому результату. Звезды мирового бодибилдинга, такие как Ли Хейни, Гюнтер Шлиеркамп, Роб Робинсон, Шон Рэй, Винс Тэйлор, выбирают Gym80. Ведущие футбольные клубы — Bayern München, Schalke 04, Bayer Leverkusen, FC Köln, московский Локомотив — доверяют подготовку своих игроков именно нам. Наше оборудование стоит в крупнейших фитнес‑сетях Европы, включая McFit, John Reed, Fitness Lounge, Benefit, а также в спортивных академиях и элитных тренажерных залах по всему миру.
                    </p>
                  </>
                ) : brandSlug === 'peach-builder' ? (
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Профессиональные атлеты и фитнес-модели выбирают это оборудование за возможность изолированной проработки целевых мышц. Владельцы премиальных студий и персональные тренеры ценят его за безупречное качество и способность привлекать вдохновленных клиентов. Девушки, для которых тренировки — часть образа жизни, находят в этих тренажерах идеального союзника в создании тела мечты.
                  </p>
                ) : brandSlug === 'oktan' ? (
                  <>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                       Сегодня тренажеры Octane можно встретить по всему миру: в фитнес‑клубах, университетах, реабилитационных центрах, отелях и даже в тренировочных центрах вооруженных сил США. Но теперь такие тренажеры доступны и для дома. Они не только компактные и красивые, но и такие же надежные и качественные, как в профессиональных спортзалах.
                     </p>
                  </>
                ) : brandSlug === 'visbody' ? (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      <strong>Мультичастотная биоимпедансометрия:</strong> Анализ состава тела с точностью медицинского оборудования — мышечная масса, жировая ткань, вода, минералы.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      <strong>3D-сканирование силуэта:</strong> Детальная визуализация изменений фигуры с возможностью отслеживания прогресса в динамике.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      <strong>Умная аналитика:</strong> Персонализированные рекомендации по питанию и тренировкам на основе данных о составе тела.
                    </p>
                  </>
                ) : brandSlug === 'bowflex' ? (
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Тренажеры Bowflex легко узнать по их стильному дизайну, продуманной конструкции и высоким технологиям. Мы делаем всё, чтобы занятия были не только эффективными, но и приятными. Bowflex помогает сэкономить время и пространство, при этом вы получаете результат, как в настоящем спортзале.
                  </p>
                ) : brandSlug === 'scholle' ? (
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Каждое изделие SCHOLLE — это результат тщательного проектирования и строгого контроля качества на всех этапах производства. Бренд придерживается европейских стандартов, гарантируя безопасность и долговечность своей продукции. Особое внимание уделяется прочности материалов: от износостойких тканей прыжковых поверхностей батутов до ударопрочных конструкций теннисных столов.
                  </p>
                  ) : brandSlug === 'smith' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Каждый тренажер SMITH начинается с тщательного проектирования в современных 3D-программах. Такой подход позволяет выявить и устранить даже малейшие недочеты еще до начала производства. Бренд не просто следит за трендами – он их задает, внедряя передовые решения в индустрии фитнес-оборудования. От беговых дорожек до многофункциональных силовых станций – все продукты SMITH объединяет одно: безупречная эргономика и продуманность до мелочей.
                    </p>
                 ) : brandSlug === 'slide-fit' ? (
                   <>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                       Горнолыжный тренажер Slide&FIT Commercial Edition – это флагманское решение для комплексных тренировок. Этот мощный симулятор не просто имитирует катание на лыжах, а предлагает многофункциональную систему нагрузок:
                     </p>
                     <ul className="text-gray-600 text-sm leading-relaxed font-manrope mb-6 ml-4">
                       <li>- Эффективно прорабатывает мышцы кора, ног и плечевого пояса</li>
                       <li>- Укрепляет мышечный корсет спины</li>
                       <li>- Развивает выносливость и координацию</li>
                       <li>- Сжигает до 700 ккал/час</li>
                     </ul>
                   </>
                  ) : brandSlug === 'cardiopower-pro' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Интеллектуальная система регулировки нагрузки, бесшумная работа даже на пиковой мощности и эргономичные решения для безопасности клиентов. Широкие беговые полотна, мгновенная адаптация угла наклона и антиударные системы делают тренировки эффективными без риска травм.
                    </p>
                  ) : brandSlug === 'inspire' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Оборудование INSPIRE создается с применением передовых технологий и материалов премиум-класса. Прочные стальные трубы с антикоррозийным покрытием формируют основу конструкции, гарантируя исключительную долговечность даже при интенсивной эксплуатации. Особое внимание уделяется подвижным элементам: шкивы из армированного нейлона и металлические шарикоподшипники обеспечивают плавность хода и бесшумность работы на протяжении многих лет.
                    </p>
                  ) : brandSlug === 'hyfit' ? (
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Мгновенная смена нагрузки без остановки тренировки
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Точная градуировка веса с фиксированным шагом
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Запатентованный механизм безопасности
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Совместимость всех элементов системы
                        </p>
                      </div>
                    </div>
                  ) : brandSlug === 'maxfit' ? (
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Интуитивная система изменения веса (от 2 до 40 кг)
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Патентованный механизм безопасности
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Совместимость всех элементов системы
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Профессиональное качество по доступной цене
                        </p>
                      </div>
                    </div>
                  ) : brandSlug === 'meridien' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      15 минут, которые перезагружают сознание и возвращают энергию. Вы не засыпаете — вы растворяетесь в моменте, пока кресло делает свою работу: снимает стресс, улучшает кровообращение и дарит мышцам долгожданное расслабление.
                    </p>
                  ) : brandSlug === 'maxgym' ? (
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Усиленные рамы из алюминиевых сплавов
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Широкие беговые полотна
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Многофункциональные станции (2+ упражнения в одном)
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Интуитивная система регулировок
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Эргономичные подушки и рукоятки
                        </p>
                      </div>
                    </div>
                  ) : brandSlug === 'sintesi' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Благодаря электромагнитным двигателям Sintesi точно имитирует любые типы сопротивления: от свободных весов до эластичных лент. Встроенные датчики и мобильное приложение анализируют каждое движение, корректируя нагрузку в реальном времени.
                    </p>
                  ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-benzin text-gray-900 mb-3">Фитнес-клубы премиум-класса</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        для коммерческого использования с высокой нагрузкой
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-benzin text-gray-900 mb-3">Тренеры и спортсмены</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        для профессиональных тренировок
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-benzin text-gray-900 mb-3">Владельцы домашних студий</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        кто ценит долговечность и премиальный комфорт
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Right Image */}
              <div className="order-1 lg:order-2">
                <img 
                  src={brandSlug === 'cardio-power' ? '/lovable-uploads/ae17883e-9f21-4707-8868-22593ebdcf22.png' : brandSlug === 'true' ? '/lovable-uploads/feb4ffe7-84a2-4e4f-b926-cb0d7fc4e3dc.png' : brandSlug === 'bowflex' ? '/lovable-uploads/0838e433-093a-4bb6-a996-3a7c584ed057.png' : brandSlug === 'peach-builder' ? '/lovable-uploads/769683fd-be5a-426c-83b4-126c0b9ab58c.png' : brandSlug === 'gym80' ? '/lovable-uploads/c7015807-1028-470c-acbb-db73c3b5f2b8.png' : brandSlug === 'schwinn' ? '/lovable-uploads/6e0ee794-cc9c-4134-90b0-3760dd16638c.png' : brandSlug === 'oktan' ? '/lovable-uploads/6b0d5cba-7d6c-4f31-a309-5f2e0d37d4ca.png' : brandSlug === 'visbody' ? '/lovable-uploads/d78f60d4-86ca-4348-b8c7-b83d2abcb9cb.png' : brandSlug === 'smith' ? '/lovable-uploads/8a63388c-928c-4a19-ba04-fb9fabc0a05e.png' : brandSlug === 'slide-fit' ? '/lovable-uploads/10b8625a-84e0-498f-8c8a-9833e27f8c21.png' : brandSlug === 'scholle' ? '/lovable-uploads/21d5460d-d369-4ca7-8f1e-ad4cddb57119.png' : brandSlug === 'inspire' ? '/lovable-uploads/d445537d-858a-465c-a8aa-1bb673b978ab.png' : brandSlug === 'hyfit' ? '/lovable-uploads/5b1409c4-d728-4894-a5f4-5e410a91eab8.png' : brandSlug === 'maxfit' ? '/lovable-uploads/8ef08ada-72dc-49cf-8a23-1427d9886029.png' : brandSlug === 'meridien' ? '/lovable-uploads/03810138-7d8b-4b47-8c17-354d672fe3ff.png' : '/lovable-uploads/25a08481-5846-4c6a-8f84-9089de2749fd.png'}
                  alt="Тренировки и статистика"
                  className="w-full object-cover rounded-lg"
                  style={{ height: 'calc(100% - 100px)', maxHeight: brandSlug === 'bowflex' ? '200px' : '300px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Banner from About page */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="overflow-hidden relative rounded-lg" style={{ height: '250px' }}>
              <img 
                src={brandSlug === 'cardio-power' ? "/lovable-uploads/386bc1bb-2e45-41ab-87d8-7effb00bbccb.png" : brandSlug === 'true' ? "/lovable-uploads/de89d231-771d-4288-af42-6ed99213ee24.png" : brandSlug === 'peach-builder' ? "/lovable-uploads/f5a28d98-6ba4-48b2-84c4-45f27a4ad81c.png" : brandSlug === 'gym80' ? "/lovable-uploads/08d1344d-ca43-44d2-b953-28d3cb4c83d2.png" : brandSlug === 'schwinn' ? "/lovable-uploads/df10970b-3001-4bd2-85b9-1a306850b1da.png" : brandSlug === 'oktan' ? "/lovable-uploads/cd54ddcf-333b-4408-ab25-a7e2c382f6d7.png" : brandSlug === 'visbody' ? "/lovable-uploads/53c6106b-ad5a-4c16-ae24-283a957ebd3a.png" : brandSlug === 'smith' ? "/lovable-uploads/21dacae0-6b25-4a75-adcd-e70046ff48ce.png" : brandSlug === 'slide-fit' ? "/lovable-uploads/2df24fd7-d22e-403e-b3b9-d57fa9210a68.png" : brandSlug === 'scholle' ? "/lovable-uploads/43ab3e0e-6584-4129-8e35-28d5587d2af5.png" : brandSlug === 'inspire' ? "/lovable-uploads/0587f7fc-182b-42bb-9efa-a0f7998bcc32.png" : brandSlug === 'hyfit' ? "/lovable-uploads/fdf2f744-537e-4cdc-b8c8-ecf68565fc47.png" : brandSlug === 'maxfit' ? "/lovable-uploads/1c4de0a0-f047-4bcd-ad2c-dea4f9a26ca1.png" : brandSlug === 'meridien' ? "/lovable-uploads/65ea8546-02c6-4913-b251-f0e3ba673bb0.png" : "/lovable-uploads/b04fa555-f20a-4548-bca0-6ff520c1c93c.png"}
                alt="О компании - статистика"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center right' }}
              />
              {/* Statistics content overlay */}
              <div className="absolute top-2.5 right-2.5 bottom-2.5 w-[650px] bg-white rounded-lg p-4 shadow-lg overflow-y-auto">
                <div className="h-full flex flex-col">
                  <div className="mb-3">
                     <h2 className="text-3xl font-benzin text-gray-900 mb-3">
                      {brandSlug === 'cardio-power' ? 'Почему CardioPower?' : brandSlug === 'cardiopower-pro' ? 'Управление без сложностей' : brandSlug === 'schwinn' ? 'Наследие качества, которому доверяют' : brandSlug === 'nautilus' ? 'Nautilus:' : brandSlug === 'sole-fitness' ? 'Технологии, которые работают на вас:' : brandSlug === 'peach-builder' ? 'Философия бренда строится на трёх принципах:' : brandSlug === 'gym80' ? 'Более 40 лет в служении фитнесу' : brandSlug === 'oktan' ? 'Преимущества Octane Fitness' : brandSlug === 'visbody' ? 'Почему выбирают Visbody?' : brandSlug === 'bowflex' ? 'BOWFLEX ВДОХНОВЛЯЕТ' : brandSlug === 'scholle' ? 'Широкий ассортимент для активного отдыха' : brandSlug === 'smith' ? 'Комфорт как главный приоритет' : brandSlug === 'slide-fit' ? 'Технологическое превосходство' : brandSlug === 'inspire' ? 'Уникальные особенности тренажеров INSPIRE' : brandSlug === 'hyfit' ? 'Комплексные решения для любого уровня подготовки' : brandSlug === 'maxgym' ? 'Философия бренда' : brandSlug === 'maxfit' ? 'Для кого созданы наши тренажеры:' : brandSlug === 'meridien' ? 'Почему тысячи людей выбирают MÉRIDIEN:' : brandSlug === 'sintesi' ? 'Три модели для любых целей' : 'Лидер в индустрии'}
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                      {brandSlug === 'cardio-power' ? '' : brandSlug === 'schwinn' ? 'Уже более века Schwinn сохраняет безупречную репутацию благодаря строгим тестам на безопасность и долговечность. Тренажёры созданы из качественных материалов и служат годами.' : brandSlug === 'nautilus' ? '' : brandSlug === 'sole-fitness' ? '' : brandSlug === 'peach-builder' ? '' : brandSlug === 'oktan' ? 'Более 25 лет Octane Fitness остается лидером инноваций в области эллиптических тренажеров, устанавливая стандарты качества и технологий.' : brandSlug === 'visbody' ? 'Единственные в отрасли технологии сочетания биоимпедансометрии и 3D-сканирования для максимально точного анализа тела.' : brandSlug === 'bowflex' ? '' : brandSlug === 'scholle' ? 'В ассортименте SCHOLLE каждый найдет оборудование по душе:' : brandSlug === 'smith' ? 'SMITH понимает, что успешные тренировки – это не только эффективность, но и удовольствие от процесса. Поэтому каждая деталь тренажеров продумана для максимального комфорта: мягкие сиденья из износостойкой синтетической кожи, нескользящие рукоятки, магнитные селекторы нагрузки, система снижения стартового сопротивления. Даже упаковка оборудования разработана специально для безопасной транспортировки – прочный гофрокартон надежно защищает тренажеры при перевозке.' : brandSlug === 'inspire' ? 'Главной отличительной чертой оборудования INSPIRE является продуманная многофункциональность. Каждая машина сочетает в себе несколько тренировочных зон, позволяя прорабатывать различные группы мышц без необходимости использования дополнительных устройств.' : brandSlug === 'hyfit' ? 'Регулируемая гантель HYFIT CLASSIC – базовый элемент системы с эргономичным дизайном. Набор HYFIT 3в1 – штанга, гантель и гиря в едином регулируемом решении.' : brandSlug === 'maxgym' ? 'MAXGYM создает оборудование, которое:' : ''}
                    </p>
                  </div>
                  
                  {brandSlug === 'cardio-power' ? (
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                         <p className="text-gray-600 text-xs leading-relaxed font-manrope">
                          Самая широкая линейка кардиотренажеров в России
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                         <p className="text-gray-600 text-xs leading-relaxed font-manrope">
                          Безопасность и комфорт благодаря продуманным системам амортизации и защиты от перегрузок
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                         <p className="text-gray-600 text-xs leading-relaxed font-manrope">
                          Технологии для реальных результатов: от базовых моделей до премиальных решений
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                         <p className="text-gray-600 text-xs leading-relaxed font-manrope">
                          Доступная цена без ущерба качеству – оптимизированное производство и логистика
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                         <p className="text-gray-600 text-xs leading-relaxed font-manrope">
                          Сервис и поддержка для быстрых поставок запчастей и помощи специалистов
                        </p>
                      </div>
                    </div>
                  ) : brandSlug === 'schwinn' ? (
                    <div>
                      <h3 className="font-benzin text-gray-900 mb-3">Инновации на основе традиций</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Оставаясь верным своим принципам, Schwinn внедряет современные технологии: сенсорные экраны, обучающие программы, автоматическая регулировка нагрузки и синхронизация с фитнес-трекерами.
                      </p>
                    </div>
                  ) : brandSlug === 'nautilus' ? (
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Абсолютный рекордсмен по инновациям в отрасли
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Индивидуализированный тренировочный опыт с цифровой экосистемой
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Доказанная надежность – оборудование работает десятилетиями
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Глобальная сервисная сеть – поддержка в любой точке мира
                        </p>
                      </div>
                    </div>
                  ) : brandSlug === 'sole-fitness' ? (
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Система Cushion Flex (беговые дорожки) – защита суставов
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Отрицательный угол наклона (беговые дорожки) – для тренировки спусков и подъемов
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Magnetic Resistance (велотренажёры) – плавность хода
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Эргономичные конструкции – тренировки без дискомфорта
                        </p>
                      </div>
                    </div>
                  ) : brandSlug === 'peach-builder' ? (
                    <>
                      <div className="space-y-3 mb-2">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-manrope">
                            Анатомическая точность – каждое движение рассчитано до миллиметра для максимального вовлечения ягодичных мышц
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-manrope">
                            Премиальные материалы – холоднокатаная сталь, амортизирующие подушки, износостойкие покрытия
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-base leading-relaxed font-manrope">
                            Технологический подход — регулируемые элементы позволяют адаптировать нагрузку под любой уровень подготовки
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        От Hip Thruster с его революционной системой настройки до Belt Squat, снимающего нагрузку с позвоночника — оборудование PEACH BUILDER открывает новые горизонты в тренировочном процессе.
                      </p>
                    </>
                  ) : brandSlug === 'gym80' ? (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        Мы гордимся своей биомеханикой, ведь каждая деталь и каждое движение на наших тренажерах создаются с опорой на науку и многолетний опыт. Всё, чему мы научились за десятилетия работы, мы воплощаем в тренажерах, которые служат эталоном для всей индустрии. Мы не копируем — мы создаём. Над каждым нашим продуктом трудится команда инженеров, спортсменов, врачей и кинезиологов, чтобы довести его до совершенства.
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        С 1996 года мы тесно сотрудничаем с Кельнским университетом спорта, который обеспечивает нам научную базу для разработки тренажеров, максимально соответствующих естественной биомеханике человека. Опытные инженеры, медики и профессиональные атлеты вместе разрабатывают решения, которые помогают достигать максимальных результатов безопасно и эффективно.
                      </p>
                    </>
                  ) : brandSlug === 'oktan' ? (
                     <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                       Заниматься на Octane легко и приятно. Даже 10–15 минут в день дают заряд энергии и поднимают настроение. Компания придумала много интересных функций, которые делают тренировки более разнообразными и эффективными, например, специальные рукоятки, которые задействуют мышцы верхней части тела, или сидячие тренажёры, подходящие людям с любым уровнем подготовки.
                     </p>
                  ) : brandSlug === 'visbody' ? (
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Точность измерений до 98% — уровень медицинского оборудования
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Анализ 20+ параметров тела всего за 30 секунд
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Используется в 1000+ фитнес-клубов и медицинских центров мира
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Первая в мире система с интеграцией 3D-сканирования и биоимпеданса
                        </p>
                      </div>
                    </div>
                  ) : brandSlug === 'bowflex' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Каждый наш тренажёр создан, чтобы вдохновлять. Мы верим, что даже 10 минут движения в день могут подарить вам заряд энергии и улучшить настроение на целый день. Мы приносим радость движения в ваш дом, чтобы вы всегда были рядом с тем, что наполняет вас силами.
                    </p>
                  ) : brandSlug === 'scholle' ? (
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Профессиональные батуты с защитными сетками для безопасных прыжков
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Теннисные столы для любителей динамичных парных игр
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Оборудование для баскетбола и футбола
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Аэрохоккей для увлекательных семейных турниров
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Инверсионные столы для релаксации и восстановления
                        </p>
                      </div>
                      <div className="mt-6">
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Бренд идеально подходит для семей, ценящих активный отдых и качественный инвентарь. Родители могут быть спокойны за безопасность детей, занимающихся на батутах SCHOLLE. Любители спортивных игр оценят надежность теннисных столов и комплектов для баскетбола. Те, кто заботится о здоровье позвоночника, найдут решение в линейке инверсионных столов.
                        </p>
                      </div>
                    </div>
                    ) : brandSlug === 'maxfit' ? (
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✔</div>
                          <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                            Для домашних тренировок
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✔</div>
                          <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                            Для фитнес-клубов премиум-класса
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✔</div>
                          <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                            Для профессиональных тренеров
                          </p>
                        </div>
                        <div className="flex items-start">
                          <div className="text-green-500 mr-3 mt-1">✔</div>
                          <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                            Для всех, кто хочет прогрессировать без ограничений
                          </p>
                        </div>
                      </div>
                    ) : brandSlug === 'meridien' ? (
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm leading-relaxed font-manrope">15 минут = 60 минут ручного массажа</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm leading-relaxed font-manrope">До 28 программ: от интенсивного восстановления до нежного релакса</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm leading-relaxed font-manrope">2D/3D/4D массаж подстраиваются под ваши предпочтения</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm leading-relaxed font-manrope">Zero Gravity — поза, в которой ваше тело отдыхает по-настоящему</p>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm leading-relaxed font-manrope">Тихий режим — ваш отдых не побеспокоит окружающих</p>
                        </div>
                      </div>
                       ) : brandSlug === 'smith' ? (
                        <div></div>
                      ) : brandSlug === 'meridien' ? (
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-benzin text-gray-900 mb-2">COMPACT</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-manrope">— умный комфорт для небольших пространств</p>
                          </div>
                          <div>
                            <h3 className="font-benzin text-gray-900 mb-2">COMFORT</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-manrope">— домашний релакс в любое время</p>
                          </div>
                          <div>
                            <h3 className="font-benzin text-gray-900 mb-2">BUSINESS</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-manrope">— инвестиция в имидж</p>
                          </div>
                          <div>
                            <h3 className="font-benzin text-gray-900 mb-2">PREMIUM</h3>
                            <p className="text-gray-600 text-sm leading-relaxed font-manrope">— если хотите лучшее из возможного</p>
                          </div>
                        </div>
                      ) : brandSlug === 'sintesi' ? (
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          Линейка Sintesi включает три версии: Lite (базовые нагрузки), Evo (расширенные режимы) и Elite (максимальная точность). Выбирайте свою для дома, студий или медицинской реабилитации.
                        </p>
                      ) : (
                          <div className="text-gray-600 text-sm leading-relaxed font-manrope space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <span>Выдерживает коммерческие нагрузки</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <span>Предлагает несколько вариантов упражнений</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <span>Обеспечивает комфорт при интенсивном использовании</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <span>Сохраняет безупречную работу годами</span>
                            </div>
                          </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Content Block - Text Left, Image Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <div className="order-2 lg:order-1 lg:pr-8">
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Bowflex — это не просто оборудование. Это поддержка и комфорт, которые всегда с вами, помогая двигаться к своим целям. Каждый человек выбирает свой путь, свой стиль и свои любимые упражнения — у нас есть решения для каждого. Что бы вас ни мотивировало, с Bowflex вы сможете двигаться так, как нравится именно вам. Мы создаём тренажёры, которые делают фитнес доступным и вдохновляющим. Дома, в своем ритме и на своих условиях. Просто начните, и вы почувствуете разницу. Bowflex — для тех, кто выбирает движение.
                  </p>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="order-1 lg:order-2">
                <img 
                  src={brandSlug === 'cardio-power' ? '/lovable-uploads/cb434f00-59df-46fa-8c90-893c647f535e.png' : brandSlug === 'true' ? '/lovable-uploads/f0b8744d-a5e4-418e-9512-534ed70c17e6.png' : brandSlug === 'bowflex' ? '/lovable-uploads/5fcc7191-4a4d-4420-9f97-129a5ffd9ffd.png' : brandSlug === 'peach-builder' ? '/lovable-uploads/8c98a766-d4d6-4168-b6d0-bbe7afeae853.png' : brandSlug === 'gym80' ? '/lovable-uploads/08975827-d091-4c00-9cb5-85e93a4b1853.png' : brandSlug === 'schwinn' ? '/lovable-uploads/af9da9ea-dbaa-4e9f-ae2f-831cda031eba.png' : brandSlug === 'oktan' ? '/lovable-uploads/52c07468-4317-41f4-8313-bcc245be5785.png' : brandSlug === 'visbody' ? '/lovable-uploads/5c83f7c6-b329-4314-b2f2-d9c78efdb039.png' : brandSlug === 'smith' ? '/lovable-uploads/3f75976a-d8e7-4175-9622-e96a69902537.png' : brandSlug === 'slide-fit' ? '/lovable-uploads/20c74b65-af59-4385-a213-f539a5f32a01.png' : brandSlug === 'scholle' ? '/lovable-uploads/d9184a48-7f14-4d51-820d-28a8ae120202.png' : brandSlug === 'inspire' ? '/lovable-uploads/66bc8bfb-2485-4e5a-895b-ea2574f1ced3.png' : brandSlug === 'hyfit' ? '/lovable-uploads/d04c4990-cf91-48ab-a5f3-3c5d9069ccde.png' : brandSlug === 'maxfit' ? '/lovable-uploads/0405797d-8a30-49fd-94dc-883f4987067b.png' : brandSlug === 'meridien' ? '/lovable-uploads/bccb9570-9519-4d88-a3b7-061c75d83b7a.png' : '/lovable-uploads/61aab835-fb0d-4b1e-a7b4-70a5ff2c4cf7.png'}
                  alt="Качество и надежность TRUE"
                  className="w-full object-cover rounded-lg"
                  style={brandSlug === 'true' ? { height: '230px' } : brandSlug === 'smith' ? { height: '250px' } : brandSlug === 'bowflex' ? { height: '230px' } : { height: '200px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Video Block for TRUE brand */}
        {brandSlug === 'true' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="w-full">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/wsuzWhDYU9Y"
                    title="TRUE Video Presentation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sintesi Content Blocks */}
        {brandSlug === 'sintesi' && (
          <>
            {/* Block 2 - Умные технологии */}
            <section className="w-full py-8">
              <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 lg:pr-8">
                    <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                      Умные технологии для идеальной формы
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Благодаря электромагнитным двигателям Sintesi точно имитирует любые типы сопротивления: от свободных весов до эластичных лент. Встроенные датчики и мобильное приложение анализируют каждое движение, корректируя нагрузку в реальном времени.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Изображение блока 2</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Block 3 - Три модели */}
            <section className="w-full py-8">
              <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-1">
                    <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Изображение блока 3</span>
                    </div>
                  </div>
                  <div className="order-2 lg:pl-8">
                    <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                      Три модели для любых целей
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Линейка Sintesi включает три версии: Lite (базовые нагрузки), Evo (расширенные режимы) и Elite (максимальная точность). Выбирайте свою для дома, студий или медицинской реабилитации.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Block 4 - Статистический блок */}
            <section className="w-full py-8">
              <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
                <div className="overflow-hidden relative rounded-lg" style={{ height: '250px' }}>
                  <div className="w-full h-full bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg"></div>
                  <div className="absolute top-2.5 right-2.5 bottom-2.5 w-[650px] bg-white rounded-lg p-4 shadow-lg overflow-y-auto">
                    <div className="h-full flex flex-col">
                      <div className="mb-3">
                        <h2 className="text-3xl font-benzin text-gray-900 mb-3">
                          Тренируйтесь эффективнее, чем в зале
                        </h2>
                        <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                          Sintesi не просто заменяет тренажеры — она делает тренировки умнее. Автоматическая настройка, детальная статистика и адаптация под ваши цели экономят время и повышают результат.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Block 5 - Фитнес, который подстраивается */}
            <section className="w-full py-8">
              <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 lg:pr-8">
                    <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                      Фитнес, который подстраивается под вас
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Главная ценность Sintesi — свобода выбора. Меняйте нагрузку одним касанием, экспериментируйте с режимами и достигайте целей быстрее. Это не просто тренажер, а ваш персональный тренер будущего.
                    </p>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="w-full h-[230px] bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Изображение блока 5</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Fifth Content Block - MÉRIDIEN Block 5 */}
        {brandSlug === 'meridien' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="order-1">
                  <img 
                    src="/lovable-uploads/d1404684-e22f-4111-980c-3bd4e6503046.png"
                    alt="MÉRIDIEN инвестиция в себя"
                    className="w-full h-full object-cover rounded-lg"
                    style={{ height: '500px' }}
                  />
                </div>
                
                {/* Right Text */}
                <div className="order-2 lg:pl-8">
                  <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                    MÉRIDIEN — это инвестиция в себя
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                    В ваше здоровье, настроение и качество жизни.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Попробуйте — и ваше тело скажет «спасибо» уже после первого сеанса.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Fifth Content Block - HYFIT Block 5 */}
        {brandSlug === 'hyfit' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="order-1">
                  <img 
                    src="/lovable-uploads/1dc9044e-c4e9-4404-ba87-f1582493ad3c.png"
                    alt="HYFIT персональный тренер"
                    className="w-full h-full object-cover rounded-lg"
                    style={{ height: '500px' }}
                  />
                </div>
                
                {/* Right Text */}
                <div className="order-2 lg:pl-8">
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    HYFIT – это не просто оборудование, а ваш персональный тренер в компактном форм-факторе. Качество, проверенное в самых интенсивных тренировках!
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Fifth Content Block - INSPIRE Global Recognition */}
        {brandSlug === 'inspire' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="order-1">
                  <img 
                    src="/lovable-uploads/2e3402fc-9f3d-4aa3-9537-c809aafff96b.png"
                    alt="INSPIRE глобальное признание"
                    className="w-full h-full object-cover rounded-lg"
                    style={{ height: '500px' }}
                  />
                </div>
                
                {/* Right Text */}
                <div className="order-2 lg:pl-8">
                  <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                    Глобальное признание
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                    С момента основания INSPIRE успешно завоевал рынки Северной Америки, Европы и Азии, став синонимом американского качества в фитнес-индустрии. Постоянные инновации и внимание к потребностям клиентов позволяют бренду оставаться на передовой спортивных технологий, предлагая оборудование, которое не просто соответствует текущим стандартам, а задает новые тенденции в мире фитнеса.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Выбирая INSPIRE, вы инвестируете в оборудование, которое будет служить годами, помогая достигать спортивных целей с комфортом и безопасностью. Это выбор тех, кто ценит проверенное качество и стремится к совершенству в каждой тренировке.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Fifth Content Block - SMITH Block 5 - Немецкая надежность */}
        {brandSlug === 'smith' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Image */}
                <div className="order-1">
                  <img 
                    src="/lovable-uploads/19009cbe-8de2-44a4-8a86-3cb639e09eec.png"
                    alt="SMITH оборудование"
                    className="w-full object-cover rounded-lg"
                    style={{ height: '250px' }}
                  />
                </div>
                
                {/* Right Text */}
                <div className="order-2 lg:pl-8">
                  <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                    Для тех, кто ценит разумный баланс
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    SMITH занимает золотую середину между премиальными и бюджетными брендами. Это оборудование не самое дешевое на рынке, но его цена полностью оправдана исключительным качеством и долговечностью. Именно такое сочетание делает SMITH идеальным выбором для владельцев фитнес-клубов, которые хотят получить надежное оборудование без переплаты за имя.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sixth Content Block - SMITH Block 6 */}
        {brandSlug === 'smith' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Text */}
                <div className="order-2 lg:order-1 lg:pr-8">
                  <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                    Коммерческий успех начинается здесь
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Бренд SMITH — это не просто поставщик тренажеров, а партнер в построении успешного фитнес-бизнеса. Команда помогает с нуля оборудовать залы, модернизировать существующие пространства и подбирать оптимальные решения под любой бюджет. С двумя вариантами цвета рам и тремя вариантами обивки можно создать уникальный дизайн зала, который запомнится клиентам.
                  </p>
                </div>
                
                {/* Right Image */}
                <div className="order-1 lg:order-2">
                  <img 
                    src="/lovable-uploads/4fa997be-b357-4344-b945-e3d316ce172f.png"
                    alt="SMITH фитнес-бизнес"
                    className="w-full object-cover rounded-lg"
                    style={{ height: '250px' }}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Fifth Content Block - Slide&FIT Block 5 */}
        {brandSlug === 'slide-fit' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="order-1">
                  <img 
                    src="/lovable-uploads/a8f53f93-471f-4387-aed9-2bfd895f8a3b.png"
                    alt="Slide&FIT тренажеры в действии"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* Right Text */}
                <div className="order-2 lg:pl-8">
                  <p className="text-gray-600 text-lg leading-relaxed font-manrope">
                    Откройте новый стандарт функционального тренинга с оборудованием, в котором воплотились надежность словенского качества и инновационный подход к фитнесу. Slide&FIT – сила природы в каждом движении!
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}


        {/* Seventh Content Block - SMITH Block 7 */}
        {brandSlug === 'smith' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="order-1">
                  <img 
                    src="/lovable-uploads/61aab835-fb0d-4b1e-a7b4-70a5ff2c4cf7.png"
                    alt="SMITH домашние тренажеры"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* Right Text */}
                <div className="order-2 lg:pl-8">
                  <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                    Домашние тренировки профессионального уровня
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Хотя SMITH ориентирован в первую очередь на коммерческий сегмент, его компактные модели для дома – это тот редкий случай, когда профессиональное качество доступно для частного использования. Домашние тренажеры бренда сохраняют все преимущества своих «старших братьев»: надежность, эргономику и продуманный дизайн.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Eighth Content Block - SMITH Block 8 */}
        {brandSlug === 'smith' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="flex justify-center">
                <div className="max-w-4xl text-center">
                  <p className="text-gray-600 text-lg leading-relaxed font-manrope">
                    Выбирая SMITH, вы инвестируете в оборудование, которое будет приносить прибыль годами. Это бренд для тех, кто понимает разницу между дешевым аналогом и по-настоящему качественным продуктом. Оборудование, которое не просто стоит в зале, а помогает создавать историю успеха вашего фитнес-бизнеса.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Fifth Content Block - Image with Text (only for Schwinn) */}
        {brandSlug === 'schwinn' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="order-1">
                  <img 
                    src="/lovable-uploads/50075a6c-9bd8-430f-b4df-f87515187a19.png"
                    alt="Schwinn тренировка"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* Right Text */}
                <div className="order-2 lg:pl-8">
                  <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                    Выбирая Schwinn
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Выбирая Schwinn, вы приобретаете не просто тренажер, а надежного партнера в достижении ваших фитнес-целей. Это оборудование, которое вдохновляет на регулярные тренировки, делая их комфортными и эффективными. Доверие миллионов пользователей по всему миру и более чем столетний опыт — лучшая гарантия качества продукции этого легендарного бренда.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Ideas and Selections */}
        <IdeasSelections />

        {/* Catalog Section */}
        <section className="py-8 bg-white">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-3xl font-benzin text-[#17171E] mb-12">
              Все товары {brandName}
            </h2>
            
            <div className="flex gap-8">
              {/* Left Sidebar - Full Filters (without brand filter) */}
              <div className="w-64 flex-shrink-0">
                {/* Filters Container */}
                <div className="bg-[#F8F8FD] rounded-lg p-6 mb-6">
                  <h2 className="text-[20px] font-benzin text-[#262631] mb-6">Фильтр</h2>
                  {/* Price Filter */}
                  <div className="mb-6">
                    <h3 
                      className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
                      style={{fontFamily: 'Benzin-Regular'}}
                      onClick={() => toggleFilter('price')}
                    >
                      Цена
                      {expandedFilters.price ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </h3>
                    
                    {expandedFilters.price && (
                      <>
                        {/* Price Range Slider */}
                        <div className="mb-4">
                          <div className="flex justify-between text-[14px] text-gray-600 mb-2" style={{fontFamily: 'Manrope'}}>
                            <span>{priceRange[0].toLocaleString()} ₽</span>
                            <span>{priceRange[1].toLocaleString()} ₽</span>
                          </div>
                          <Slider
                            value={priceRange}
                            onValueChange={setPriceRange}
                            max={150000}
                            min={0}
                            step={1000}
                            className="w-full"
                          />
                        </div>
                        
                        <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                          <label className="flex items-center">
                            <input type="radio" name="price" className="mr-2" />
                            до 500 ₽
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="price" className="mr-2" />
                            до 20 000 ₽
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="price" className="mr-2" />
                            до 50 000 ₽
                          </label>
                          <label className="flex items-center">
                            <input type="radio" name="price" className="mr-2" />
                            до 100 000 ₽
                          </label>
                          <button className="text-[#F53B49] text-[12px] mt-5 text-center w-full" style={{fontFamily: 'Benzin-Regular'}}>Показать все</button>
                        </div>
                      </>
                    )}
                  </div>

                  <Separator className="mt-5 mb-5" />

                  {/* Type Filter */}
                  <div className="mb-6">
                    <h3 
                      className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
                      style={{fontFamily: 'Benzin-Regular'}}
                      onClick={() => toggleFilter('type')}
                    >
                      Тип назначения
                      {expandedFilters.type ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </h3>
                    {expandedFilters.type && (
                      <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Домашние
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Полупрофессиональные
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Профессиональные
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          Реабилитация
                        </label>
                      </div>
                    )}
                  </div>

                  <Separator className="mt-5 mb-5" />

                  {/* Power Filter */}
                  <div className="mb-6">
                    <h3 
                      className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
                      style={{fontFamily: 'Benzin-Regular'}}
                      onClick={() => toggleFilter('power')}
                    >
                      Мощность двигателя
                      {expandedFilters.power ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </h3>
                    {expandedFilters.power && (
                      <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                        {/* Input fields for power range */}
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="flex-1">
                            <input 
                              type="text" 
                              placeholder="от 1.2500"
                              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-600 text-[14px]"
                              style={{fontFamily: 'Manrope'}}
                            />
                          </div>
                          <div className="flex-1">
                            <input 
                              type="text" 
                              placeholder="до 24 560"
                              className="w-full px-3 py-2 border border-gray-300 rounded text-gray-600 text-[14px]"
                              style={{fontFamily: 'Manrope'}}
                            />
                          </div>
                        </div>
                        
                        {/* Checkbox options */}
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          до 3 л.с.
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          3-4 л.с.
                        </label>
                      </div>
                    )}
                  </div>

                  <Separator className="mt-5 mb-5" />

                  {/* Trainer Type Filter */}
                  <div className="mb-6">
                    <h3 
                      className="text-[14px] text-[#262631] mb-[14px] flex items-center justify-between cursor-pointer" 
                      style={{fontFamily: 'Benzin-Regular'}}
                      onClick={() => toggleFilter('trainer')}
                    >
                      Тип тренажера
                      {expandedFilters.trainer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </h3>
                    {expandedFilters.trainer && (
                      <div className="space-y-[6px] text-[14px] text-gray-600" style={{fontFamily: 'Manrope'}}>
                        <label className="flex items-center">
                          <input type="radio" name="trainer-type" className="mr-2" />
                          Магнитный
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="trainer-type" className="mr-2" />
                          Полупрофессиональный
                        </label>
                      </div>
                    )}
                  </div>

                  <Separator className="mt-5 mb-5" />

                  {/* Apply Filters Button */}
                  <Button 
                    className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white mb-3 h-12 rounded-lg text-[12px]" 
                    style={{fontFamily: 'Benzin-Regular'}}
                  >
                    Применить
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-[#F53B49] text-[#F53B49] bg-transparent hover:bg-[#F53B49] hover:text-white h-12 rounded-lg text-[12px]" 
                    style={{fontFamily: 'Benzin-Regular'}}
                  >
                    Показать все
                  </Button>
                </div>
              </div>

              {/* Main Content - только горизонтальные фильтры без поиска и сортировки */}
              <div className="flex-1">
                {/* Horizontal Filter Tags только без поиска и сортировки */}
                <div className="bg-[#F8F8FD] rounded-lg p-4 mb-6">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Removable filter */}
                    <div className="flex items-center bg-[#262631] text-white px-4 py-2 rounded-full font-benzin" style={{ fontSize: '12px' }}>
                      В наличии
                      <button className="ml-2 text-white hover:text-gray-300">
                        ×
                      </button>
                    </div>
                    
                    {/* Status filters */}
                    <button className="bg-white text-[#F53B49] border border-[#F53B49] px-4 py-2 rounded-full font-benzin hover:bg-[#F53B49] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Акция
                    </button>
                    
                    <button className="bg-white text-[#31BF00] border border-[#31BF00] px-4 py-2 rounded-full font-benzin hover:bg-[#31BF00] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Новинка
                    </button>
                    
                    <button className="bg-white text-[#4B7EE8] border border-[#4B7EE8] px-4 py-2 rounded-full font-benzin hover:bg-[#4B7EE8] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Хит продаж
                    </button>
                    
                    {/* Dropdown filters */}
                    <button className="bg-white text-[#778093] border border-[#778093] px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Максимальный вес
                    </button>
                    
                    <button className="bg-white text-[#778093] border border-[#778093] px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Длина полотна, см
                    </button>
                    
                    <button className="bg-white text-[#778093] border border-[#778093] px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Ширина полотна, см
                    </button>
                    
                    <button className="bg-white text-[#778093] border border-[#778093] px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Скорость полотна, км/ч
                    </button>
                    
                    <button className="bg-white text-[#778093] border border-[#778093] px-4 py-2 rounded-full font-benzin hover:bg-[#778093] hover:text-white transition-colors" style={{ fontSize: '12px' }}>
                      Производитель
                    </button>
                  </div>
                </div>
                {/* Products Grid - only 8 products (2 rows) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                  {allProducts.slice(0, 8).map((productData) => (
                    <ProductCard key={productData.id} product={productData} />
                  ))}
                </div>

                {/* Show More Button - Red color */}
                <div className="text-center mb-8">
                  <Button 
                    className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 rounded-lg text-[14px]"
                    style={{fontFamily: 'Benzin-Regular'}}
                  >
                    Показать еще
                  </Button>
                </div>

                {/* Pagination - Round with active page styling and arrows */}
                <div className="flex justify-center items-center space-x-2 mb-8">
                  {/* Left arrow */}
                  <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 text-[14px] font-manrope hover:bg-gray-50 flex items-center justify-center">
                    ←
                  </button>
                  
                  <button className="w-10 h-10 rounded-full bg-[#262631] text-white text-[14px] font-manrope">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 text-[14px] font-manrope hover:bg-gray-50">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 text-[14px] font-manrope hover:bg-gray-50">
                    3
                  </button>
                  <span className="text-gray-400 font-manrope">...</span>
                  <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 text-[14px] font-manrope hover:bg-gray-50">
                    15
                  </button>
                  
                  {/* Right arrow */}
                  <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 text-[14px] font-manrope hover:bg-gray-50 flex items-center justify-center">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default Brand;
