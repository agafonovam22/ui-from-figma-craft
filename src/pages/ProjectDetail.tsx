import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import PhotoSwiper from '@/components/PhotoSwiper';
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
    title: 'Атлетика+ (г.\u00A0Новомосковск)',
    description: 'С инвесторами мы оснастили зал топовым оборудованием под дизайн — он стал лучшим в регионе.',
    image: '/lovable-uploads/fdec1cea-908d-43a3-9d77-4f14304597f3.png'
  },
  'fitness-terra-moscow': {
    title: 'Фитнес Терра (г.\u00A0Москва)',
    description: 'Клуб класса «бизнес» на площади старой советской застройки',
    image: '/lovable-uploads/097c8707-039f-42f4-b176-b9b084a1cda9.png'
  },
  'rockout-moscow': {
    title: 'RockOut (г.\u00A0Москва)',
    description: 'Прогрессивный фитнес-клуб с рекуррентными платежами и оборудованием класса «премиум».',
    image: '/lovable-uploads/b1513bca-e46f-4642-85c8-279c68cbbff4.png'
  },
  'neptun-balashikha': {
    title: 'Нептун (г.\u00A0Балашиха)',
    description: 'Обновленный тренажерный зал крупнейшего спортивного центра города Балашиха.',
    image: '/lovable-uploads/7532d8ab-c6f7-4106-8d4b-563a3df784aa.png'
  },
  'sopki-sport-murmansk': {
    title: 'СопкиSport (Мурманская область)',
    description: 'Региональная сеть тренажерных залов под патронажем Министерства спорта Мурманской области.',
    image: '/lovable-uploads/d37774a2-1a10-4cf2-ab20-b3e19960d0ce.png'
  },
  'centrk-vladikavkaz': {
    title: 'ЦентрК (г.\u00A0Владикавказ)',
    description: 'Один из крупнейших фитнес-центров города Владикавказ.',
    image: '/lovable-uploads/a5af320b-9c2e-4f35-9708-452bd07d454f.png'
  },
  'pulse120-anapa': {
    title: 'Pulse120 (г.\u00A0Анапа)',
    description: 'Отличный компактных фитнес-клуб в г.\u00A0Анапа. Один из самых современных в городе.',
    image: '/lovable-uploads/c015139b-7198-4978-ae43-3c24b91892a0.png'
  },
  'plaza-fitness-kostroma': {
    title: 'PlazaFitness (г.\u00A0Кострома)',
    description: 'Один из самых популярных фитнес-клубов г.\u00A0Кострома.',
    image: '/lovable-uploads/ea3ea54f-dd7a-4063-8ac4-788a8a7b6441.png'
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
            <h1 className="text-[40px] font-bold text-[#17171E] mb-4 leading-tight">
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
        <section className="py-8">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            {projectSlug === 'sopki-sport-murmansk' ? (
              /* Full width content for sopki-sport-murmansk */
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#17171E] mb-6">
                  О проекте
                </h2>
                
                <div className="space-y-6 text-gray-700 font-manrope">
                  <p className="leading-relaxed text-base">
                    Наша компания рада сотрудничеству с&nbsp;Министерством Спорта Мурманской области, благодаря которому 2022 году нам удалось оснастить несколько объектов проекта «Сопки.Sport». Это уникальный социальный проект целью которого является доступные занятия по&nbsp;общей физической подготовке население в&nbsp;особенности молодежи и&nbsp;пенсионеров которым эти услуги предоставляются бесплатно. Я&nbsp;лично и&nbsp;вся наша команда очень гордимся работой как с&nbsp;каждым проектом в&nbsp;отдельности так и&nbsp;с&nbsp;Министерством спорта комплексе. Наше оборудование надежно и&nbsp;безопасно для использования, но&nbsp;также важно, что&nbsp;оно корректно с&nbsp;точки зрения анатомии человека, что&nbsp;позволит «привить» правильное движение молодым людям и&nbsp;не нанесет травм при его использовании. Очень надеемся на&nbsp;то, что&nbsp;спорт и&nbsp;здоровый образ жизни в&nbsp;нашей стране благодаря этому проекту продвинется на&nbsp;еще одну ступень доступности и&nbsp;массовости.
                  </p>
                </div>
              </div>
            ) : (
              /* Two column layout for other projects */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left side - Text content */}
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-[#17171E] mb-6">
                    О проекте
                  </h2>
                  
                  <div className="space-y-6 text-gray-700 font-manrope">
                    {projectSlug === 'neptun-balashikha' ? (
                      <>
                        <p className="leading-relaxed text-base">
                          После тщательного отбора клиентом наша команда была приглашена к&nbsp;оснащению расширенного тренажерного зала фитнес-клуба «Нептун» в&nbsp;городе Балашиха. Мы с&nbsp;готовностью подключились к&nbsp;проекту, так как фитнес-клуб является одним из&nbsp;самых крупных и&nbsp;успешных не только в&nbsp;городе, но&nbsp;и&nbsp;ближайшем Подмосковье.
                        </p>
                        <p className="leading-relaxed text-base">
                          Для проекта были предложены лучшие модели бренда Smith, а&nbsp;также ВИИТ-тренажеры&nbsp;Octane, которые гармонично заняли место рядом с&nbsp;существующим оборудованием класса Премиум, что&nbsp;позволило не потерять заявленный уровень клуба в&nbsp;целом для его клиентов.
                        </p>
                        <p className="leading-relaxed text-base">
                          Вместе с&nbsp;клиентом мы сделали наиболее удачную логистику зала с&nbsp;максимально полным набором отличных тренажеров и&nbsp;аксессуаров.
                        </p>
                      </>
                    ) : projectSlug === 'centrk-vladikavkaz' ? (
                      <p className="leading-relaxed text-base">
                        Один из крупнейших фитнес-центров города Владикавказ. Проект выполнен нашим дилером компанией Profi.Fit
                      </p>
                    ) : projectSlug === 'plaza-fitness-kostroma' ? (
                      <p className="leading-relaxed text-base">
                        Команда WellFitnessPRO оснастила фитнес-клуб в Костроме оборудованием класса «Бизнес» под брендом Smith с поддержкой HIIT тренажеров Octane. Тренажерный зал почти в 300кв.м. вместил полноценную линию кардиотренажеров, грузоблочные тренажеры серии Diamond, нагружаемые дисками серии Sapphire, а также полноценную зону функционального тренинга на основе комплекса для ФТ + HIIT-тренажеры знаменитого американского бренда Octane.
                      </p>
                    ) : (
                      <>
                        <p className="leading-relaxed text-base">
                          Наша компания с готовностью поучаствовала в оснащении одного из самых современных фитнес-клубов Москвы.
                        </p>
                        <p className="leading-relaxed text-base">
                          Нами были предложены несколько элитных единиц оборудования gym80 что помогло создать зону особого притяжения для всего проекта.
                        </p>
                        <p className="leading-relaxed text-base">
                          Непростой оказалось задача по установке оборудования из-за очень узких проходов в здание для данной категории тренажеров, но она была решена с успехом.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Right side - YouTube Video */}
                {(projectSlug === 'rockout-moscow' || projectSlug === 'neptun-balashikha' || projectSlug === 'centrk-vladikavkaz' || projectSlug === 'plaza-fitness-kostroma') && (
                  <div className="relative mt-[50px]">
                    <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src={projectSlug === 'neptun-balashikha' 
                          ? "https://www.youtube.com/embed/XfkjOZABKNo" 
                          : projectSlug === 'centrk-vladikavkaz'
                          ? "https://www.youtube.com/embed/uIGJTI0m_Cw"
                          : projectSlug === 'plaza-fitness-kostroma'
                          ? "https://www.youtube.com/embed/P-NJNHndqdg"
                          : "https://www.youtube.com/embed/JVLMLVQf3iQ"
                        }
                        title={`Видео проекта ${project.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <PhotoSwiper 
              images={
                projectSlug === 'sopki-sport-murmansk' ? [
                  "/lovable-uploads/a3c1035a-6176-4146-8391-a9c66e8ffec8.png",
                  "/lovable-uploads/7c0f49be-dc1b-4d3b-9e73-c03da595bc01.png",
                  "/lovable-uploads/391cc165-bf72-427c-8d65-67ea4ee9bbe7.png",
                  "/lovable-uploads/0fc886d3-6688-47af-bcdb-895c29e12da5.png",
                  "/lovable-uploads/be68b1e6-cb16-4a55-9461-12e8344d8a55.png",
                  "/lovable-uploads/262e6447-0ab9-4e54-9920-20424889866d.png",
                  "/lovable-uploads/9471823c-3dc5-4d13-93d5-51c9427a7d94.png",
                  "/lovable-uploads/628c204f-ddab-4eb2-b972-e927e33dbb72.png",
                  "/lovable-uploads/2733947a-1cbf-42f7-8d32-267fa048f3d5.png",
                  "/lovable-uploads/e2bba983-a28d-470b-a08d-49fd58690b23.png",
                  "/lovable-uploads/a7cb00a3-6999-4159-b4a8-76f9ccb9fafc.png",
                  "/lovable-uploads/219b5fb6-a0bb-4af1-aa2e-8e66c17511f1.png",
                  "/lovable-uploads/992de3c4-5d99-42c4-a790-7765cb0c3983.png",
                  "/lovable-uploads/1b8d084d-962a-4036-a0b6-ef9b73ac92e3.png",
                  "/lovable-uploads/0ccc7b10-fa3e-4a1b-a3b6-64dcf7c360fe.png"
                ] : projectSlug === 'centrk-vladikavkaz' ? [
                  "/lovable-uploads/5a93bfd7-8032-4190-8c70-535a376d1ec9.png",
                  "/lovable-uploads/c61475be-3ceb-4a86-a4dd-dbf0c6fe9147.png",
                  "/lovable-uploads/ec08b952-6e3b-45c0-93c9-542e1e783f25.png",
                  "/lovable-uploads/840914b8-8d31-4850-b075-f815b81d0d4b.png",
                  "/lovable-uploads/260bc39e-033b-4bdb-bbeb-a44d9d8fb306.png"
                ] : projectSlug === 'plaza-fitness-kostroma' ? [
                  "/lovable-uploads/e547d17f-1ad4-49a9-83e0-b9c0e0c4171d.png",
                  "/lovable-uploads/97bdb3f0-3c1f-4b9f-9f81-c9d5274a2cc0.png",
                  "/lovable-uploads/cc8eae9e-24c6-42c6-b70a-07bb4a825b2a.png",
                  "/lovable-uploads/c4f3a5ac-720b-46f9-a894-fc46ebf8de65.png",
                  "/lovable-uploads/f8ea859b-f2a8-43da-ba1f-5638340b324f.png",
                  "/lovable-uploads/6f858cb4-8dc9-4c37-9ca1-08d0ff893c1c.png"
                ] : [
                  project.image
                ]
              }
              autoplay={true}
              autoplayInterval={5000}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-4 bg-white">
          <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#17171E] mb-6">
                Хотите реализовать похожий проект?
              </h2>
              <p className="text-gray-600 mb-8 w-full">
                Наша команда экспертов готова помочь вам создать современный и функциональный фитнес-центр с использованием лучшего оборудования мировых брендов.
              </p>
              
              {/* Call Request Form */}
              <div 
                className="w-full py-2 pr-8 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('/lovable-uploads/b069b0fc-5603-4b53-9e1f-8a60fbdc6e50.png')`
                }}
              >
                <div className="text-left">
                  <div className="bg-white p-6 rounded-lg max-w-[548px] ml-[5px]">
                    <h3 className="text-2xl font-bold text-[#17171E] mb-6">Заказать звонок</h3>
                    <form className="space-y-2.5">
                      <div>
                        <input
                          type="text"
                          placeholder="ФИО"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F53B49] focus:border-transparent bg-white"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <input
                          type="tel"
                          placeholder="Телефон"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F53B49] focus:border-transparent bg-white"
                          required
                        />
                        <input
                          type="email"
                          placeholder="E-mail"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F53B49] focus:border-transparent bg-white"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-1/2 bg-[#F53B49] text-white px-8 py-3 rounded-lg hover:bg-[#e63946] transition-colors font-medium"
                      >
                        Заказать звонок
                      </button>
                    </form>
                  </div>
                </div>
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