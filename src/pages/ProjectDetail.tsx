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
    title: 'Атлетика+ (г. Новомосковск)',
    description: 'С инвесторами мы оснастили зал топовым оборудованием под дизайн — он стал лучшим в регионе.',
    image: '/lovable-uploads/fdec1cea-908d-43a3-9d77-4f14304597f3.png'
  },
  'fitness-terra-moscow': {
    title: 'Фитнес Терра (г. Москва)',
    description: 'Клуб класса "бизнес" на площади старой советской застройки',
    image: '/lovable-uploads/097c8707-039f-42f4-b176-b9b084a1cda9.png'
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
                    Наша компания рада сотрудничеству с Министерством Спорта Мурманской области, благодаря которому 2022 году нам удалось оснастить несколько объектов проекта "Сопки.Sport". Это уникальный социальный проект целью которого является доступные занятия по общей физической подготовке население в особенности молодежи и пенсионеров которым эти услуги предоставляются бесплатно. Я лично и вся наша команда очень гордимся работой как с каждым проектом в отдельности так и с Министерством спорта комплексе. Наше оборудование надежно и безопасно для использования, но также важно, что оно корректно с точки зрения анатомии человека, что позволит "привить" правильное движение молодым людям и не нанесет травм при его использовании. Очень надеемся на то, что спорт и здоровый образ жизни в нашей стране благодаря этому проекту продвинется на ещё одну ступень доступности и массовости.
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
                          После тщательного отбора клиентом наша команда была приглашена к оснащению расширенного тренажёрного зала фитнес-клуба "Нептун" в городе Балашиха. Мы с готовностью подключились к проекту, так как фитнес-клуб является одним из самых крупных и успешных не только в городе, но и ближайшем Подмосковье.
                        </p>
                        <p className="leading-relaxed text-base">
                          Для проекта были предложены лучшие модели бренда Smith, а также ВИИТ-тренажёры Octane, которые гармонично заняли место рядом с существующим оборудованием класса Премиум, что позволило не потерять заявленный уровень клуба в целом для его клиентов.
                        </p>
                        <p className="leading-relaxed text-base">
                          Вместе с клиентом мы сделали наиболее удачную логистику зала с максимально полным набором отличных тренажеров и аксессуаров.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="leading-relaxed text-base">
                          Наша компания с готовностью поучаствовала в оснащении одного из самых современных фитнес-клубов Москвы.
                        </p>
                        <p className="leading-relaxed text-base">
                          Нами были предложены несколько элитных единиц оборудования gym80 что помогло создать зону особого притяжения для всего проекта.
                        </p>
                        <p className="leading-relaxed text-base">
                          Непростой оказалось задача по установке оборудования из-за очень узких проходов в здание для данной категории тренажёров, но она была решена с успехом.
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Right side - YouTube Video */}
                {(projectSlug === 'rockout-moscow' || projectSlug === 'neptun-balashikha') && (
                  <div className="relative mt-[50px]">
                    <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                        src={projectSlug === 'neptun-balashikha' 
                          ? "https://www.youtube.com/embed/XfkjOZABKNo" 
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
              images={[
                "/lovable-uploads/792458ce-b767-4c2f-89fb-a77213d0a4ae.png",
                "/lovable-uploads/1f982af1-e00e-4077-8353-1c49c089464d.png",
                "/lovable-uploads/449fef59-e36f-424a-b4e6-77c63614534a.png",
                "/lovable-uploads/38962789-4843-46b0-ae70-c2ae3cc60718.png",
                "/lovable-uploads/e9dd747f-100c-4fd7-bfce-38932ff39d67.png",
                "/lovable-uploads/d8691974-95b0-4158-adb8-47870179fdbe.png",
                "/lovable-uploads/d33c142e-9e3c-4a68-a0dc-012f63efdb69.png",
                "/lovable-uploads/1a054aa0-983b-478e-a27e-30653e6d7f33.png",
                "/lovable-uploads/097ae6e9-a092-4e42-a633-c6c429f6aabd.png",
                "/lovable-uploads/adf07d5b-9fd5-4f50-9e3a-32af3513c4fe.png",
                "/lovable-uploads/2b2346a0-5ab8-4c5c-84c6-9dbd4a20eecd.png",
                "/lovable-uploads/8da729a7-f226-4d9a-84a7-af58b85c01e1.png",
                "/lovable-uploads/77e8b724-401e-4b8b-92ad-a8dee9c705c7.png",
                "/lovable-uploads/11ea098a-4542-446f-96c1-eeacbfbab2f0.png",
                "/lovable-uploads/bbe4037f-af85-4cf5-891f-bb335b6b62e0.png",
                "/lovable-uploads/4f9a1e37-90c5-4cf6-a967-9abc44be6307.png"
              ]}
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