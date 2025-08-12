import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Warehouse, Shield, Grid3x3, Wrench, TrendingUp } from 'lucide-react';
import { getAboutPageNews } from '@/data/newsData';
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

  // Сопоставление проектов с их слагами для URL
  const projectSlugs = [
    'atletika-plus-novomoskovsk',
    'fitness-terra-moscow', 
    'rockout-moscow',
    'neptun-balashikha',
    'sopki-sport-murmansk',
    'centrk-vladikavkaz',
    'pulse120-anapa',
    'plaza-fitness-kostroma',
    'sochi-park-hotel',
    'lorem-ipsum-10'
  ];

  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/fdec1cea-908d-43a3-9d77-4f14304597f3.png",
      title: "Атлетика+ (г. Новомосковск)",
      description: "С инвесторами мы оснастили зал топовым оборудованием под дизайн — он стал лучшим в регионе.",
      slug: projectSlugs[0]
    },
    {
      id: 2,
      image: "/lovable-uploads/cc85982b-96f7-40ec-ad84-f52b8c506581.png",
      title: "Фитнес Терра (г. Москва)", 
      description: "Клуб класса \"бизнес\" на площади старой советской застройки",
      slug: projectSlugs[1]
    },
    {
      id: 3,
      image: "/lovable-uploads/b1513bca-e46f-4642-85c8-279c68cbbff4.png",
      title: "RockOut (г. Москва)",
      description: "Прогрессивный фитнес-клуб с рекуррентными платежами и оборудованием класса \"премиум\".",
      slug: projectSlugs[2]
    },
    {
      id: 4,
      image: "/lovable-uploads/7532d8ab-c6f7-4106-8d4b-563a3df784aa.png",
      title: "Нептун (г. Балашиха)",
      description: "Обновленный тренажерный зал крупнейшего спортивного центра города Балашиха.",
      slug: projectSlugs[3]
    },
    {
      id: 5,
      image: "/lovable-uploads/d37774a2-1a10-4cf2-ab20-b3e19960d0ce.png",
      title: "СопкиSport (Мурманская область)",
      description: "Региональная сеть тренажерных залов под патронажем Министерства спорта Мурманской области.",
      slug: projectSlugs[4]
    },
    {
      id: 6,
      image: "/lovable-uploads/a5af320b-9c2e-4f35-9708-452bd07d454f.png",
      title: "ЦентрК (г. Владикавказ)",
      description: "Один из крупнейших фитнес-центров города Владикавказ.",
      slug: projectSlugs[5]
    },
    {
      id: 7,
      image: "/lovable-uploads/c015139b-7198-4978-ae43-3c24b91892a0.png",
      title: "Pulse120 (г. Анапа)",
      description: "Отличный компактных фитнес-клуб в г.Анапа. Один из самых современных в городе.",
      slug: projectSlugs[6]
    },
    {
      id: 8,
      image: "/lovable-uploads/3d769f2a-ddbb-4534-a9b9-9b2783c1bccf.png",
      title: "PlazaFitness (г. Кострома)",
      description: "Один из самых популярных фитнес-клубов г. Кострома.",
      slug: projectSlugs[7]
    },
    {
      id: 9,
      image: "/lovable-uploads/c9c5dc62-b0da-4189-bdfe-bf254ecf15e8.png",
      title: "Открытие нового зала (Сочи Парк Отель)",
      description: "С инвесторами мы поставили топовое оборудование в крупный сочинский курорт — зал стал лучшим в регионе.",
      slug: projectSlugs[8]
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    }
  ];

  const newsItems = getAboutPageNews();

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
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full" style={{ fontFamily: 'Benzin-Medium', fontSize: '13px' }}>
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex justify-start">
                              <Link 
                                to={`/projects/${project.slug}`}
                                className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100"
                              >
                                Перейти
                                <ArrowRight size={16} />
                              </Link>
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
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full" style={{ fontFamily: 'Benzin-Medium', fontSize: '13px' }}>
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex justify-start">
                              <Link 
                                to={`/projects/${project.slug}`}
                                className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100"
                              >
                                Перейти
                                <ArrowRight size={16} />
                              </Link>
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
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full" style={{ fontFamily: 'Benzin-Medium', fontSize: '13px' }}>
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex justify-start">
                              <Link 
                                to={`/projects/${project.slug}`}
                                className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100"
                              >
                                Перейти
                                <ArrowRight size={16} />
                              </Link>
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
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full" style={{ fontFamily: 'Benzin-Medium', fontSize: '13px' }}>
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex justify-start">
                              <Link 
                                to={`/projects/${project.slug}`}
                                className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100"
                              >
                                Перейти
                                <ArrowRight size={16} />
                              </Link>
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
                    src="/lovable-uploads/ff32c8e2-a062-45cc-8c1e-6a6d228f6380.png"
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
                  На сегодняшний день в каталоге Wellfitness представлены лучшие мировые бренды спортивного оборудования, среди которых Sole Fitness, Nautilus Fitness, Bowflex, CardioPower, PROSKI Simulator, Eclipse и др. Продукция этих марок отличается безупречным балансом качества и функциональности, возглавляет ведущие мировые рейтинги и пользуется доверием покупателей по всему миру. Если вы ищете надежного поставщика спортивного оборудования – мы будем рады видеть вас в числе наших партнеров и готовы предложить лучшие условия для выгодного дилерского сотрудничества!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-[10px]">
                  {/* Первый блок */}
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url("/lovable-uploads/5e70564a-0a0e-401c-b04c-2aa607429f32.png")'}}></div>
                    <div className="absolute bottom-[10px] left-[10px] right-[10px] p-4 bg-white rounded-lg">
                      <p className="text-sm leading-relaxed text-gray-800" style={{ fontFamily: 'Benzin-Semibold' }}>
                        Мы ценим безупречную репутацию и постоянно улучшаем качество сервиса. Для нас доверие клиентов — главный приоритет.
                      </p>
                    </div>
                  </div>

                  {/* Второй блок */}
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url("/lovable-uploads/4b28dccc-b553-41c9-a318-d227c221eeed.png")'}}></div>
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
              <h2 className="text-2xl font-bold mb-8">Новости и блог</h2>
              
              {/* News Grid - Custom Layout like Screenshot */}
              <div className="grid grid-cols-12 gap-4 mb-12">
                {/* Первый контейнер - большой квадрат слева */}
                <div className="col-span-12 md:col-span-6">
                  <Link
                    to={`/news/${newsItems[0]?.slug}`}
                    className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-full"
                  >
                    <div className="relative">
                      <img
                        src={newsItems[0]?.image}
                        alt={newsItems[0]?.title}
                        className="w-full h-[350px] object-cover"
                      />
                      
                      {/* Category Badge */}
                      <div className={`absolute top-4 left-4 ${newsItems[0]?.categoryColor} text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide`}>
                        {newsItems[0]?.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-sm text-gray-600 mb-3">
                        {newsItems[0]?.date}
                      </div>
                      
                      <h3 className="font-semibold text-xl mb-3 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                        {newsItems[0]?.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {newsItems[0]?.description}
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Правая колонка */}
                <div className="col-span-12 md:col-span-6 flex flex-col">
                  {/* Второй контейнер - горизонтальный прямоугольник */}
                  <div className="h-[200px] mb-4">
                    <Link
                      to={`/news/${newsItems[1]?.slug}`}
                      className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-full"
                    >
                      <div className="flex h-full">
                        <div className="relative w-1/2">
                          <img
                            src={newsItems[1]?.image}
                            alt={newsItems[1]?.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Category Badge */}
                          <div className={`absolute top-2 left-2 ${newsItems[1]?.categoryColor} text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide`}>
                            {newsItems[1]?.category}
                          </div>
                        </div>
                        
                        <div className="w-1/2 p-4 flex flex-col justify-center">
                          <div className="text-xs text-gray-600 mb-2">
                            {newsItems[1]?.date}
                          </div>
                          
                          <h3 className="font-semibold text-sm mb-2 group-hover:text-[#F53B49] transition-colors line-clamp-3 leading-tight">
                            {newsItems[1]?.title}
                          </h3>
                          
                          <p className="text-xs text-gray-600 line-clamp-4 leading-relaxed">
                            {newsItems[1]?.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Третий и четвертый контейнеры - квадратные, выровнены по нижней границе */}
                  <div className="flex gap-4 flex-1 items-end">
                    {/* Третий контейнер */}
                    <div className="flex-1">
                      <Link
                        to={`/news/${newsItems[2]?.slug}`}
                        className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[180px]"
                      >
                        <div className="relative h-[100px]">
                          <img
                            src="/lovable-uploads/ed66472b-775d-46cd-84e0-7dc644a9aaad.png"
                            alt={newsItems[2]?.title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Category Badge */}
                          <div className={`absolute top-2 left-2 ${newsItems[2]?.categoryColor} text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide`}>
                            {newsItems[2]?.category}
                          </div>
                        </div>
                        
                        <div className="p-3 h-[80px] flex flex-col justify-center">
                          <div className="text-xs text-gray-600 mb-1">
                            {newsItems[2]?.date}
                          </div>
                           
                          <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                            {newsItems[2]?.title}
                          </h3>
                          
                          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                            {newsItems[2]?.description}
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* Четвертый контейнер */}
                    <div className="flex-1">
                      <Link
                        to={`/news/${newsItems[3]?.slug}`}
                        className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[180px]"
                      >
                        <div className="relative h-[100px]">
                          <img
                            src="/lovable-uploads/8ea9b9be-2293-4e24-a820-f56c2a81923e.png"
                            alt="Беговая дорожка CardioPower S20"
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Category Badge */}
                          <div className={`absolute top-2 left-2 ${newsItems[3]?.categoryColor} text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide`}>
                            {newsItems[3]?.category}
                          </div>
                        </div>
                        
                        <div className="p-3 h-[80px] flex flex-col justify-center">
                          <div className="text-xs text-gray-600 mb-1">
                            {newsItems[3]?.date}
                          </div>
                          
                          <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                            Новинка - Уже в продаже: Беговая дорожка CardioPower S20
                          </h3>
                          
                          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                            {newsItems[3]?.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Дополнительные 6 контейнеров новостей */}
              {/* Первый ряд - 4 контейнера */}
              <div className="grid grid-cols-4 gap-4 mb-4">
                {/* 5-й контейнер */}
                <div>
                  <Link
                    to="/news/cardiopower-tt30-v-prodazhe"
                    className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[180px]"
                  >
                    <div className="relative h-[100px]">
                      <img
                        src="/lovable-uploads/578522f8-4322-4ee6-b5f6-c136e100a67d.png"
                        alt="Беговая дорожка CardioPower ТТ30"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        НОВИНКА
                      </div>
                    </div>
                    
                    <div className="p-3 h-[80px] flex flex-col justify-center">
                      <div className="text-xs text-gray-600 mb-1">
                        12 августа 2025
                      </div>
                      
                      <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                        Новинка - Уже в продаже: Беговая дорожка CardioPower ТТ30
                      </h3>
                      
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        Новая модель беговой дорожки с улучшенными характеристиками
                      </p>
                    </div>
                  </Link>
                </div>

                {/* 6-й контейнер */}
                <div>
                  <Link
                    to="/news/cardiopower-s55-v-prodazhe"
                    className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[180px]"
                  >
                    <div className="relative h-[100px]">
                      <img
                        src="/lovable-uploads/3fe4b3b1-63a2-4ed1-b873-07b7de639ca1.png"
                        alt="Беговая дорожка CardioPower S55"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        НОВИНКА
                      </div>
                    </div>
                    
                    <div className="p-3 h-[80px] flex flex-col justify-center">
                      <div className="text-xs text-gray-600 mb-1">
                        11 августа 2025
                      </div>
                      
                      <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                        Новинка - Уже в продаже: Беговая дорожка CardioPower S55
                      </h3>
                      
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        Новая модель беговой дорожки с улучшенными характеристиками
                      </p>
                    </div>
                  </Link>
                </div>

                {/* 7-й контейнер */}
                <div>
                  <Link
                    to="/news/cardiopower-s50-v-prodazhe"
                    className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[180px]"
                  >
                    <div className="relative h-[100px]">
                      <img
                        src="/lovable-uploads/3b753ca2-42c7-416f-9886-af8374196645.png"
                        alt="Беговая дорожка CardioPower S50"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        НОВИНКА
                      </div>
                    </div>
                    
                    <div className="p-3 h-[80px] flex flex-col justify-center">
                      <div className="text-xs text-gray-600 mb-1">
                        10 августа 2025
                      </div>
                      
                      <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                        Новинка - Уже в продаже: Беговая дорожка CardioPower S50
                      </h3>
                      
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        Беговая дорожка с профессиональными характеристиками
                      </p>
                    </div>
                  </Link>
                </div>

                {/* 8-й контейнер */}
                <div>
                  <Link
                    to="/news/cardiopower-x48-v-prodazhe"
                    className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[180px]"
                  >
                    <div className="relative h-[100px]">
                      <img
                        src="/lovable-uploads/8f5c4260-9931-4f3a-9ae2-b0f6122e8f2f.png"
                        alt="Эллиптический тренажер CardioPower X48"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        НОВИНКА
                      </div>
                    </div>
                    
                    <div className="p-3 h-[80px] flex flex-col justify-center">
                      <div className="text-xs text-gray-600 mb-1">
                        9 августа 2025
                      </div>
                      
                      <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                        Новинка - Уже в продаже: Эллиптический тренажер CardioPower X48
                      </h3>
                      
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        Профессиональный эллиптический тренажер для эффективных тренировок
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Второй ряд - 2 контейнера */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                {/* 9-й контейнер */}
                <div>
                  <Link
                    to="/news/novinka-cardiopower-t40-new-9"
                    className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[180px]"
                  >
                    <div className="relative h-[100px]">
                      <img
                        src="/lovable-uploads/8ea9b9be-2293-4e24-a820-f56c2a81923e.png"
                        alt="Беговая дорожка CardioPower T40 NEW"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        НОВИНКА
                      </div>
                    </div>
                    
                    <div className="p-3 h-[80px] flex flex-col justify-center">
                      <div className="text-xs text-gray-600 mb-1">
                        8 августа 2025
                      </div>
                      
                      <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                        Новинка - Уже в продаже: Беговая дорожка CardioPower T40 NEW
                      </h3>
                      
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        Новая модель беговой дорожки с улучшенными характеристиками
                      </p>
                    </div>
                  </Link>
                </div>

                {/* 10-й контейнер */}
                <div>
                  <Link
                    to="/news/novinka-cardiopower-t40-new-10"
                    className="group bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer block h-[180px]"
                  >
                    <div className="relative h-[100px]">
                      <img
                        src="/lovable-uploads/8ea9b9be-2293-4e24-a820-f56c2a81923e.png"
                        alt="Беговая дорожка CardioPower T40 NEW"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
                        НОВИНКА
                      </div>
                    </div>
                    
                    <div className="p-3 h-[80px] flex flex-col justify-center">
                      <div className="text-xs text-gray-600 mb-1">
                        7 августа 2025
                      </div>
                      
                      <h3 className="font-semibold text-xs mb-1 group-hover:text-[#F53B49] transition-colors line-clamp-2 leading-tight">
                        Новинка - Уже в продаже: Беговая дорожка CardioPower T40 NEW
                      </h3>
                      
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        Новая модель беговой дорожки с улучшенными характеристиками
                      </p>
                    </div>
                  </Link>
                </div>
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
