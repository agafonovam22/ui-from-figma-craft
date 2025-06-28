
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const UslugiServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState('3d-project');

  const tabs = [
    { id: '3d-project', label: '3D-проект', active: true },
    { id: 'business-planning', label: 'Бизнес планирование', active: false },
    { id: 'staff-training', label: 'Обучение персонала', active: false },
    { id: 'leasing', label: 'Лизинг', active: false },
    { id: 'trade-in', label: 'Trade-In', active: false },
    { id: 'installment', label: 'В рассрочку', active: false }
  ];

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

  const renderProjectCard = (project: typeof projects[0]) => (
    <div
      key={project.id}
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
          <p className="text-white/90 text-sm mb-3">{project.subtitle}</p>
          
          {project.isSpecial ? (
            <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 w-fit">
              {project.buttonText}
            </button>
          ) : (
            <button className="bg-[#F53B49] text-white px-4 py-2 rounded font-semibold hover:bg-[#e63946] transition-colors w-fit">
              {project.buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-12">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Услуги</h1>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg p-8 mb-12 text-white relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-5xl font-bold mb-4 leading-tight">
                  Разрабатаем<br />
                  3D-проект<br />
                  бесплатно!
                </h2>
                <Button className="bg-[#F53B49] hover:bg-[#e63946] text-white px-8 py-3 text-lg font-semibold rounded-lg">
                  Оставить заявку
                </Button>
              </div>
              <div className="flex-1 flex justify-end">
                <img 
                  src="/lovable-uploads/1750c483-ca71-4fb0-85b9-fd2efc819a71.png"
                  alt="3D проект спортзала"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#F53B49] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 3D Project Tab Content */}
          {activeTab === '3d-project' && (
            <div className="space-y-12">
              {/* Benefits Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Что вы получите от <span className="text-[#F53B49]">3D-проекта</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.map((benefit) => (
                    <div key={benefit.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Projects Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Наши проекты</h2>
                
                {/* Projects Layout: 3-2-3-2 */}
                <div className="mb-8">
                  {/* First row - 3 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {projects.slice(0, 3).map(renderProjectCard)}
                  </div>
                  
                  {/* Second row - 2 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {projects.slice(3, 5).map(renderProjectCard)}
                  </div>
                  
                  {/* Third row - 3 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {projects.slice(5, 8).map(renderProjectCard)}
                  </div>
                  
                  {/* Fourth row - 2 cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.slice(8, 10).map(renderProjectCard)}
                  </div>
                </div>

                {/* Show More Button */}
                <div className="flex justify-center">
                  <button className="px-6 py-3 border border-[#F53B49] text-[#F53B49] rounded-lg font-semibold hover:bg-[#F53B49] hover:text-white transition-colors">
                    Показать еще
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs content placeholders */}
          {activeTab !== '3d-project' && (
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
