import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ServiceTabs from '@/components/Services/ServiceTabs';
import ServiceBenefits from '@/components/Services/ServiceBenefits';
import ServiceProjects from '@/components/Services/ServiceProjects';
import InstallmentTable from '@/components/Services/InstallmentTable';

const UslugiServices: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // Define services by category
  const servicesByCategory = {
    business: [
      { id: '3d-project', label: '3D-проект' },
      { id: 'business-planning', label: 'Бизнес-планирование' },
      { id: 'staff-training', label: 'Обучение персонала' },
      { id: 'trade-in', label: 'Trade-In' },
      { id: 'leasing', label: 'Лизинг' }
    ],
    individuals: [
      { id: 'installment', label: 'В рассрочку' }
    ],
    service: [
      { id: 'maintenance', label: 'Техобслуживание' },
      { id: 'repair', label: 'Ремонт' },
      { id: 'warranty', label: 'Гарантийное обслуживание' }
    ]
  };

  const tabs = category && servicesByCategory[category as keyof typeof servicesByCategory] 
    ? servicesByCategory[category as keyof typeof servicesByCategory] 
    : servicesByCategory.business;

  // Set active tab based on specific category requirements
  const getInitialActiveTab = () => {
    if (category === 'individuals') {
      return 'installment'; // For individuals page - always start with installment
    } else if (category === 'business') {
      return '3d-project'; // For business page - always start with 3d-project
    } else if (category === 'service') {
      return 'maintenance'; // For service page - start with first tab
    }
    return '3d-project'; // Default fallback
  };

  const [activeTab, setActiveTab] = useState(getInitialActiveTab());

  // Update active tab when category changes
  useEffect(() => {
    setActiveTab(getInitialActiveTab());
  }, [category]);

  // Get category title
  const getCategoryTitle = () => {
    switch (category) {
      case 'business': return 'Услуги для бизнеса';
      case 'individuals': return 'Рассрочка';
      case 'service': return 'Сервис';
      default: return 'Услуги';
    }
  };

  const benefits = [
    {
      id: 1,
      title: '2 варианта цвета защитного мата',
      image: '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png'
    },
    {
      id: 2,
      title: 'Совершенное качество прыжка',
      image: '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png'
    },
    {
      id: 3,
      title: 'Безопасный защитный мат',
      image: '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png'
    },
    {
      id: 4,
      title: 'Качественная защитная сеть',
      image: '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png'
    }
  ];

  const projects = [
    {
      id: 1,
      image: "/lovable-uploads/fdec1cea-908d-43a3-9d77-4f14304597f3.png",
      title: "Атлетика+ (г.\u00A0Новомосковск)",
      subtitle: "С инвесторами мы оснастили зал топовым оборудованием под дизайн — он стал лучшим в регионе.",
      buttonText: "Перейти →",
      isSpecial: true
    },
    {
      id: 2,
      image: "/lovable-uploads/cc85982b-96f7-40ec-ad84-f52b8c506581.png",
      title: "Фитнес Терра (г.\u00A0Москва)",
      subtitle: "Клуб класса «бизнес» на площади старой советской застройки",
      buttonText: "Перейти →"
    },
    {
      id: 3,
      image: "/lovable-uploads/b1513bca-e46f-4642-85c8-279c68cbbff4.png",
      title: "RockOut (г.\u00A0Москва)",
      subtitle: "Прогрессивный фитнес-клуб с\u00A0рекуррентными платежами и\u00A0оборудованием класса «премиум».",
      buttonText: "Перейти →"
    },
    {
      id: 4,
      image: "/lovable-uploads/7532d8ab-c6f7-4106-8d4b-563a3df784aa.png",
      title: "Нептун (г.\u00A0Балашиха)",
      subtitle: "Обновленный тренажерный зал крупнейшего спортивного центра города Балашиха.",
      buttonText: "Перейти →"
    },
    {
      id: 5,
      image: "/lovable-uploads/d37774a2-1a10-4cf2-ab20-b3e19960d0ce.png",
      title: "СопкиSport (Мурманская область)",
      subtitle: "Региональная сеть тренажерных залов под патронажем Министерства спорта Мурманской области.",
      buttonText: "Перейти →"
    },
    {
      id: 6,
      image: "/lovable-uploads/a5af320b-9c2e-4f35-9708-452bd07d454f.png",
      title: "ЦентрК (г.\u00A0Владикавказ)",
      subtitle: "Один из крупнейших фитнес-центров города Владикавказ.",
      buttonText: "Перейти →"
    },
    {
      id: 7,
      image: "/lovable-uploads/c015139b-7198-4978-ae43-3c24b91892a0.png",
      title: "Pulse120 (г.\u00A0Анапа)",
      subtitle: "Отличный компактных фитнес-клуб в г.\u00A0Анапа. Один из самых современных в городе.",
      buttonText: "Перейти →"
    },
    {
      id: 8,
      image: "/lovable-uploads/3d769f2a-ddbb-4534-a9b9-9b2783c1bccf.png",
      title: "PlazaFitness (г.\u00A0Кострома)",
      subtitle: "Один из самых популярных фитнес-клубов г.\u00A0Кострома.",
      buttonText: "Перейти →"
    },
    {
      id: 9,
      image: "/lovable-uploads/c9c5dc62-b0da-4189-bdfe-bf254ecf15e8.png",
      title: "Открытие нового зала (Сочи Парк Отель)",
      subtitle: "С инвесторами мы поставили топовое оборудование в крупный сочинский курорт — зал стал лучшим в регионе.",
      buttonText: "Перейти →"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      title: "Lorem Ipsum",
      subtitle: "Представляем тренажеры Nautilus 626 серии",
      buttonText: "Перейти →"
    }
  ];

  const installmentPlans = [
    {
      id: 1,
      plan: '0-0-12',
      bank: 'Тинькофф',
      monthlyPayment: '5 000₽',
      overpayment: 'нет',
      term: '0 - 6',
      rate: 'Ставка от 21,5%',
      firstPayment: 'Первый взнос 0%',
      duration: 'Срок 12 месяцев'
    },
    {
      id: 2,
      plan: '0-0-6',
      bank: 'Тинькофф',
      monthlyPayment: '5 000₽',
      overpayment: 'нет',
      term: '0 - 6',
      rate: 'Ставка от 21,5%',
      firstPayment: 'Первый взнос 0%',
      duration: 'Срок 12 месяцев'
    },
    {
      id: 3,
      plan: '0-0-6',
      bank: 'Сбербанк',
      monthlyPayment: '5 000₽',
      overpayment: 'нет',
      term: '0 - 6',
      rate: 'Ставка от 21,5%',
      firstPayment: 'Первый взнос 0%',
      duration: 'Срок 12 месяцев'
    },
    {
      id: 4,
      plan: '0-0-6',
      bank: 'Сбербанк',
      monthlyPayment: '5 000₽',
      overpayment: 'нет',
      term: '0 - 6',
      rate: 'Ставка от 21,5%',
      firstPayment: 'Первый взнос 0%',
      duration: 'Срок 12 месяцев'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px] py-8">
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
                <BreadcrumbPage>{getCategoryTitle()}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-12">{getCategoryTitle()}</h1>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg p-8 mb-12 text-white relative overflow-hidden h-[378px]">
            <div className="flex items-center justify-between h-full">
              <div className="flex-1">
                <h2 className="text-5xl font-bold mb-4 leading-tight">
                  Разрабатаем<br />
                  3D-проект<br />
                  бесплатно!
                </h2>
                <Button className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 text-lg font-semibold rounded-lg">
                  Оставить заявку
                </Button>
              </div>
              <div className="flex-1 flex justify-end">
                <img 
                  src="/lovable-uploads/1750c483-ca71-4fb0-85b9-fd2efc819a71.png"
                  alt="3D-проект спортзала"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <ServiceTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          {/* 3D Project Tab Content */}
          {activeTab === '3d-project' && (
            <div className="space-y-12">
              <ServiceBenefits benefits={benefits} />
              <ServiceProjects projects={projects} />
            </div>
          )}

          {/* Installment Tab Content */}
          {activeTab === 'installment' && (
            <InstallmentTable plans={installmentPlans} />
          )}

          {/* Other tabs content placeholders */}
          {activeTab !== '3d-project' && activeTab !== 'installment' && (
            <div className="py-16 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h2>
              <p className="text-gray-600">Содержание этого раздела будет добавлено позже.</p>
            </div>
          )}
        </div>
      </main>

      <div className="h-[70px]"></div>
      <Footer />
    </div>
  );
};

export default UslugiServices;
