
import React, { useState } from 'react';
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
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Trash2, ChevronRight, Check } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const Comparison: React.FC = () => {
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);

  // Mock data for comparison items
  const comparisonItems = [
    {
      id: 1,
      name: "Гребной тренажер CardioPower PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5000,
      discount: 15,
      rating: 4.5,
      reviewCount: 4,
      inStock: true,
      characteristics: {
        frame: "оцинкованная сталь",
        ladder: "есть",
        series: "Space",
        color: "красный/синий",
        protectiveMatWidth: "25",
        protectiveMatMaterial: "вспененный PP",
        trampolineDiameterFt: "8",
        trampolineDiameterCm: "244"
      },
      additionalCharacteristics: {
        frame: "оцинкованная сталь",
        ladder: "есть",
        series: "Space"
      }
    },
    {
      id: 2,
      name: "Гребной тренажер CardioPower PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5000,
      discount: 15,
      rating: 4.5,
      reviewCount: 4,
      inStock: true,
      characteristics: {
        frame: "оцинкованная сталь",
        ladder: "-",
        series: "Space",
        color: "красный/синий",
        protectiveMatWidth: "25",
        protectiveMatMaterial: "вспененный PP",
        trampolineDiameterFt: "8",
        trampolineDiameterCm: "244"
      },
      additionalCharacteristics: {
        frame: "оцинкованная сталь",
        ladder: "есть",
        series: "Space"
      }
    },
    {
      id: 3,
      name: "Гребной тренажер CardioPower PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5000,
      discount: 15,
      rating: 4.5,
      reviewCount: 4,
      inStock: true,
      characteristics: {
        frame: "оцинкованная сталь",
        ladder: "-",
        series: "Space",
        color: "красный/синий",
        protectiveMatWidth: "-",
        protectiveMatMaterial: "вспененный PP",
        trampolineDiameterFt: "8",
        trampolineDiameterCm: "244"
      },
      additionalCharacteristics: {
        frame: "оцинкованная сталь",
        ladder: "есть",
        series: "Space"
      }
    },
    {
      id: 4,
      name: "Гребной тренажер CardioPower PRO CR300",
      image: "/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png",
      price: 4610,
      originalPrice: 5000,
      discount: 15,
      rating: 4.5,
      reviewCount: 4,
      inStock: true,
      characteristics: {
        frame: "оцинкованная сталь",
        ladder: "-",
        series: "Space",
        color: "-",
        protectiveMatWidth: "25",
        protectiveMatMaterial: "вспененный PP",
        trampolineDiameterFt: "8",
        trampolineDiameterCm: "-"
      },
      additionalCharacteristics: {
        frame: "оцинкованная сталь",
        ladder: "есть",
        series: "Space"
      }
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(rating) ? "text-orange-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

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
              <BreadcrumbPage>Сравнение</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Сравнение</h1>

        {/* Filter Option */}
        <div className={`mb-8 p-4 rounded-lg transition-colors ${showOnlyDifferences ? 'bg-gray-100' : ''}`}>
          <label 
            className="flex items-center gap-3 text-gray-700 cursor-pointer"
            onClick={() => setShowOnlyDifferences(!showOnlyDifferences)}
          >
            <div className="relative w-4 h-4 border border-gray-300 rounded-[3px] bg-white flex items-center justify-center">
              {showOnlyDifferences && (
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-[2.06px]"></div>
              )}
            </div>
            Показывать только различия
          </label>
        </div>

        {/* Products Row with Vertical Dividers */}
        <div className="relative mb-8">
          <div className="grid grid-cols-4 gap-6">
            {comparisonItems.map((item, index) => (
              <div key={item.id} className="bg-gray-50 rounded-lg p-4 relative">
                <div className="absolute top-2 left-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                    НОВИНКА
                  </span>
                </div>
                <button className="absolute top-2 right-2 p-1 hover:bg-gray-200 rounded">
                  <Trash2 className="w-4 h-4 text-gray-400" />
                </button>
                
                <div className="mt-6 mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                
                <div className="text-center mb-2">
                  <div className="text-green-500 text-xs mb-1">В наличии ●●○</div>
                </div>
                
                <h3 className="text-sm font-medium text-gray-900 mb-2 text-center">
                  {item.name}
                </h3>
                
                <div className="flex justify-center items-center gap-1 mb-2">
                  {renderStars(item.rating)}
                  <span className="text-orange-400 text-sm ml-1">{item.rating}</span>
                </div>
                
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                      -{item.discount}%
                    </span>
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {item.price.toLocaleString()} ₽
                  </div>
                </div>
                
                <Button className="w-full bg-[#F53B49] hover:bg-[#e63946] text-white">
                  Купить
                </Button>
              </div>
            ))}
          </div>
          
          {/* Vertical Dividers */}
          <div className="absolute top-0 bottom-0 left-[calc(25%-12px)] w-px bg-gray-300"></div>
          <div className="absolute top-0 bottom-0 left-[calc(50%-12px)] w-px bg-gray-300"></div>
          <div className="absolute top-0 bottom-0 left-[calc(75%-12px)] w-px bg-gray-300"></div>
        </div>

        {/* Comparison Tables with Vertical Dividers */}
        <div className="relative space-y-8">
          {/* Vertical Dividers for Tables */}
          <div className="absolute top-0 bottom-0 left-[calc(25%-12px)] w-px bg-gray-300"></div>
          <div className="absolute top-0 bottom-0 left-[calc(50%-12px)] w-px bg-gray-300"></div>
          <div className="absolute top-0 bottom-0 left-[calc(75%-12px)] w-px bg-gray-300"></div>
          
          {/* Оценка и способ получения */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 w-1/4">Оценка и способ получения</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-48 text-left">Оценка покупателей</TableHead>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center">
                      <div className="flex justify-center items-center gap-1">
                        {renderStars(item.rating)}
                        <span className="text-orange-400 text-sm ml-1">{item.rating}/5</span>
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Способ получения</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      Доставка, самовывоз
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Оплата</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      Онлайн, рассрочка, карта
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Основные характеристики */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 w-1/4">Основные характеристики</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 w-48 text-left">Рама</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.characteristics.frame}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Лестница</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.characteristics.ladder}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Серия</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.characteristics.series}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Цвет</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.characteristics.color}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Ширина защитного мата, см</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.characteristics.protectiveMatWidth}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Материал защитного мата</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.characteristics.protectiveMatMaterial}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Диаметр батута, ft</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.characteristics.trampolineDiameterFt}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Диаметр батута, см</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.characteristics.trampolineDiameterCm}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Доп. характеристики */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 w-1/4">Доп. характеристики</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 w-48 text-left">Рама</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.additionalCharacteristics.frame}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Лестница</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.additionalCharacteristics.ladder}
                    </TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 text-left">Серия</TableCell>
                  {comparisonItems.map((item) => (
                    <TableCell key={item.id} className="text-center text-gray-600">
                      {item.additionalCharacteristics.series}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="py-16">
        <EmailSubscription />
      </div>

      <div className="h-[70px]"></div>
      <Footer />
    </main>
  );
};

export default Comparison;
