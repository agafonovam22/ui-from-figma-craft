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
      case 'schwinn': return 'Schwinn';
      case 'nautilus': return 'Nautilus';
      case 'sole-fitness': return 'Sole Fitness';
      case 'peach-builder': return 'PEACH BUILDER';
      case 'gym80': return 'Gym80';
      case 'oktan': return 'Octane';
      case 'visbody': return 'Visbody';
      case 'smith': return 'SMITH';
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
                         {brandSlug === 'true' ? 'МЫ – TRUE' : brandSlug === 'cardio-power' ? 'CARDIO POWER' : brandSlug === 'schwinn' ? 'SCHWINN' : brandSlug === 'nautilus' ? 'NAUTILUS' : brandSlug === 'sole-fitness' ? 'SOLE FITNESS' : brandSlug === 'peach-builder' ? 'PEACH BUILDER' : brandSlug === 'gym80' ? 'GYM80' : brandSlug === 'oktan' ? 'OCTANE FITNESS' : brandSlug === 'visbody' ? 'VISBODY' : brandSlug === 'bowflex' ? 'BOWFLEX' : brandSlug === 'scholle' ? 'SCHOLLE: Немецкое качество для активного образа жизни' : brandSlug === 'smith' ? 'SMITH: профессиональное фитнес-оборудование с безупречной репутацией' : 'Качественное спортивное оборудование'}
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
                           src={brandSlug === 'bowflex' ? '/lovable-uploads/ace4abb2-c88d-4e87-a4f2-87e767e8dd77.png' : '/lovable-uploads/b9c24768-fadd-4ab8-bfbe-e1bd7d513721.png'}
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
          </div>
        </section>

        {/* First Content Block - Image Left, Text Right */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Image */}
              <div className="order-1">
                <img 
                  src={brandSlug === 'cardio-power' ? '/lovable-uploads/16904733-b1ae-4f10-8b24-795bc1b439f6.png' : brandSlug === 'true' ? '/lovable-uploads/21b038a7-1ec4-44c6-a96c-6a342c3603de.png' : brandSlug === 'bowflex' ? '/lovable-uploads/2047d7ac-2ac8-45b9-a8e0-ca22ab3a5013.png' : brandSlug === 'peach-builder' ? '/lovable-uploads/62839881-d0dc-4f55-81c1-2b042e81d0e3.png' : brandSlug === 'gym80' ? '/lovable-uploads/e2418140-1de7-4f5d-b34d-680fa363e740.png' : brandSlug === 'schwinn' ? '/lovable-uploads/5a7d56a3-1cee-438a-b65a-a3479013fe70.png' : brandSlug === 'oktan' ? '/lovable-uploads/b7860c53-38e6-490f-a402-9811296c1da3.png' : brandSlug === 'visbody' ? '/lovable-uploads/7f518539-41a1-4a19-8284-3b07384c5521.png' : brandSlug === 'smith' ? '/lovable-uploads/65e88678-9ddb-4054-8aa5-9168061e974c.png' : '/lovable-uploads/db8f1471-5f7e-46c9-b5f0-0791269c93b7.png'}
                  alt="Спортивные тренировки"
                  className="w-full object-cover rounded-lg"
                  style={brandSlug === 'true' ? { height: '300px' } : { height: '500px' }}
                />
              </div>
              
              {/* Right Text */}
              <div className="order-2 lg:pl-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  {brandSlug === 'true' ? 'МЫ – TRUE' : brandSlug === 'cardio-power' ? 'CARDIO POWER' : brandSlug === 'schwinn' ? 'Schwinn — легендарное качество для домашнего фитнеса' : brandSlug === 'nautilus' ? 'Nautilus – инновации, изменившие мир фитнеса' : brandSlug === 'sole-fitness' ? 'Sole Fitness – бескомпромиссное качество для тех, кто тренируется всерьёз' : brandSlug === 'peach-builder' ? 'PEACH BUILDER — революция в тренировке ягодичных мышц' : brandSlug === 'gym80' ? 'GYM80 — немецкое качество для профессиональных результатов' : brandSlug === 'oktan' ? 'Octane Fitness — эллиптические тренажеры нового поколения' : brandSlug === 'visbody' ? 'Visbody — инновационные технологии для анализа тела' : brandSlug === 'bowflex' ? 'BOWFLEX' : brandSlug === 'scholle' ? 'SCHOLLE: Немецкое качество для активного образа жизни' : brandSlug === 'smith' ? 'SMITH: профессиональное фитнес-оборудование с безупречной репутацией' : 'МЫ – TRUE'}
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
                        Рождённый из понимания анатомических особенностей и биомеханики, этот бренд объединил в себе инженерное мастерство и страсть к созданию идеальных пропорций. Каждый тренажёр в коллекции — это результат многолетних исследований и тестирований, воплотивший в себе последние достижения в области фитнес-технологий.
                      </p>
                    </>
                  ) : brandSlug === 'oktan' ? (
                    <>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                        Octane Fitness — это бренд, который придумал, как сделать кардиотренировки удобными, эффективными и безопасными для всех. Компания появилась в 2001 году и сразу решила сосредоточиться на главном — создавать лучшие в мире эллиптические тренажеры. За эти годы Octane успела придумать множество новых решений, которых не было ни у кого.
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                        Главная идея бренда — помочь людям больше двигаться и получать от этого удовольствие. Все тренажёры Octane продуманы до мелочей: они удобные, тихие, красивые и занимают мало места. На них могут тренироваться и новички, и опытные спортсмены, и те, кому нужно восстановить силы после болезни или травмы.
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
                      Bowflex — это бренд из США с богатой историей, который уже почти сорок лет помогает людям по всему миру тренироваться дома и чувствовать себя лучше. С 1986 года компания создаёт удобные, надежные и современные тренажёры, которые подходят всем — от новичков до опытных спортсменов.
                    </p>
                  ) : brandSlug === 'scholle' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      На протяжении десяти лет немецкий бренд SCHOLLE завоевывает доверие потребителей, предлагая исключительно качественное спортивное оборудование для всей семьи. Специализируясь на производстве батутов, инверсионных столов и разнообразного спортинвентаря, компания воплощает в своих продуктах традиционную немецкую педантичность и внимание к деталям.
                    </p>
                  ) : brandSlug === 'smith' ? (
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      Когда речь заходит о надежном и технологичном фитнес-оборудовании для коммерческого использования, бренд SMITH занимает особое место на рынке. Это не просто производитель тренажеров — это команда инженеров и дизайнеров, которые фанатично относятся к качеству каждой детали. Основа философии SMITH — доверие. Доверие к технологиям, которые они внедряют, доверие к материалам, которые используют, и доверие клиентов, которые выбирают их оборудование год за годом.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <div className="order-2 lg:order-1 lg:pr-8">
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  {brandSlug === 'cardio-power' ? 'Кому подходит CardioPower?' : brandSlug === 'schwinn' ? 'Кому подходят тренажеры Schwinn?' : brandSlug === 'nautilus' ? 'Кому подходят решения Nautilus?' : brandSlug === 'sole-fitness' ? 'Что делает Sole Fitness особенным?' : brandSlug === 'peach-builder' ? 'Для кого создан PEACH BUILDER?' : brandSlug === 'gym80' ? 'Философия GYM80' : brandSlug === 'oktan' ? 'Инновации Octane Fitness' : brandSlug === 'visbody' ? 'Технологии Visbody' : brandSlug === 'bowflex' ? 'BOWFLEX ДЕЛАЕТ ТРЕНИРОВКИ ОСОБЕННЫМИ' : brandSlug === 'scholle' ? 'Надежность, проверенная временем' : brandSlug === 'smith' ? 'Инновации, проверенные временем' : 'Наше оборудование выбирают:'}
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
                    Профессиональные атлеты и фитнес-модели выбирают это оборудование за возможность изолированной проработки целевых мышц. Владельцы премиальных студий и персональные тренеры ценят его за безупречное качество и способность привлекать вдохновлённых клиентов. Девушки, для которых тренировки — часть образа жизни, находят в этих тренажёрах идеального союзника в создании тела мечты.
                  </p>
                ) : brandSlug === 'oktan' ? (
                  <>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                       Сегодня тренажеры Octane можно встретить по всему миру: в фитнес‑клубах, университетах, реабилитационных центрах, отелях и даже в тренировочных центрах вооруженных сил США. Но теперь такие тренажеры доступны и для дома. Они не только компактные и красивые, но и такие же надёжные и качественные, как в профессиональных спортзалах.
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
                  src={brandSlug === 'cardio-power' ? '/lovable-uploads/ae17883e-9f21-4707-8868-22593ebdcf22.png' : brandSlug === 'true' ? '/lovable-uploads/feb4ffe7-84a2-4e4f-b926-cb0d7fc4e3dc.png' : brandSlug === 'bowflex' ? '/lovable-uploads/0838e433-093a-4bb6-a996-3a7c584ed057.png' : brandSlug === 'peach-builder' ? '/lovable-uploads/769683fd-be5a-426c-83b4-126c0b9ab58c.png' : brandSlug === 'gym80' ? '/lovable-uploads/c7015807-1028-470c-acbb-db73c3b5f2b8.png' : brandSlug === 'schwinn' ? '/lovable-uploads/6e0ee794-cc9c-4134-90b0-3760dd16638c.png' : brandSlug === 'oktan' ? '/lovable-uploads/6b0d5cba-7d6c-4f31-a309-5f2e0d37d4ca.png' : brandSlug === 'visbody' ? '/lovable-uploads/d78f60d4-86ca-4348-b8c7-b83d2abcb9cb.png' : brandSlug === 'smith' ? '/lovable-uploads/8a63388c-928c-4a19-ba04-fb9fabc0a05e.png' : '/lovable-uploads/25a08481-5846-4c6a-8f84-9089de2749fd.png'}
                  alt="Тренировки и статистика"
                  className="w-full object-cover rounded-lg"
                  style={{ height: 'calc(100% - 100px)', maxHeight: '350px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Banner from About page */}
        <section className="w-full py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="overflow-hidden relative rounded-lg" style={{ height: '408px' }}>
              <img 
                src={brandSlug === 'cardio-power' ? "/lovable-uploads/386bc1bb-2e45-41ab-87d8-7effb00bbccb.png" : brandSlug === 'true' ? "/lovable-uploads/de89d231-771d-4288-af42-6ed99213ee24.png" : brandSlug === 'peach-builder' ? "/lovable-uploads/f5a28d98-6ba4-48b2-84c4-45f27a4ad81c.png" : brandSlug === 'gym80' ? "/lovable-uploads/08d1344d-ca43-44d2-b953-28d3cb4c83d2.png" : brandSlug === 'schwinn' ? "/lovable-uploads/df10970b-3001-4bd2-85b9-1a306850b1da.png" : brandSlug === 'oktan' ? "/lovable-uploads/cd54ddcf-333b-4408-ab25-a7e2c382f6d7.png" : brandSlug === 'visbody' ? "/lovable-uploads/53c6106b-ad5a-4c16-ae24-283a957ebd3a.png" : brandSlug === 'smith' ? "/lovable-uploads/21dacae0-6b25-4a75-adcd-e70046ff48ce.png" : "/lovable-uploads/b04fa555-f20a-4548-bca0-6ff520c1c93c.png"}
                alt="О компании - статистика"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center right' }}
              />
              {/* Statistics content overlay */}
              <div className="absolute top-2.5 right-2.5 bottom-2.5 w-[650px] bg-white rounded-lg p-6 shadow-lg">
                <div className="h-full flex flex-col">
                  <div className="mb-4">
                     <h2 className="text-3xl font-benzin text-gray-900 mb-4">
                      {brandSlug === 'cardio-power' ? 'Почему CardioPower?' : brandSlug === 'schwinn' ? 'Наследие качества, которому доверяют' : brandSlug === 'nautilus' ? 'Nautilus:' : brandSlug === 'sole-fitness' ? 'Технологии, которые работают на вас:' : brandSlug === 'peach-builder' ? 'Философия бренда строится на трёх принципах:' : brandSlug === 'gym80' ? 'Более 40 лет в служении фитнесу' : brandSlug === 'oktan' ? 'Преимущества Octane Fitness' : brandSlug === 'visbody' ? 'Почему выбирают Visbody?' : brandSlug === 'bowflex' ? 'BOWFLEX ВДОХНОВЛЯЕТ' : brandSlug === 'scholle' ? 'Широкий ассортимент для активного отдыха' : brandSlug === 'smith' ? 'Комфорт как главный приоритет' : 'Лидер в индустрии'}
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                      {brandSlug === 'cardio-power' ? '' : brandSlug === 'schwinn' ? 'Уже более века Schwinn сохраняет безупречную репутацию благодаря строгим тестам на безопасность и долговечность. Тренажёры созданы из качественных материалов и служат годами.' : brandSlug === 'nautilus' ? '' : brandSlug === 'sole-fitness' ? '' : brandSlug === 'peach-builder' ? '' : brandSlug === 'oktan' ? 'Более 25 лет Octane Fitness остается лидером инноваций в области эллиптических тренажеров, устанавливая стандарты качества и технологий.' : brandSlug === 'visbody' ? 'Единственные в отрасли технологии сочетания биоимпедансометрии и 3D-сканирования для максимально точного анализа тела.' : brandSlug === 'bowflex' ? '' : brandSlug === 'scholle' ? 'В ассортименте SCHOLLE каждый найдет оборудование по душе:' : ''}
                    </p>
                  </div>
                  
                  {brandSlug === 'cardio-power' ? (
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Самая широкая линейка кардиотренажеров в России
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Безопасность и комфорт благодаря продуманным системам амортизации и защиты от перегрузок
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Технологии для реальных результатов: от базовых моделей до премиальных решений
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
                          Доступная цена без ущерба качеству – оптимизированное производство и логистика
                        </p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600 text-base leading-relaxed font-manrope">
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
                      ) : brandSlug === 'smith' ? (
                        <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                          SMITH понимает, что успешные тренировки – это не только эффективность, но и удовольствие от процесса. Поэтому каждая деталь тренажеров продумана для максимального комфорта: мягкие сиденья из износостойкой синтетической кожи, нескользящие рукоятки, магнитные селекторы нагрузки, система снижения стартового сопротивления. Даже упаковка оборудования разработана специально для безопасной транспортировки – прочный гофрокартон надежно защищает тренажеры при перевозке.
                        </p>
                      ) : (
                     <div className="space-y-6">
                       <div>
                         <h3 className="text-xl font-benzin text-gray-900 mb-1 leading-tight" style={{ fontFamily: 'Benzin-Semibold' }}>50+ лет на рынке</h3>
                         <p className="text-sm font-manrope text-gray-600 leading-snug">
                           Собственные инженерные разработки и контроль качества
                         </p>
                       </div>
                       <div>
                         <h3 className="text-xl font-benzin text-gray-900 mb-1 leading-tight" style={{ fontFamily: 'Benzin-Semibold' }}>99.9% надежности</h3>
                         <p className="text-sm font-manrope text-gray-600 leading-snug">
                           Благодаря износостойким компонентам и интеллектуальному управлению
                         </p>
                       </div>
                       <div>
                         <h3 className="text-xl font-benzin text-gray-900 mb-1 leading-tight" style={{ fontFamily: 'Benzin-Semibold' }}>3 уровня защиты</h3>
                         <p className="text-sm font-manrope text-gray-600 leading-snug">
                           Передовые технологии амортизации и безопасности
                         </p>
                       </div>
                       <div>
                         <h3 className="text-xl font-benzin text-gray-900 mb-1 leading-tight" style={{ fontFamily: 'Benzin-Semibold' }}>До 40% экономии на обслуживании</h3>
                         <p className="text-sm font-manrope text-gray-600 leading-snug">
                           Минимальные затраты за счёт прочной конструкции и доступных запчастей
                         </p>
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
                <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                  {brandSlug === 'cardio-power' ? 'Ключевые преимущества' : brandSlug === 'schwinn' ? 'Широкая линейка для любых потребностей' : brandSlug === 'nautilus' ? 'Nautilus – когда важен не просто результат, а технологичное превосходство.' : brandSlug === 'sole-fitness' ? 'Выбирайте Sole – инженерное совершенство для ваших результатов.' : brandSlug === 'peach-builder' ? 'PEACH BUILDER — это больше чем оборудование' : brandSlug === 'gym80' ? 'Выбирая GYM80, вы выбираете лучшее' : brandSlug === 'oktan' ? 'Выбирайте Octane Fitness — лидера инноваций' : brandSlug === 'visbody' ? 'Будущее анализа тела уже здесь' : brandSlug === 'bowflex' ? 'BOWFLEX — ДЛЯ ТЕХ, КТО ВЫБИРАЕТ ДВИЖЕНИЕ' : brandSlug === 'scholle' ? 'Немецкие традиции в каждом изделии' : brandSlug === 'smith' ? 'Немецкая надежность в каждой детали' : 'TRUE – это не просто тренажеры, это инвестиция в долгосрочный результат'}
                </h2>
                
                {brandSlug === 'cardio-power' ? (
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    CardioPower – это преемственность традициям качества. Наша продукция собирается из самых качественных комплектующих и проходит многоэтапную систему контроля качества. Наши тренажеры рассчитаны на долгосрочную службу в условиях интенсивной эксплуатации. Мы уделяем особое внимание работе послепродажного сервиса, обеспечивая оперативную техническую поддержку и наличие склада запасных частей.
                  </p>
                ) : brandSlug === 'schwinn' ? (
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    От компактных велотренажеров для небольших квартир до профессиональных эллипсоидов с плавным ходом — ассортимент Schwinn охватывает весь спектр домашнего кардиооборудования. Особой популярностью пользуются гибридные модели, сочетающие в себе функции нескольких тренажеров, позволяя разнообразить тренировочный процесс.
                  </p>
                ) : brandSlug === 'gym80' ? (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Мы остаёмся верны своим корням и традициям, производя тренажёры в Германии и следуя философии настоящего «Made in Germany». Для нас это не просто знак качества, а символ уважения к каждому клиенту, который выбирает лучшее. Gym80 выбирают те, кто серьёзно относится к своему делу, кто ценит безупречную механику движения, надёжность и долговечность оборудования.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Gym80 — это история о силе, науке и стремлении к совершенству, рассказанная на языке железа. Мы создаём тренажёры, которые становятся частью больших побед и помогают раскрывать потенциал каждого спортсмена. Gym80 — это выбор профессионалов.
                    </p>
                  </>
                ) : brandSlug === 'peach-builder' ? (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Это философия тренировок нового поколения, где красота встречается с функциональностью, а мечты о идеальной форме становятся реальностью. Выбирая эти тренажёры, вы выбираете путь к телу, которое будет вдохновлять.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Готовы перевести свои тренировки на новый уровень? PEACH BUILDER ждёт вас в нашем шоу-руме, где вы сможете лично оценить инновационный подход к формированию ягодичных мышц.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope italic">
                      Создано профессионалами. Проверено чемпионами. Вдохновлено совершенством.
                    </p>
                  </>
                ) : brandSlug === 'sole-fitness' ? (
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    
                  </p>
                ) : brandSlug === 'nautilus' ? (
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    
                  </p>
                ) : brandSlug === 'oktan' ? (
                  <>
                     <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                       Octane Fitness выбирают те, кто хочет быть в форме и заботиться о своём здоровье, но при этом ценит комфорт и качество. Тренажёры помогают вам оставаться активными и достигать своих целей в удобном для вас ритме — дома или в зале.
                     </p>
                     <p className="text-gray-600 text-sm leading-relaxed font-manrope italic">
                       Мы верим, что движение должно приносить радость. И поэтому делаем всё, чтобы вам хотелось тренироваться снова и снова.
                     </p>
                  </>
                ) : brandSlug === 'visbody' ? (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Технологии Visbody открывают новую эру в фитнес-диагностике, предоставляя точную, быструю и комплексную оценку физического состояния.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Будущее уже здесь — и оно начинается с понимания своего тела на качественно новом уровне.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope italic">
                      Измеряй. Анализируй. Прогрессируй.
                    </p>
                  </>
                ) : brandSlug === 'bowflex' ? (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Bowflex — это не просто оборудование. Это поддержка и комфорт, которые всегда с вами, помогая двигаться к своим целям. Каждый человек выбирает свой путь, свой стиль и свои любимые упражнения — у нас есть решения для каждого. Что бы вас ни мотивировало, с Bowflex вы сможете двигаться так, как нравится именно вам.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Мы создаём тренажёры, которые делают фитнес доступным и вдохновляющим. Дома, в своем ритме и на своих условиях. Просто начните, и вы почувствуете разницу.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope italic">
                      Bowflex — для тех, кто выбирает движение.
                    </p>
                  </>
                ) : brandSlug === 'scholle' ? (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      SCHOLLE сочетает в своей продукции проверенные временем технологии и современные разработки. Особенностью бренда является продуманная эргономика: будь то система регулировки инверсионного стола или антискользящее покрытие ручек баскетбольных щитов.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Выбирая SCHOLLE, вы приобретаете не просто спортивный инвентарь, а надежного спутника для поддержания активного образа жизни всей семьи. Это оборудование, которое годами сохраняет свои потребительские свойства, доказывая, что немецкое качество — не просто слова, а стандарт, которому стоит доверять.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                      С десятилетним опытом на рынке SCHOLLE продолжает развиваться, оставаясь верным своим принципам: безопасность, надежность и доступность качественного спортивного оборудования для каждого дома.
                    </p>
                  </>
                ) : brandSlug === 'smith' ? (
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Производственные стандарты SMITH – это отдельная история. Рамы из высокопрочной стали с овальным профилем, двойное порошковое покрытие для защиты от повреждений, тросы, тестируемые трижды в день под нагрузкой 900 кг – такие требования к качеству говорят сами за себя. Бренд не экономит на материалах и контроле, поэтому его оборудование служит годами даже при интенсивной эксплуатации в коммерческих залах.
                  </p>
                ) : (
                  <>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-manrope">
                      Наше оборудование выбирают, потому что оно:
                    </p>
                    
                     <div className="space-y-6">
                       <div className="flex items-start">
                         <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                         <div>
                           <h3 className="font-benzin text-gray-900 mb-2">Работает безотказно</h3>
                           <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                             даже при интенсивной эксплуатации
                           </p>
                         </div>
                       </div>
                       
                       <div className="flex items-start">
                         <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                         <div>
                           <h3 className="font-benzin text-gray-900 mb-2">Сохраняет актуальность</h3>
                           <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                             регулярные апгрейды и совместимость с новыми технологиями
                           </p>
                         </div>
                       </div>
                       
                       <div className="flex items-start">
                         <div className="w-2 h-2 bg-[#F53B49] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                         <div>
                           <h3 className="font-benzin text-gray-900 mb-2">Обеспечивает максимальный комфорт</h3>
                           <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                             продуманная эргономика снижает нагрузку на суставы
                           </p>
                         </div>
                       </div>
                     </div>
                     
                     <p className="text-gray-600 text-sm leading-relaxed font-manrope mt-6">
                       Выбирайте TRUE – оборудование, которое работает на ваш успех.
                     </p>
                  </>
                )}
              </div>
              
              {/* Right Image */}
              <div className="order-1 lg:order-2">
                <img 
                  src={brandSlug === 'cardio-power' ? '/lovable-uploads/cb434f00-59df-46fa-8c90-893c647f535e.png' : brandSlug === 'true' ? '/lovable-uploads/f0b8744d-a5e4-418e-9512-534ed70c17e6.png' : brandSlug === 'bowflex' ? '/lovable-uploads/5fcc7191-4a4d-4420-9f97-129a5ffd9ffd.png' : brandSlug === 'peach-builder' ? '/lovable-uploads/8c98a766-d4d6-4168-b6d0-bbe7afeae853.png' : brandSlug === 'gym80' ? '/lovable-uploads/08975827-d091-4c00-9cb5-85e93a4b1853.png' : brandSlug === 'schwinn' ? '/lovable-uploads/af9da9ea-dbaa-4e9f-ae2f-831cda031eba.png' : brandSlug === 'oktan' ? '/lovable-uploads/52c07468-4317-41f4-8313-bcc245be5785.png' : brandSlug === 'visbody' ? '/lovable-uploads/5c83f7c6-b329-4314-b2f2-d9c78efdb039.png' : brandSlug === 'smith' ? '/lovable-uploads/3f75976a-d8e7-4175-9622-e96a69902537.png' : '/lovable-uploads/61aab835-fb0d-4b1e-a7b4-70a5ff2c4cf7.png'}
                  alt="Качество и надежность TRUE"
                  className="w-full object-cover rounded-lg"
                  style={brandSlug === 'true' ? { height: '300px' } : { height: '500px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Fifth Content Block - SMITH Block 5 */}
        {brandSlug === 'smith' && (
          <section className="w-full py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="order-1">
                  <img 
                    src="/lovable-uploads/19009cbe-8de2-44a4-8a86-3cb639e09eec.png"
                    alt="SMITH оборудование"
                    className="w-full h-full object-cover rounded-lg"
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
                    className="w-full h-full object-cover rounded-lg"
                  />
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Text */}
                <div className="order-2 lg:order-1 lg:pr-8">
                  <h2 className="text-3xl font-benzin text-gray-900 mb-6">
                    Инвестиция в успех
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed font-manrope">
                    Выбирая SMITH, вы инвестируете в оборудование, которое будет приносить прибыль годами. Это бренд для тех, кто понимает разницу между дешевым аналогом и по-настоящему качественным продуктом. Оборудование, которое не просто стоит в зале, а помогает создавать историю успеха вашего фитнес-бизнеса.
                  </p>
                </div>
                
                {/* Right Image */}
                <div className="order-1 lg:order-2">
                  <img 
                    src="/lovable-uploads/61aab835-fb0d-4b1e-a7b4-70a5ff2c4cf7.png"
                    alt="SMITH инвестиция"
                    className="w-full h-full object-cover rounded-lg"
                  />
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
