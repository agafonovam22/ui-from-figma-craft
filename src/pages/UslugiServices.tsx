import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState(category === 'individuals' ? 'installment' : '3d-project');

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
      image: '/lovable-uploads/87731f72-8aa4-41ee-a778-da67d561de5a.png'
    },
    {
      id: 2,
      title: 'Совершенное качество прыжка',
      image: '/lovable-uploads/60472690-a8b6-4349-a407-001fce436443.png'
    },
    {
      id: 3,
      title: 'Безопасный защитный мат',
      image: '/lovable-uploads/adbe6bde-b066-4019-b2b1-85ea1103ee3a.png'
    },
    {
      id: 4,
      title: 'Качественная защитная сеть',
      image: '/lovable-uploads/94f85ba4-b118-4ce1-b7e5-12a4ce35107c.png'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      subtitle: 'представляем тренажеры Nautilus G2G серии',
      buttonText: 'Перейти →',
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png',
      isSpecial: true
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      subtitle: 'представляем тренажеры Nautilus G2G серии',
      buttonText: 'представляем тренажеры Nautilus G2G серии',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      subtitle: 'представляем тренажеры Nautilus G2G серии',
      buttonText: 'представляем тренажеры Nautilus G2G серии',
      image: '/lovable-uploads/f99f3115-1f00-49f0-af93-08b6318f8cf4.png'
    },
    {
      id: 4,
      title: 'Lorem Ipsum',
      subtitle: 'представляем тренажеры Nautilus G2G серии',
      buttonText: 'представляем тренажеры Nautilus G2G серии',
      image: '/lovable-uploads/31e0c62c-257c-4fe3-96b0-d53a4a23f8ca.png'
    },
    {
      id: 5,
      title: 'Lorem Ipsum',
      subtitle: 'представляем тренажеры Nautilus G2G серии',
      buttonText: 'представляем тренажеры Nautilus G2G серии',
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png'
    },
    {
      id: 6,
      title: 'Lorem Ipsum',
      subtitle: 'представляем тренажеры Nautilus G2G серии',
      buttonText: 'представляем тренажеры Nautilus G2G серии',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
    },
    {
      id: 7,
      title: 'Lorem Ipsum',
      subtitle: 'представляем тренажеры Nautilus G2G серии',
      buttonText: 'представляем тренажеры Nautilus G2G серии',
      image: '/lovable-uploads/f99f3115-1f00-49f0-af93-08b6318f8cf4.png'
    },
    {
      id: 8,
      title: 'Lorem Ipsum',
      subtitle: 'представляем тренажеры Nautilus G2G серии',
      buttonText: 'представляем тренажеры Nautilus G2G серии',
      image: '/lovable-uploads/31e0c62c-257c-4fe3-96b0-d53a4a23f8ca.png'
    },
    {
      id: 9,
      title: 'Lorem Ipsum',
      subtitle: 'представляем тренажеры Nautilus G2G серии',
      buttonText: 'представляем тренажеры Nautilus G2G серии',
      image: '/lovable-uploads/30734aa0-70ff-4b93-87d8-e2756bff0d80.png'
    },
    {
      id: 10,
      title: 'Lorem Ipsum',
      subtitle: 'представляем тренажеры Nautilus G2G серии',
      buttonText: 'представляем тренажеры Nautilus G2G серии',
      image: '/lovable-uploads/43eec803-7f4a-4f5b-8f0f-7bf6d47a66b3.png'
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
