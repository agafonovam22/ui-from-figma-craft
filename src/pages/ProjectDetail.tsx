import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

// Данные проектов
const projectsData = {
  'atletika-plus-novomoskovsk': {
    title: 'Атлетика+ (г. Новомосковск)',
    description: 'С инвесторами мы оснастили зал топовым оборудованием под дизайн — он стал лучшим в регионе.',
    image: '/lovable-uploads/fdec1cea-908d-43a3-9d77-4f14304597f3.png'
  },
  'fitness-terra-moscow': {
    title: 'Фитнес Терра (г. Москва)',
    description: 'Клуб класса "бизнес" на площади старой советской застройки',
    image: '/lovable-uploads/cc85982b-96f7-40ec-ad84-f52b8c506581.png'
  },
  'rockout-moscow': {
    title: 'RockOut (г. Москва)',
    description: 'Прогрессивный фитнес-клуб с рекуррентными платежами и оборудованием класса "премиум".',
    image: '/lovable-uploads/b1513bca-e46f-4642-85c8-279c68cbbff4.png'
  },
  'neptun-balashikha': {
    title: 'Нептун (г. Балашиха)',
    description: 'Обновленный тренажерный зал крупнейшего спортивного центра города Балашиха.',
    image: '/lovable-uploads/7532d8ab-c6f7-4106-8d4b-563a3df784aa.png'
  },
  'sopki-sport-murmansk': {
    title: 'СопкиSport (Мурманская область)',
    description: 'Региональная сеть тренажерных залов под патронажем Министерства спорта Мурманской области.',
    image: '/lovable-uploads/d37774a2-1a10-4cf2-ab20-b3e19960d0ce.png'
  },
  'centrk-vladikavkaz': {
    title: 'ЦентрК (г. Владикавказ)',
    description: 'Один из крупнейших фитнес-центров города Владикавказ.',
    image: '/lovable-uploads/a5af320b-9c2e-4f35-9708-452bd07d454f.png'
  },
  'pulse120-anapa': {
    title: 'Pulse120 (г. Анапа)',
    description: 'Отличный компактных фитнес-клуб в г.Анапа. Один из самых современных в городе.',
    image: '/lovable-uploads/c015139b-7198-4978-ae43-3c24b91892a0.png'
  },
  'plaza-fitness-kostroma': {
    title: 'PlazaFitness (г. Кострома)',
    description: 'Один из самых популярных фитнес-клубов г. Кострома.',
    image: '/lovable-uploads/3d769f2a-ddbb-4534-a9b9-9b2783c1bccf.png'
  },
  'sochi-park-hotel': {
    title: 'Открытие нового зала (Сочи Парк Отель)',
    description: 'С инвесторами мы поставили топовое оборудование в крупный сочинский курорт — зал стал лучшим в регионе.',
    image: '/lovable-uploads/c9c5dc62-b0da-4189-bdfe-bf254ecf15e8.png'
  }
};

const ProjectDetail: React.FC = () => {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const project = projectSlug ? projectsData[projectSlug as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="w-full">
          <section className="py-16">
            <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
              <h1 className="text-[40px] font-bold text-[#17171E] mb-8">Проект не найден</h1>
              <Link to="/about" className="text-[#F53B49] hover:underline">← Вернуться к проектам</Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        {/* Breadcrumb and Title */}
        <section className="py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
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
                <BreadcrumbItem>
                  <BreadcrumbPage>{project.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            {/* Main Title */}
            <h1 className="text-[40px] font-bold text-[#17171E] mb-8 leading-tight">
              {project.title}
            </h1>
          </div>
        </section>

        {/* Project Image */}
        <section className="w-full">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="overflow-hidden relative rounded-lg mb-8">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full object-cover object-center rounded-lg"
                style={{ height: '350px' }}
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left side - Text content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#17171E] mb-6">
                  О проекте
                </h2>
                
                <div className="space-y-6 text-gray-700 font-manrope">
                  {projectSlug === 'atletika-plus-novomoskovsk' ? (
                    <>
                      <p className="leading-relaxed text-base">
                        Специалисты компании WellFitness провели подбор оборудования класса Премиум для крупнейшего фитнес-проекта в регионе. В бюджете менее 30 млн рублей нам удалось поставить оборудование мирового топ-класса: TRUE, Octane, Gym80. Были проведены дополнительные работы по модификации оборудования для очень щепетильных требований клиента по расстановке, а также подобраны опциональные нестандартные цвета рамы и обивки. Тренажерный зал стал лучшим в своём регионе благодаря самым передовым технологиям, дизайну и уникальным моделям кардио и силовых тренажеров.
                      </p>
                      <p className="leading-relaxed text-base">
                        Фитнес-клуб «Премиум», общая площадь - 2200кв.м., тренажерный зал занимает 650кв.м.. Созданы зоны Кардиотренажеров, Зоны грузоблочных тренажеров TRUE Palladium, зона нагружаемых дисками Gym80 PureKraft, отдельная зона Функционального тренинга, зоны свободных весов.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="leading-relaxed text-base">
                        {project.description}
                      </p>
                      <p className="leading-relaxed text-base">
                        Наша компания WellFitness предоставила комплексное решение для оснащения данного фитнес-центра современным спортивным оборудованием. Проект включал в себя детальный анализ потребностей клиента, планирование пространства и поставку оборудования ведущих мировых брендов.
                      </p>
                      <p className="leading-relaxed text-base">
                        Результатом нашей работы стал современный и функциональный фитнес-центр, который превзошел ожидания как владельцев, так и посетителей. Качественное оборудование и продуманная планировка обеспечивают комфортные условия для тренировок различных уровней сложности.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Right side - YouTube Video */}
              <div className="relative mt-[50px]">
                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/4o4uTsF0Q2s"
                    title="Видео проекта Атлетика+"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <h2 className="text-3xl font-bold text-[#17171E] mb-12 text-center">
              Установленное оборудование
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#17171E] mb-4">Кардиооборудование</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Беговые дорожки премиум-класса</li>
                  <li>• Эллиптические тренажеры</li>
                  <li>• Велотренажеры</li>
                  <li>• Степперы</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#17171E] mb-4">Силовое оборудование</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Мультистанции</li>
                  <li>• Свободные веса</li>
                  <li>• Тренажеры на все группы мышц</li>
                  <li>• Функциональные рамы</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#17171E] mb-4">Дополнительное</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Функциональные тренажеры</li>
                  <li>• Системы подвесного тренинга</li>
                  <li>• Специализированные аксессуары</li>
                  <li>• Напольные покрытия</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#17171E] mb-6">
                Хотите реализовать похожий проект?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Наша команда экспертов готова помочь вам создать современный и функциональный фитнес-центр с использованием лучшего оборудования мировых брендов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contacts"
                  className="bg-[#F53B49] text-white px-8 py-3 rounded hover:bg-[#e63946] transition-colors font-medium"
                >
                  Связаться с нами
                </Link>
                <Link 
                  to="/about"
                  className="border border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors font-medium"
                >
                  Все проекты
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;