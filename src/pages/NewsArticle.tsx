
import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import PhotoSwiper from '@/components/PhotoSwiper';
import { Link, useParams } from 'react-router-dom';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const NewsArticle: React.FC = () => {
  const { articleSlug } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        {/* Breadcrumb and Title */}
        <section className="py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-gray-500 hover:text-gray-700">
                    Главная
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/news" className="text-gray-500 hover:text-gray-700">
                    Новости и блог
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-900 font-medium">
                    {articleSlug === 'novost-dlya-dilerov-wellfitness' ? 'Новость для дилеров WellFitness' : 
                     articleSlug === 'cardiopower-t40-new-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower T40 NEW' :
                     articleSlug === 'cardiopower-s20-new-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower S20' :
                     articleSlug === 'cardiopower-tt30-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower ТТ30' :
                     articleSlug === 'cardiopower-s55-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower S55' :
                     articleSlug === 'cardiopower-s50-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower S50' :
                     articleSlug === 'cardiopower-x48-v-prodazhe' ? 'Новинка - Уже в продаже: Эллиптический тренажер CardioPower X48' :
                     articleSlug === 'cardiopower-x45-v-prodazhe' ? 'Новинка - Уже в продаже: Эллиптический тренажер CardioPower X45' :
                     articleSlug === 'cardiopower-tt35-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower TT35' :
                     articleSlug === 'cardiopower-re50-v-prodazhe' ? 'Новинка - Уже в продаже: Гребной тренажер CardioPower RE50' :
                     articleSlug === 'cardiopower-b35-v-prodazhe' ? 'Новинка - Уже в продаже: Вертикальный велотренажер CardioPower B35' :
                     'Wellfitness PRO в Сколково 2023'}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            {/* Main Title */}
            <h1 className="text-[40px] font-bold text-[#17171E] mb-8 leading-tight">
               {articleSlug === 'novost-dlya-dilerov-wellfitness' ? 'Новость для дилеров WellFitness' : 
               articleSlug === 'cardiopower-t40-new-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower T40 NEW' :
               articleSlug === 'cardiopower-s20-new-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower S20' :
               articleSlug === 'cardiopower-tt30-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower ТТ30' :
                articleSlug === 'cardiopower-s55-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower S55' :
                articleSlug === 'cardiopower-s50-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower S50' :
                articleSlug === 'cardiopower-x48-v-prodazhe' ? 'Новинка - Уже в продаже: Эллиптический тренажер CardioPower X48' :
                articleSlug === 'cardiopower-x45-v-prodazhe' ? 'Новинка - Уже в продаже: Эллиптический тренажер CardioPower X45' :
                articleSlug === 'cardiopower-tt35-v-prodazhe' ? 'Новинка - Уже в продаже: Беговая дорожка CardioPower TT35' :
                articleSlug === 'cardiopower-re50-v-prodazhe' ? 'Новинка - Уже в продаже: Гребной тренажер CardioPower RE50' :
                articleSlug === 'cardiopower-b35-v-prodazhe' ? 'Новинка - Уже в продаже: Вертикальный велотренажер CardioPower B35' :
                'Wellfitness PRO в Сколково 2023'}
            </h1>
          </div>
        </section>


        {/* Main Content - Text left, Large image right */}
        <section className="py-2">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[500px]">
              {/* Left side - Text content */}
              <div className="space-y-4 flex flex-col justify-center h-full">
                <h2 className="text-3xl font-bold text-[#17171E] mb-4 font-manrope">
                  {articleSlug === 'novost-dlya-dilerov-wellfitness' ? 
                    'К 8 марта вы можете предлагать скидку 15% на все тренажеры CardioPower, BowFlex и Sole для своих клиентов!' :
                    articleSlug === 'cardiopower-t40-new-v-prodazhe' ?
                    'Беговая дорожка CardioPower T40 NEW' :
                    articleSlug === 'cardiopower-s20-new-v-prodazhe' ?
                    'Сообщаем о расширении линейки беговых дорожек и поступлении новой модели CardioPower.' :
                    articleSlug === 'cardiopower-tt30-v-prodazhe' ?
                    'Сообщаем о расширении линейки беговых дорожек и поступлении новой модели CardioPower.' :
                     articleSlug === 'cardiopower-s55-v-prodazhe' ?
                     'Сообщаем о расширении линейки беговых дорожек и поступлении новой модели CardioPower.' :
                     articleSlug === 'cardiopower-s50-v-prodazhe' ?
                     'Сообщаем о расширении линейки беговых дорожек и поступлении новой модели CardioPower.' :
                     articleSlug === 'cardiopower-x48-v-prodazhe' ?
                     'Сообщаем о расширении линейки эллиптических тренажеров и поступлении новой модели CardioPower.' :
                     articleSlug === 'cardiopower-x45-v-prodazhe' ?
                     'Сообщаем о расширении линейки эллиптических тренажеров и поступлении новой модели CardioPower.' :
                     articleSlug === 'cardiopower-tt35-v-prodazhe' ?
                     'Сообщаем о расширении линейки гребных тренажеров и поступлении новой модели CardioPower.' :
                     articleSlug === 'cardiopower-re50-v-prodazhe' ?
                     'Сообщаем о расширении линейки гребных тренажеров и поступлении новой модели CardioPower.' :
                     articleSlug === 'cardiopower-b35-v-prodazhe' ?
                     'Сообщаем о расширении линейки велотренажеров и поступлении новой модели CardioPower.' :
                     'В минувшие выходные в Сколково прошло крупнейшее мероприятие фитнес-России'
                  }
                </h2>
                
                <div className="space-y-4 text-gray-700 font-manrope">
                  <p className="leading-relaxed text-base">
                    {articleSlug === 'novost-dlya-dilerov-wellfitness' ? 
                      'Это отличный шанс порадовать ваших покупательниц (и их мужчин)!' :
                      articleSlug === 'cardiopower-t40-new-v-prodazhe' ?
                      'Обновленная версия популярной модели CardioPower T40, новый стильный дизайн, продвинутый программный функционал, набор из 5 пульсозависимых программ, а также современный LED Дисплей с интуитивно простым управлением. Модель предлагает революционный подход и инновационную технологию в кардиотренировках, делая их максимально безопасными и эффективными. Контролировать пульсовую зону еще никогда не было так легко и удобно, а значит Ваши тренировки будут гораздо эффективнее, чем раньше. В независимости какая у Вас цель, сбросить вес, подготовиться к марафону или увеличить скоростные показатели.' :
                      articleSlug === 'cardiopower-s20-new-v-prodazhe' ?
                      'Беговая дорожка CardioPower S20\n\nБеговая дорожка CardioPower S20 одна из самых компактных не только среди стационарных но и среди ультра-компактных беговых дорожек для дома. При этом модель имеет потрясающие габариты бегового полотна, при длине дорожки 145 см, беговое полотно составляет 130 см в длину и 47 см в ширину, это позволяет комфортно заниматься людям высокого роста и разной комплекции.' :
                      articleSlug === 'cardiopower-tt30-v-prodazhe' ?
                      'Беговая дорожка CardioPower ТТ30' :
                       articleSlug === 'cardiopower-s55-v-prodazhe' ?
                       'Беговая дорожка CardioPower S55' :
                       articleSlug === 'cardiopower-s50-v-prodazhe' ?
                       'Беговая дорожка CardioPower S50\n\nБеговая дорожка CardioPower S50 имеет стильный дизайн и совершенные технические характеристики, которые выделяют данную модель как одну из лучших в своем классе. Эта модель является идеальным выбором для серьезных тренировок в домашних условиях, не уступая по техническим данным беговым дорожкам профессионального уровня.' :
                       articleSlug === 'cardiopower-x48-v-prodazhe' ?
                       'Эллиптический тренажер CardioPower X48\n\nЭллиптический тренажер CardioPower X48 - переднеприводная модель для полноценных тренировок дома. Усиленная рама, система сопротивления EMS c 32 уровнями, увеличенная длина шага 53 см, продуманная биомеханика и мультипозиционные поручни делают эту модель одной из самых технологичных своем классе.' :
                       articleSlug === 'cardiopower-x45-v-prodazhe' ?
                       'Эллиптический тренажер CardioPower X45\n\nЭллиптический тренажер CardioPower X45 - переднеприводная модель для полноценных тренировок дома. Регулировка угла наклона рампы, увеличенная длина шага 51 см, удобная эргономика и мультипозиционные поручни делают эту модель одной из самых функциональных и продвинутых в своем классе.' :
                       articleSlug === 'cardiopower-tt35-v-prodazhe' ?
                       'Беговая дорожка CardioPower TT35\n\nБеговая дорожка CardioPower TT35 по-настоящему уникальна, благодаря инновационной системе сверхкомпактного складывания, она обладает характеристиками полноразмерной беговой дорожки при этом имея минимальные размеры, сопоставимые с размерами ультра компактных моделей. Стильный, классический дизайн дорожки впишется в любой домашний интерьер.' :
                       articleSlug === 'cardiopower-re50-v-prodazhe' ?
                       'Гребной тренажер CardioPower RE50\n\nГребной тренажер CardioPower RE50 предназначен для проведения качественных гребных тренировок в домашних условиях, оснащен аэродинамической системой сопротивления, усиленной рамой и возможностью компактного вертикального хранения. Тренажер отлично подходит как для комфортных тренировок в низком темпе, так и для высокоинтенсивных HIIT тренировок.' :
                       articleSlug === 'cardiopower-b35-v-prodazhe' ?
                       'Вертикальный велотренажер CardioPower B35\n\nВертикальный велотренажер CardioPower B35, выполненный в инновационном, футуристическом дизайне, имеет заниженную раму для удобной посадки. Правильная эргономика тренажера сохраняет комфортное положения для людей разного роста и комплекции. Электромагнитная система сопротивления с 16 уровнями обеспечивает точную настройку нагрузки, что важно для достижения лучших фитнес результатов.' :
                        'В минувшие выходные в Сколково, в БЦ «Альматея» прошло крупнейшее мероприятие Фитнес.Россия: бизнес-форум, фитнес-конвенция, выставка.'
                    }
                  </p>
                  
                  {/* Кнопка "Перейти" для страниц с новинками */}
                  {(articleSlug === 'cardiopower-t40-new-v-prodazhe' ||
                    articleSlug === 'cardiopower-s20-new-v-prodazhe' ||
                    articleSlug === 'cardiopower-tt30-v-prodazhe' ||
                    articleSlug === 'cardiopower-s55-v-prodazhe' ||
                    articleSlug === 'cardiopower-s50-v-prodazhe' ||
                    articleSlug === 'cardiopower-x48-v-prodazhe' ||
                    articleSlug === 'cardiopower-x45-v-prodazhe' ||
                    articleSlug === 'cardiopower-tt35-v-prodazhe' ||
                    articleSlug === 'cardiopower-re50-v-prodazhe' ||
                    articleSlug === 'cardiopower-b35-v-prodazhe') && (
                    <button className="bg-white border-2 border-[#F53B49] text-[#F53B49] px-6 py-3 rounded-lg font-medium hover:bg-[#F53B49] hover:text-white transition-all duration-300">
                      Перейти
                    </button>
                  )}
                </div>
              </div>

              {/* Right side - Single large image */}
              <div className="relative h-full flex items-center justify-center">
                <img
                  src={articleSlug === 'novost-dlya-dilerov-wellfitness' ? 
                    '/lovable-uploads/654f1adb-2662-491c-b4b3-5c8ad7924198.png' :
                    articleSlug === 'cardiopower-t40-new-v-prodazhe' ?
                    '/lovable-uploads/c6b86923-3376-47f4-9a0c-24b01b2d642e.png' :
                    articleSlug === 'cardiopower-s20-new-v-prodazhe' ?
                    '/lovable-uploads/8ea9b9be-2293-4e24-a820-f56c2a81923e.png' :
                    articleSlug === 'cardiopower-tt30-v-prodazhe' ?
                    '/lovable-uploads/6ca6c3e1-17e7-4d1a-9c84-8018e1af3530.png' :
                     articleSlug === 'cardiopower-s55-v-prodazhe' ?
                     '/lovable-uploads/3fe4b3b1-63a2-4ed1-b873-07b7de639ca1.png' :
                     articleSlug === 'cardiopower-s50-v-prodazhe' ?
                     '/lovable-uploads/3b753ca2-42c7-416f-9886-af8374196645.png' :
                     articleSlug === 'cardiopower-x48-v-prodazhe' ?
                     '/lovable-uploads/8f5c4260-9931-4f3a-9ae2-b0f6122e8f2f.png' :
                     articleSlug === 'cardiopower-x45-v-prodazhe' ?
                     '/lovable-uploads/18cd3093-b7ac-453b-8467-1fec09fb24fc.png' :
                     articleSlug === 'cardiopower-tt35-v-prodazhe' ?
                     '/lovable-uploads/f723c377-cd62-435f-86d4-71f10aca1c8f.png' :
                     articleSlug === 'cardiopower-re50-v-prodazhe' ?
                     '/lovable-uploads/fac5ea13-b62c-4a6f-8362-0195de2226a6.png' :
                     articleSlug === 'cardiopower-b35-v-prodazhe' ?
                     '/lovable-uploads/c03314d7-e4ad-445b-958f-8948a6876262.png' :
                     '/lovable-uploads/2fad94b1-56ad-4c2d-8f5c-321bacbfbc30.png'
                  }
                  alt={articleSlug === 'novost-dlya-dilerov-wellfitness' ? 
                    'Новость для дилеров WellFitness' :
                    articleSlug === 'cardiopower-t40-new-v-prodazhe' ?
                    'Беговая дорожка CardioPower T40 NEW' :
                    articleSlug === 'cardiopower-s20-new-v-prodazhe' ?
                    'Беговая дорожка CardioPower S20' :
                    articleSlug === 'cardiopower-tt30-v-prodazhe' ?
                    'Беговая дорожка CardioPower ТТ30' :
                     articleSlug === 'cardiopower-s55-v-prodazhe' ?
                     'Беговая дорожка CardioPower S55' :
                     articleSlug === 'cardiopower-s50-v-prodazhe' ?
                     'Беговая дорожка CardioPower S50' :
                     articleSlug === 'cardiopower-x48-v-prodazhe' ?
                     'Эллиптический тренажер CardioPower X48' :
                     articleSlug === 'cardiopower-x45-v-prodazhe' ?
                     'Эллиптический тренажер CardioPower X45' :
                     articleSlug === 'cardiopower-tt35-v-prodazhe' ?
                     'Беговая дорожка CardioPower TT35' :
                     articleSlug === 'cardiopower-re50-v-prodazhe' ?
                     'Гребной тренажер CardioPower RE50' :
                     articleSlug === 'cardiopower-b35-v-prodazhe' ?
                     'Вертикальный велотренажер CardioPower B35' :
                     'Wellfitness PRO в Сколково'
                  }
                  className="w-full h-full max-h-[420px] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* First additional section - Text left, Image right - скрыто для страницы дилеров и CardioPower T40 NEW */}
        {articleSlug !== 'novost-dlya-dilerov-wellfitness' && articleSlug !== 'cardiopower-t40-new-v-prodazhe' && articleSlug !== 'cardiopower-s20-new-v-prodazhe' && articleSlug !== 'cardiopower-tt30-v-prodazhe' && articleSlug !== 'cardiopower-s55-v-prodazhe' && articleSlug !== 'cardiopower-s50-v-prodazhe' && articleSlug !== 'cardiopower-x48-v-prodazhe' && articleSlug !== 'cardiopower-x45-v-prodazhe' && articleSlug !== 'cardiopower-tt35-v-prodazhe' && articleSlug !== 'cardiopower-re50-v-prodazhe' && articleSlug !== 'cardiopower-b35-v-prodazhe' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Text content in dotted border box */}
              <div className="border-2 border-dashed border-blue-300 p-8 bg-white">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Основные направления форума
                </h2>
                
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    В рамках выставки команда WellFitness PRO представила свои лучшие образцы тренажеров для фитнес-клубов от таких мировых брендов как TRUE и Octane. В частности, был показан популярный сегодня вид тренажеров-лестниц TRUE Palisade, с мощной конструкцией, защищающий от пота высотой ступеней 33см, широкими ступенями, двойной системой безопасности и различными вариантами консолей.
                  </p>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/982f79b8-645c-40bf-be50-f00072cecfa3.png"
                  alt="Фитнес оборудование"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Second additional section - Image left, Extended text right - скрыто для страницы дилеров и CardioPower T40 NEW */}
        {articleSlug !== 'novost-dlya-dilerov-wellfitness' && articleSlug !== 'cardiopower-t40-new-v-prodazhe' && articleSlug !== 'cardiopower-s20-new-v-prodazhe' && articleSlug !== 'cardiopower-tt30-v-prodazhe' && articleSlug !== 'cardiopower-s55-v-prodazhe' && articleSlug !== 'cardiopower-s50-v-prodazhe' && articleSlug !== 'cardiopower-x48-v-prodazhe' && articleSlug !== 'cardiopower-x45-v-prodazhe' && articleSlug !== 'cardiopower-tt35-v-prodazhe' && articleSlug !== 'cardiopower-re50-v-prodazhe' && articleSlug !== 'cardiopower-b35-v-prodazhe' && (
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left side - Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/746f9610-97c9-44d7-968c-c1b73580f04a.png"
                  alt="Участники мероприятия"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>

              {/* Right side - Extended text content in bordered box */}
              <div className="border-2 border-solid border-black p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Выставка и новые технологии
                </h2>
                
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    Самые трендовые тренажеры от Octane - AirDyne X и гребной тренажер RO – как всегда привлекли много внимания.
                  </p>
                  <p>
                    Но максимально масштабно на стенде был представлен бренд Smith, с новой серией кардиотренажеров и очень успешными новинками рынка: Жимом ногами, Мультибабочкой, Сдвоенной тягой. Также впервые была представлена серия скамей и стоек Revolution от Smith.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Image Carousel Section - только для статей с галереей */}
        {articleSlug === 'wellfitness-pro-skolkovo-2023' && (
        <section className="pt-0 pb-16 bg-white" style={{ marginTop: '-80px' }}>
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            {/* Photo Swiper Gallery */}
            <PhotoSwiper
              images={[
                "/lovable-uploads/74f19997-ebd9-40f6-bfec-557b17c512ab.png",
                "/lovable-uploads/2fad94b1-56ad-4c2d-8f5c-321bacbfbc30.png",
                "/lovable-uploads/982f79b8-645c-40bf-be50-f00072cecfa3.png",
                "/lovable-uploads/746f9610-97c9-44d7-968c-c1b73580f04a.png",
                "/lovable-uploads/13f3a05b-86bd-4ba0-9330-ff803380ac98.png"
              ]}
              autoplay={true}
              autoplayInterval={5000}
            />
          </div>
        </section>
        )}

        {/* Long Text Section - скрыто для страницы дилеров и CardioPower T40 NEW */}
        {articleSlug !== 'novost-dlya-dilerov-wellfitness' && articleSlug !== 'cardiopower-t40-new-v-prodazhe' && articleSlug !== 'cardiopower-s20-new-v-prodazhe' && articleSlug !== 'cardiopower-tt30-v-prodazhe' && articleSlug !== 'cardiopower-s55-v-prodazhe' && articleSlug !== 'cardiopower-b35-v-prodazhe' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="max-w-[1200px]">
              <h2 className="text-3xl font-bold text-[#17171E] mb-8">
                Следите за нашими новостями и новинками!
              </h2>
            </div>
          </div>
        </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-3xl font-bold text-[#17171E] mb-12">
              Часто задаваемые вопросы
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Когда состоится следующее мероприятие Wellfitness PRO?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Следующее мероприятие Wellfitness PRO планируется провести в 2024 году. Точные даты будут объявлены дополнительно на официальном сайте организаторов.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Как принять участие в выставке в качестве экспонента?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Для участия в выставке необходимо подать заявку через официальный сайт мероприятия. Регистрация участников обычно начинается за 6 месяцев до проведения форума.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-base font-medium text-gray-800 hover:no-underline py-6">
                  Какие направления будут представлены на следующем форуме?
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Планируется расширение тематики форума за счет включения направлений wellness, спортивного питания, цифровых технологий в фитнесе и международного опыта развития индустрии.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      
      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default NewsArticle;
