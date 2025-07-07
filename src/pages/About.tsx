import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

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
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      title: "Lorem Ipsum", 
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      description: "представляем тренажеры Nautilus 626 серии"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        {/* Breadcrumb and Title */}
        <section className="py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            {/* Breadcrumb */}
            <div className="mb-8">
              <span className="text-gray-400 text-xs">Главная → О компании</span>
            </div>
            
            {/* Main Title - уменьшен в 2 раза */}
            <h1 className="text-[40px] font-bold text-[#17171E] leading-tight" style={{ marginBottom: '10px' }}>
              О компании
            </h1>
          </div>
        </section>

        {/* Banner */}
        <section className="w-full">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="overflow-hidden relative rounded-lg" style={{ height: '236px', backgroundColor: '#EEEFF6' }}>
              <div className="relative h-full">
                <div className="flex items-center h-full">
                  {/* Левая часть с текстом - 55% ширины */}
                  <div className="w-[55%] z-10 flex flex-col justify-center" style={{ paddingLeft: '94px' }}>
                    <div>
                      <h2 className="text-3xl font-benzin-semibold leading-tight">
                        <span className="text-[#262631]">Well Fitness — </span>
                        <span className="text-[#F53B49]">надежный<br />партнер с 2005 года<br /></span>
                        <span className="text-[#262631]">для сотен компаний<br />от Калининграда<br />до Владивостока.</span>
                      </h2>
                    </div>
                  </div>
                  
                  {/* Правая часть с изображением - 45% ширины */}
                  <div className="w-[45%] h-full">
                    <img 
                      src="/lovable-uploads/7e51159c-56a9-4851-b1e6-165d114d982b.png"
                      alt="Спортивное оборудование"
                      className="w-full h-full object-cover rounded-r-lg"
                    />
                  </div>
                </div>
              </div>
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
        {activeTab === 'team' && (
          <section className="py-8">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    {/* Image placeholder with background from mockup */}
                    <div 
                      className="h-64 bg-cover bg-center relative"
                      style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face")'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className="p-4 bg-white">
                      <h4 className="font-semibold text-gray-900 mb-2">{member.position}</h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {member.description}
                      </p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[#F53B49] text-sm font-medium">{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#F53B49] text-sm">{member.email}</span>
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
              <div className="space-y-6">
                {/* Первый ряд - 3 карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.slice(0, 3).map((project, index) => (
                    <div key={project.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                      <div className="aspect-[4/3] relative">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                          <div>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full text-sm">
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="flex justify-start">
                            {index === 0 ? (
                              <Link 
                                to="/project"
                                className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
                              >
                                Перейти
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </Link>
                            ) : (
                              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                                Перейти
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Второй ряд - 2 карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.slice(3, 5).map((project) => (
                    <div key={project.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                      <div className="aspect-[4/3] relative">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                          <div>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full text-sm">
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="flex justify-start">
                            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                              Перейти
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Третий ряд - 3 карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.slice(5, 8).map((project) => (
                    <div key={project.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                      <div className="aspect-[4/3] relative">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                          <div>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full text-sm">
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="flex justify-start">
                            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                              Перейти
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Четвертый ряд - 2 карточки */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.slice(8, 10).map((project) => (
                    <div key={project.id} className="relative rounded-lg overflow-hidden group cursor-pointer">
                      <div className="aspect-[4/3] relative">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                          <div>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full text-sm">
                              {project.description}
                            </div>
                          </div>
                          
                          <div className="flex justify-start">
                            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                              Перейти
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  <div className="bg-white p-6">
                    <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Слаженная команда людей, любящих спорт и здоровый образ жизни знающих свое дело и ориентирующихся во всех нюансах фитнес оборудования;
                    </p>
                  </div>

                  <div className="bg-white p-6">
                    <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Склад запчастей для обеспечения качественного сервиса и бесперебойной работы оборудования;
                    </p>
                  </div>

                  <div className="bg-white p-6">
                    <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Строгое соблюдение всех обязательств перед партнерами;
                    </p>
                  </div>

                  <div className="bg-white p-6">
                    <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Широкая номенклатура качественной продукции ведущих мировых брендов с огромным выбором товаров в наличии;
                    </p>
                  </div>

                  <div className="bg-white p-6">
                    <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Полный послепродажный сервис с информационной и технической поддержкой;
                    </p>
                  </div>

                  <div className="bg-white p-6">
                    <div className="w-16 h-16 bg-gray-200 mb-4"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Отличные цены и эксклюзивные условия для постоянных партнеров.
                    </p>
                  </div>
                </div>

                {/* Карусель изображений с центральным элементом */}
                <div className="relative">
                  <Carousel className="w-full" 
                    opts={{
                      align: "center",
                      loop: true,
                    }}
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {/* Первое изображение */}
                      <CarouselItem className="pl-2 md:pl-4 basis-4/5 md:basis-2/5 lg:basis-1/4">
                        <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 opacity-70 scale-90">
                          <img 
                            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
                            alt="Фитнес оборудование"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      
                      {/* Центральное изображение */}
                      <CarouselItem className="pl-2 md:pl-4 basis-4/5 md:basis-2/5 lg:basis-2/5">
                        <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 scale-100 opacity-100 z-10 relative">
                          <img 
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop"
                            alt="Тренировка в спортзале"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      
                      {/* Третье изображение */}
                      <CarouselItem className="pl-2 md:pl-4 basis-4/5 md:basis-2/5 lg:basis-1/4">
                        <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 opacity-70 scale-90">
                          <img 
                            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=400&fit=crop"
                            alt="Спортивная активность"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      
                      {/* Дополнительные изображения для цикличности */}
                      <CarouselItem className="pl-2 md:pl-4 basis-4/5 md:basis-2/5 lg:basis-1/4">
                        <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 opacity-70 scale-90">
                          <img 
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"
                            alt="Фитнес центр"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                      
                      <CarouselItem className="pl-2 md:pl-4 basis-4/5 md:basis-2/5 lg:basis-1/4">
                        <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 opacity-70 scale-90">
                          <img 
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop"
                            alt="Спортивное оборудование"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-0 shadow-lg" />
                  </Carousel>

                  {/* Навигационные точки */}
                  <div className="flex justify-center mt-6 gap-2">
                    <div className="w-8 h-1 bg-[#F53B49] rounded"></div>
                    <div className="w-2 h-1 bg-gray-300 rounded"></div>
                    <div className="w-2 h-1 bg-gray-300 rounded"></div>
                    <div className="w-2 h-1 bg-gray-300 rounded"></div>
                    <div className="w-2 h-1 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* В чем причина нашего успеха? */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
                <h2 className="text-[40px] font-bold text-[#17171E] mb-8 leading-tight">
                  В чем причина нашего успеха?
                </h2>
                
                <p className="text-gray-700 text-base mb-12 max-w-6xl leading-relaxed">
                  На сегодняшний день в каталоге Well Fitness представлены лучшие мировые бренды спортивного оборудования, среди которых Sole Fitness, Nautilus Fitness, Bowflex, CardioPower, PROSKI Simulator, Eclipse и др. Продукция этих марок отличается безупречным балансом качества и функциональности, возглавляет ведущие мировые рейтинги и пользуется доверием покупателей по всему миру. Если вы ищете надежного поставщика спортивного оборудования - мы будем рады видеть вас в числе наших партнеров и готовы предложить лучшие условия для выгодного дилерского сотрудничества!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Первый блок */}
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop")'}}>
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm leading-relaxed">
                          Во-первых, мы особенно дорожим своей безупречной репутацией и регулярно повышаем планку качества сервиса. Знак, находясь другим может оказаться доверие покупателя, специалисты Well Fitness всегда ориентируются на интересы клиентов.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Второй блок */}
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=300&fit=crop")'}}>
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm leading-relaxed">
                          Во-вторых, мы поставляем только самую качественную и надежную продукцию. Перед выводом на российский рынок, мы тщательно тестируем каждую модель, поэтому все предлагаемое оборудование высоко ценится покупателями и имеет минимум сервисных проблем.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Третий блок - полная ширина */}
                <div className="relative rounded-lg overflow-hidden">
                  <div className="h-[300px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=300&fit=crop")'}}>
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white max-w-4xl">
                      <p className="text-sm leading-relaxed">
                        Значимость этих проблем настолько очевидна, что рамки и место обучения кадров требуют от нас анализа существенных финансовых и административных условий. С другой стороны начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
      
      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default About;
