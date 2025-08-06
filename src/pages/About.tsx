import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Warehouse, Shield, Grid3x3, Wrench, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import PhotoSwiper from '@/components/PhotoSwiper';
import missionPlatform from '@/assets/mission-platform.jpg';
import missionHealth from '@/assets/mission-health.jpg';
import missionEquipment from '@/assets/mission-equipment.jpg';
import missionService from '@/assets/mission-service.jpg';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const teamMembers = [
    {
      name: 'Фамилия Имя Отчество',
      position: 'Должность',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение',
      phone: '+7 900 000-00-00',
      email: 'info@wellfitness.ru'
    },
    {
      name: 'Фамилия Имя Отчество',
      position: 'Должность',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение',
      phone: '+7 900 000-00-00',
      email: 'info@wellfitness.ru'
    },
    {
      name: 'Фамилия Имя Отчество',
      position: 'Должность',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение',
      phone: '+7 900 000-00-00',
      email: 'info@wellfitness.ru'
    },
    {
      name: 'Фамилия Имя Отчество',
      position: 'Должность',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение',
      phone: '+7 900 000-00-00',
      email: 'info@wellfitness.ru'
    },
    {
      name: 'Фамилия Имя Отчество',
      position: 'Должность',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение',
      phone: '+7 900 000-00-00',
      email: 'info@wellfitness.ru'
    },
    {
      name: 'Фамилия Имя Отчество',
      position: 'Должность',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение',
      phone: '+7 900 000-00-00',
      email: 'info@wellfitness.ru'
    },
    {
      name: 'Фамилия Имя Отчество',
      position: 'Должность',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение',
      phone: '+7 900 000-00-00',
      email: 'info@wellfitness.ru'
    },
    {
      name: 'Фамилия Имя Отчество',
      position: 'Должность',
      description: 'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение',
      phone: '+7 900 000-00-00',
      email: 'info@wellfitness.ru'
    }
  ];

  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/fdec1cea-908d-43a3-9d77-4f14304597f3.png",
      title: "Атлетика+ (г. Новомосковск)",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 2,
      image: "/lovable-uploads/cc85982b-96f7-40ec-ad84-f52b8c506581.png",
      title: "Фитнес Терра (г. Москва)", 
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 3,
      image: "/lovable-uploads/b1513bca-e46f-4642-85c8-279c68cbbff4.png",
      title: "RockOut (г. Москва)",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 4,
      image: "/lovable-uploads/7532d8ab-c6f7-4106-8d4b-563a3df784aa.png",
      title: "Нептун (г. Балашиха)",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 5,
      image: "/lovable-uploads/d37774a2-1a10-4cf2-ab20-b3e19960d0ce.png",
      title: "СопкиSport (Мурманская область)",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 6,
      image: "/lovable-uploads/a5af320b-9c2e-4f35-9708-452bd07d454f.png",
      title: "ЦентрК (г. Владикавказ)",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 7,
      image: "/lovable-uploads/c015139b-7198-4978-ae43-3c24b91892a0.png",
      title: "Pulse120 (г. Анапа)",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 8,
      image: "/lovable-uploads/3d769f2a-ddbb-4534-a9b9-9b2783c1bccf.png",
      title: "PlazaFitness (г. Кострома)",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 9,
      image: "/lovable-uploads/c9c5dc62-b0da-4189-bdfe-bf254ecf15e8.png",
      title: "Открытие нового зала (Сочи Парк Отель)",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    }
  ];

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
        return 'col-span-1 row-span-1';
      case 'small':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const getImageHeight = (size: string) => {
    switch (size) {
      case 'large':
        return 'h-48';
      case 'medium':
        return 'h-32';
      case 'small':
      default:
        return 'h-32';
    }
  };

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
                <BreadcrumbPage>О компании</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          {/* Main Title - уменьшен в 2 раза */}
          <h1 className="text-[40px] font-bold text-[#17171E] leading-tight">
            О компании
          </h1>
        </div>

        {/* Banner */}
        <section className="w-full">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="overflow-hidden relative rounded-lg">
              <img 
                src="/lovable-uploads/9ca63ea8-f3af-4a3b-bbfd-b2e7b3cf78e2.png"
                alt="WellFitness команда"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        
        {/* Navigation tabs */}
        <section className="pt-2.5 pb-10">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="flex gap-2.5">
              <button 
                onClick={() => setActiveTab('about')}
                className={`px-6 py-1.5 rounded-xl text-base font-benzin transition-colors ${
                  activeTab === 'about' 
                    ? 'bg-[#F53B49] text-white' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                О нас
              </button>
              <button 
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-1.5 rounded-xl text-base font-benzin transition-colors ${
                  activeTab === 'mission' 
                    ? 'bg-[#F53B49] text-white' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Наша миссия
              </button>
              {/* Временно скрыта вкладка "Наша команда"
              <button 
                onClick={() => setActiveTab('team')}
                className={`px-6 py-1.5 rounded-xl text-base font-benzin transition-colors ${
                  activeTab === 'team' 
                    ? 'bg-[#F53B49] text-white' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Наша команда
              </button>
              */}
              <button 
                onClick={() => setActiveTab('projects')}
                className={`px-6 py-1.5 rounded-xl text-base font-benzin transition-colors ${
                  activeTab === 'projects' 
                    ? 'bg-[#F53B49] text-white' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Наши проекты
              </button>
              <button 
                onClick={() => setActiveTab('news')}
                className={`px-6 py-1.5 rounded-xl text-base font-benzin transition-colors ${
                  activeTab === 'news' 
                    ? 'bg-[#F53B49] text-white' 
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Новости
              </button>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        {activeTab === 'mission' && (
          <section className="py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="space-y-16">
                
                {/* Блок 1: Только текст по центру без заголовка */}
                <div className="flex justify-center">
                  <div className="max-w-4xl text-center animate-fade-in">
                    <p className="text-gray-700 text-base leading-relaxed font-manrope">
                      Наша миссия заключается в том, чтобы стать идеальной онлайн-платформой, на которой люди смогут найти все необходимое оборудование и аксессуары для повседневных занятий фитнесом и поддержания здорового образа жизни.
                    </p>
                  </div>
                </div>

                {/* Блок 2: Изображение слева, текст справа */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-scale-in hover-scale rounded-lg overflow-hidden shadow-lg lg:order-1 order-2">
                    <img 
                      src={missionHealth} 
                      alt="Здоровый образ жизни" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="animate-fade-in lg:order-2 order-1">
                    <h3 className="text-2xl font-semibold text-[#17171E] mb-6" style={{ fontFamily: 'Benzin-Semibold' }}>
                      Оздоровление населения
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed font-manrope">
                      Наша цель – это оздоровление населения страны при помощи доступных инструментов для улучшения физической формы, психологического состояния, повышения самооценки и улучшения качества и продолжительности жизни.
                    </p>
                  </div>
                </div>

                {/* Блок 3: Текст слева, изображение справа */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-fade-in">
                    <h3 className="text-2xl font-semibold text-[#17171E] mb-6" style={{ fontFamily: 'Benzin-Semibold' }}>
                      Современное оборудование
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed font-manrope">
                      Мы предлагаем самое современное, функциональное и безопасное оборудование, которое обеспечивает эффективность тренировок, а также поддерживает высокую мотивацию в достижении поставленных целей.
                    </p>
                  </div>
                  <div className="animate-scale-in hover-scale rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={missionEquipment} 
                      alt="Современное фитнес-оборудование" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Блок 4: Изображение слева, текст справа */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-scale-in hover-scale rounded-lg overflow-hidden shadow-lg lg:order-1 order-2">
                    <img 
                      src={missionService} 
                      alt="Индивидуальный подход и поддержка" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className="animate-fade-in lg:order-2 order-1">
                    <h3 className="text-2xl font-semibold text-[#17171E] mb-6" style={{ fontFamily: 'Benzin-Semibold' }}>
                      Качественный сервис
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed font-manrope mb-6">
                      Преимущества компании заключаются в предоставлении качественного контента, индивидуальном подходе к каждому покупателю и обеспечении качественной информационной и технической поддержки.
                    </p>
                    <div className="bg-gradient-to-r from-[#F53B49] to-[#FF6B7A] text-white p-6 rounded-lg">
                      <p className="text-lg font-medium" style={{ fontFamily: 'Benzin-Semibold' }}>
                        Мы стремимся сделать занятия фитнесом более эффективными, мотивирующими и интересными!
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {activeTab === 'team' && (
          <section className="py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
                {teamMembers.map((member, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden h-[450px]">
                    {/* Background image */}
                    <div 
                      className="h-full bg-cover bg-center relative"
                      style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop")'
                      }}
                    >
                      {/* Name above white container */}
                      <div className="absolute bottom-[160px] left-4 text-white">
                        <h3 className="text-base font-medium" style={{ fontFamily: 'Benzin-Semibold' }}>
                          <div>Фамилия Имя</div>
                          <div>Отчество</div>
                        </h3>
                      </div>
                      
                      {/* Bottom white container */}
                      <div className="absolute bottom-[10px] left-[10px] right-[10px] p-4 bg-white rounded-lg">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Benzin-Semibold' }}>
                          {member.position}
                        </h4>
                        <p className="text-[#262631] text-xs mb-3 leading-relaxed" style={{ fontFamily: 'Manrope' }}>
                          {member.description}
                        </p>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-[#F53B49] font-medium">{member.phone}</span>
                          <span className="text-[#F53B49]">{member.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section className="py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="space-y-[10px]">
                {/* Первый ряд - 3 карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
                  {projects.slice(0, 3).map((project, index) => (
                    <div key={project.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                      <div className="h-[300px] relative">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 p-6 text-white">
                          <div className="absolute bottom-6 left-6 right-6 transition-transform duration-300 group-hover:-translate-y-12">
                            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Benzin-Medium' }}>{project.title}</h3>
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex justify-start">
                              {index === 0 ? (
                                <Link 
                                  to="/project"
                                  className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100"
                                >
                                  Перейти
                                  <ArrowRight size={16} />
                                </Link>
                              ) : (
                                <button className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100">
                                  Перейти
                                  <ArrowRight size={16} />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Второй ряд - 2 карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                  {projects.slice(3, 5).map((project) => (
                    <div key={project.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                      <div className="h-[300px] relative">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 p-6 text-white">
                          <div className="absolute bottom-6 left-6 right-6 transition-transform duration-300 group-hover:-translate-y-12">
                            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Benzin-Medium' }}>{project.title}</h3>
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex justify-start">
                              <button className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100">
                                Перейти
                                <ArrowRight size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Третий ряд - 3 карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
                  {projects.slice(5, 8).map((project) => (
                    <div key={project.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                      <div className="h-[300px] relative">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 p-6 text-white">
                          <div className="absolute bottom-6 left-6 right-6 transition-transform duration-300 group-hover:-translate-y-12">
                            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Benzin-Medium' }}>{project.title}</h3>
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex justify-start">
                              <button className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100">
                                Перейти
                                <ArrowRight size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Четвертый ряд - 2 карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
                  {projects.slice(8, 10).map((project) => (
                    <div key={project.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                      <div className="h-[300px] relative">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 p-6 text-white">
                          <div className="absolute bottom-6 left-6 right-6 transition-transform duration-300 group-hover:-translate-y-12">
                            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Benzin-Medium' }}>{project.title}</h3>
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex justify-start">
                              <button className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100">
                                Перейти
                                <ArrowRight size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'about' && (
          <>
            {/* Statistics Banner - updated height and image */}
            <section className="w-full">
              <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
                <div className="overflow-hidden relative rounded-lg" style={{ height: '408px' }}>
                  <img 
                    src="/lovable-uploads/b04fa555-f20a-4548-bca0-6ff520c1c93c.png"
                    alt="О компании - статистика"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center right' }}
                  />
                  {/* Statistics content overlay */}
                  <div className="absolute top-2.5 right-2.5 bottom-2.5 w-[650px] bg-white rounded-lg p-6 shadow-lg">
                    <div className="h-full flex flex-col justify-between">
                      <div className="mb-6">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          За годы успешного развития нам удалось консолидировать в своем ассортименте продукцию лучших мировых брендов, собрать команду профессионалов, завоевать доверие десятков тысяч лояльных покупателей и стать настоящим лидером рынка.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-4xl font-bold text-[#17171E] mb-1">2005</div>
                          <div className="text-gray-600 text-sm">Год появления на рынке</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-[#17171E] mb-1">10 000+</div>
                          <div className="text-gray-600 text-sm">Складских помещений</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-[#17171E] mb-1">60+</div>
                          <div className="text-gray-600 text-sm">Квалифицированных сотрудников</div>
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-[#17171E] mb-1">20+</div>
                          <div className="text-gray-600 text-sm">Ведущих мировых брендов</div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-4xl font-bold text-[#17171E] mb-1">3000+</div>
                        <div className="text-gray-600 text-sm">SKU</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* География продаж */}
            <section className="py-8">
              <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
                <h2 className="mb-0 leading-tight" style={{ fontSize: '32px', fontFamily: 'Benzin-Semibold' }}>
                  <span style={{ color: 'var(--Light-Grey, #778093)' }}>География </span>
                  <span style={{ color: '#262631' }}>продаж</span>
                </h2>
                
                <div className="w-full bg-white rounded-lg overflow-hidden" style={{ marginTop: '-15px' }}>
                  <img 
                    src="/lovable-uploads/b06c69dd-14f1-40c1-9e8a-9b08c05e47aa.png"
                    alt="Карта России с городами присутствия"
                    className="w-full h-auto"
                    style={{ maxHeight: '600px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            </section>

            {/* Мы сегодня - это */}
            <section className="py-16">
              <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
                <h2 className="mb-12 leading-tight" style={{ fontSize: '32px', fontFamily: 'Benzin-Semibold' }}>
                  <span style={{ color: 'var(--Dark-Grey, #262631)' }}>Мы сегодня </span>
                  <span style={{ color: '#778093' }}>- это:</span>
                </h2>
                
                {/* Шесть информационных блоков */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] mb-16">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="w-16 h-16 bg-[#F53B49] rounded-lg flex items-center justify-center mb-4">
                      <Users size={32} color="white" />
                    </div>
                    <h3 className="text-[#17171E] text-lg font-semibold mb-2" style={{ fontFamily: 'Benzin-Semibold' }}>
                      Опытная команда
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                      команда профессионалов, объединенных любовью к спорту и глубоким знанием фитнес-оборудования
                    </p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="w-16 h-16 bg-[#F53B49] rounded-lg flex items-center justify-center mb-4">
                      <Warehouse size={32} color="white" />
                    </div>
                    <h3 className="text-[#17171E] text-lg font-semibold mb-2" style={{ fontFamily: 'Benzin-Semibold' }}>
                      Собственный склад запчастей
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                      гарантия оперативного сервиса и бесперебойной работы техники
                    </p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="w-16 h-16 bg-[#F53B49] rounded-lg flex items-center justify-center mb-4">
                      <Shield size={32} color="white" />
                    </div>
                    <h3 className="text-[#17171E] text-lg font-semibold mb-2" style={{ fontFamily: 'Benzin-Semibold' }}>
                      Надежность
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                      строгое выполнение обязательств перед клиентами и партнерами
                    </p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="w-16 h-16 bg-[#F53B49] rounded-lg flex items-center justify-center mb-4">
                      <Grid3x3 size={32} color="white" />
                    </div>
                    <h3 className="text-[#17171E] text-lg font-semibold mb-2" style={{ fontFamily: 'Benzin-Semibold' }}>
                      Широкий ассортимент
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                      оборудование ведущих мировых брендов в наличии и под заказ
                    </p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="w-16 h-16 bg-[#F53B49] rounded-lg flex items-center justify-center mb-4">
                      <Wrench size={32} color="white" />
                    </div>
                    <h3 className="text-[#17171E] text-lg font-semibold mb-2" style={{ fontFamily: 'Benzin-Semibold' }}>
                      Комплексный сервис
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                      полное сопровождение: от выбора до послепродажного обслуживания
                    </p>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="w-16 h-16 bg-[#F53B49] rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp size={32} color="white" />
                    </div>
                    <h3 className="text-[#17171E] text-lg font-semibold mb-2" style={{ fontFamily: 'Benzin-Semibold' }}>
                      Выгодные условия
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed font-manrope">
                      конкурентные цены и специальные предложения для постоянных клиентов
                    </p>
                  </div>
                </div>

                {/* Photo Swiper Gallery */}
                <div>
                  <PhotoSwiper 
                    images={[
                      "/lovable-uploads/b555a0e9-869b-49af-bed7-c8a64d9d3e99.png",
                      "/lovable-uploads/09aa5a7a-91f0-4b59-b25a-4adae6c6eabc.png",
                      "/lovable-uploads/091717a9-ebff-4e40-961c-41fbf3a3ad61.png",
                      "/lovable-uploads/a1cd1be2-b869-402f-8b30-684846ff602c.png",
                      "/lovable-uploads/c472fcee-44da-473a-8890-1cdb5dc8890b.png"
                    ]}
                    autoplay={true}
                    autoplayInterval={5000}
                  />
                </div>
              </div>
            </section>

            {/* В чем причина нашего успеха? */}
            <section className="pb-8 bg-white">
              <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
                <h2 className="mb-6 leading-tight" style={{ fontSize: '32px', fontFamily: 'Benzin-Semibold', color: 'var(--Dark-Grey, #262631)' }}>
                  В чем причина нашего успеха?
                </h2>
                
                <p className="text-gray-700 text-base mb-6 leading-relaxed font-manrope text-justify">
                  На сегодняшний день в каталоге Well Fitness представлены лучшие мировые бренды спортивного оборудования, среди которых Sole Fitness, Nautilus Fitness, Bowflex, CardioPower, PROSKI Simulator, Eclipse и др. Продукция этих марок отличается безупречным балансом качества и функциональности, возглавляет ведущие мировые рейтинги и пользуется доверием покупателей по всему миру. Если вы ищете надежного поставщика спортивного оборудования - мы будем рады видеть вас в числе наших партнеров и готовы предложить лучшие условия для выгодного дилерского сотрудничества!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-[10px]">
                  {/* Первый блок */}
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url("/lovable-uploads/548c2b8d-46c9-402e-8b79-0bdb88078231.png")'}}></div>
                    <div className="absolute bottom-[10px] left-[10px] right-[10px] p-4 bg-white rounded-lg">
                      <p className="text-sm leading-relaxed text-gray-800" style={{ fontFamily: 'Benzin-Semibold' }}>
                        Мы ценим безупречную репутацию и постоянно улучшаем качество сервиса. Для нас доверие клиентов — главный приоритет.
                      </p>
                    </div>
                  </div>

                  {/* Второй блок */}
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url("/lovable-uploads/31b6a08c-aa95-40fd-a627-090c5cc9eb2e.png")'}}></div>
                    <div className="absolute bottom-[10px] left-[10px] right-[10px] p-4 bg-white rounded-lg">
                      <p className="text-sm leading-relaxed text-gray-800" style={{ fontFamily: 'Benzin-Semibold' }}>
                        Качество — наш приоритет. Поставляем только проверенное оборудование, тщательно тестируемое перед выходом на рынок.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Третий блок - полная ширина */}
                <div className="relative rounded-lg overflow-hidden">
                  <div className="h-[350px] bg-cover bg-top" style={{backgroundImage: 'url("/lovable-uploads/ec98ff38-ba70-40b1-9f87-98ab4fb58324.png")'}}></div>
                  <div className="absolute bottom-[10px] left-[10px] right-[10px] p-4 bg-white rounded-lg">
                    <p className="text-sm leading-relaxed text-gray-800" style={{ fontFamily: 'Benzin-Semibold' }}>
                      Обучение сотрудников и инвестиции в их развитие — ключевое условие роста Wellfitness.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'news' && (
          <section className="py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              {/* News Grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {newsItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.slug}`}
                    className={`${getCardClasses(item.size)} group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer`}
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full ${getImageHeight(item.size)} object-cover`}
                      />
                      
                      {/* Category Badge */}
                      <div className={`absolute top-4 left-4 ${item.categoryColor} text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide`}>
                        {item.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-sm text-gray-600 mb-3">
                        {item.date}
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-3 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </Link>
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
          </section>
        )}
      </main>
      
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default About;
