
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
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
      image: "/lovable-uploads/6717b602-6adb-4b02-818d-90623f40d264.png"
    },
    {
      id: 2,
      image: "/lovable-uploads/7da5f939-e8eb-494e-b0ba-46036e537da1.png"
    },
    {
      id: 3,
      image: "/lovable-uploads/a1331dd7-212c-4d15-a930-7bd880228278.png"
    },
    {
      id: 4,
      image: "/lovable-uploads/e604f20a-8484-4c5c-9ac2-1d7e772e921b.png"
    },
    {
      id: 5,
      image: "/lovable-uploads/36fbe1e1-9337-40a5-86d1-920e48f744df.png"
    },
    {
      id: 6,
      image: "/lovable-uploads/854faa18-ebd7-4c90-84dc-c2b3e6e5a346.png"
    },
    {
      id: 7,
      image: "/lovable-uploads/20f69011-5716-4d55-a663-c1b0ddfbb074.png"
    },
    {
      id: 8,
      image: "/lovable-uploads/6717b602-6adb-4b02-818d-90623f40d264.png"
    },
    {
      id: 9,
      image: "/lovable-uploads/7da5f939-e8eb-494e-b0ba-46036e537da1.png"
    },
    {
      id: 10,
      image: "/lovable-uploads/a1331dd7-212c-4d15-a930-7bd880228278.png"
    }
  ];

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
          {/* First row - 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
            <div className="md:col-span-2">
              <img 
                src={ideas[0].image} 
                alt="Идея"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <img 
                src={ideas[1].image} 
                alt="Идея"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <img 
                src={ideas[2].image} 
                alt="Идея"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          {/* Second row - 4 images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {ideas.slice(3, 7).map((idea) => (
              <img 
                key={idea.id}
                src={idea.image} 
                alt="Идея"
                className="w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>
          
          {/* Third row - 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-2">
              <img 
                src={ideas[7].image} 
                alt="Идея"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <img 
                src={ideas[8].image} 
                alt="Идея"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <img 
                src={ideas[9].image} 
                alt="Идея"
                className="w-full h-full object-cover rounded-lg"
              />
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
