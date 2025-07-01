
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { ArrowRight } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from 'react-router-dom';

const Ideas: React.FC = () => {
  const ideas = [
    {
      id: 1,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/6717b602-6adb-4b02-818d-90623f40d264.png"
    },
    {
      id: 2,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/7da5f939-e8eb-494e-b0ba-46036e537da1.png"
    },
    {
      id: 3,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону", 
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/a1331dd7-212c-4d15-a930-7bd880228278.png"
    },
    {
      id: 4,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "Перейти",
      image: "/lovable-uploads/e604f20a-8484-4c5c-9ac2-1d7e772e921b.png",
      isSpecial: true
    },
    {
      id: 5,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/36fbe1e1-9337-40a5-86d1-920e48f744df.png"
    },
    {
      id: 6,
      title: "Беговая дорожка Nautilus T628", 
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/854faa18-ebd7-4c90-84dc-c2b3e6e5a346.png"
    },
    {
      id: 7,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/20f69011-5716-4d55-a663-c1b0ddfbb074.png"
    },
    {
      id: 8,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/6717b602-6adb-4b02-818d-90623f40d264.png"
    },
    {
      id: 9,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону", 
      buttonText: "для подготовки к марафону",
      image: "/lovable-uploads/7da5f939-e8eb-494e-b0ba-46036e537da1.png"
    },
    {
      id: 10,
      title: "Беговая дорожка Nautilus T628",
      subtitle: "для подготовки к марафону",
      buttonText: "Перейти",
      image: "/lovable-uploads/a1331dd7-212c-4d15-a930-7bd880228278.png",
      isSpecial: true
    }
  ];

  const renderCard = (idea: typeof ideas[0]) => (
    <div
      key={idea.id}
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-shadow"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={idea.image} 
          alt={idea.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-lg mb-1">{idea.title}</h3>
          <p className="text-white/90 text-sm mb-3">{idea.subtitle}</p>
          
          {idea.isSpecial ? (
            <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 w-fit">
              {idea.buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button className="bg-[#F53B49] text-white px-4 py-2 rounded font-semibold hover:bg-[#e63946] transition-colors w-fit">
              {idea.buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
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
              <BreadcrumbPage>Идеи и подборки</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Идеи и подборки</h1>
        
        {/* Ideas Layout: правильное выравнивание 3-4-3 */}
        <div className="mb-12">
          {/* First row - 3 cards with special alignment */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
            <div className="md:col-span-2">
              {renderCard(ideas[0])}
            </div>
            <div className="md:col-span-2">
              {renderCard(ideas[1])}
            </div>
            <div className="md:col-span-2">
              {renderCard(ideas[2])}
            </div>
          </div>
          
          {/* Second row - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {ideas.slice(3, 7).map(renderCard)}
          </div>
          
          {/* Third row - 3 cards with same alignment as first row */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-2">
              {renderCard(ideas[7])}
            </div>
            <div className="md:col-span-2">
              {renderCard(ideas[8])}
            </div>
            <div className="md:col-span-2">
              {renderCard(ideas[9])}
            </div>
          </div>
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mb-8">
          <button className="px-6 py-3 border border-[#F53B49] text-[#F53B49] rounded-lg font-semibold hover:bg-[#F53B49] hover:text-white transition-colors font-benzin font-normal">
            Показать еще
          </button>
        </div>

        {/* Pagination */}
        <Pagination className="mb-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

      <EmailSubscription />
      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default Ideas;
