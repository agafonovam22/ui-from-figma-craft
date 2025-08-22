import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/hooks/useProducts';

const ProductCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'home' | 'fitness'>('home');
  
  // Получаем все товары из API
  const { data: allProducts = [], isLoading } = useProducts();

  // Функция для поиска товара по ключевым словам
  const findProductByKeywords = (keywords: string[]) => {
    return allProducts.find(product => 
      keywords.some(keyword => 
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  // Получаем реальные товары для каждой категории
  const getCategoryProducts = useMemo(() => {
    if (!allProducts.length) return { home: [], fitness: [] };

    const categories = [
      {
        id: 'treadmill',
        keywords: ['беговая дорожка', 'беговой дорожке', 'treadmill'],
        price: 'от 33 900 ₽',
        linkTo: '/catalog?q=беговая дорожка'
      },
      {
        id: 'bike',
        keywords: ['велотренажер', 'велоэргометр', 'bike'],
        price: 'от 35 900 ₽',
        linkTo: '/catalog?q=велотренажер'
      },
      {
        id: 'rowing',
        keywords: ['гребной', 'гребля', 'rowing'],
        price: 'от 49 900 ₽',
        linkTo: '/catalog?q=гребной'
      },
      {
        id: 'strength',
        keywords: ['силовая станция', 'силовой', 'мультистанция'],
        price: 'от 9 900 ₽',
        linkTo: '/catalog?q=силовая станция'
      },
      {
        id: 'inversion',
        keywords: ['инверсионный', 'инверсионная'],
        price: 'от 12 900 ₽',
        linkTo: '/catalog?q=инверсионный'
      },
      {
        id: 'accessories',
        keywords: ['коврик', 'гантели', 'утяжелители', 'эспандер'],
        price: '220 ₽',
        linkTo: '/catalog?q=аксессуары'
      },
      {
        id: 'elliptical',
        keywords: ['эллиптический', 'орбитрек'],
        price: 'от 45 900 ₽',
        linkTo: '/catalog?q=эллиптический'
      },
      {
        id: 'balance',
        keywords: ['балансировочная', 'баланс'],
        price: 'от 3 500 ₽',
        linkTo: '/catalog?q=балансировочная'
      }
    ];

    const homeProducts = categories.map((category, index) => {
      const product = findProductByKeywords(category.keywords);
      return {
        id: index + 1,
        image: product?.image_url || '/placeholder.svg',
        name: product?.name || category.id,
        category: category.id,
        price: category.price,
        linkTo: category.linkTo,
        isAvailable: true,
        inStock: true
      };
    }).slice(0, 10);

    // Добавляем карточку "Перейти в каталог"
    homeProducts.push({
      id: 11,
      image: '/lovable-uploads/2384c4ae-190f-4278-aaf8-daaa6e67e846.png',
      name: 'Перейти в каталог',
      category: 'home',
      price: '',
      linkTo: '/catalog',
      isAvailable: true,
      inStock: true
    });

    // Для фитнес-клубов используем те же товары с другими ссылками
    const fitnessProducts = categories.map((category, index) => {
      const product = findProductByKeywords(category.keywords);
      return {
        id: index + 13,
        image: product?.image_url || '/placeholder.svg',
        name: product?.name || category.id,
        category: category.id,
        price: category.price,
        linkTo: category.linkTo,
        isAvailable: true,
        inStock: true
      };
    }).slice(0, 10);

    fitnessProducts.push({
      id: 23,
      image: '/lovable-uploads/2384c4ae-190f-4278-aaf8-daaa6e67e846.png',
      name: 'Перейти в каталог',
      category: 'fitness',
      price: '',
      linkTo: '/catalog',
      isAvailable: true,
      inStock: true
    });

    return { home: homeProducts, fitness: fitnessProducts };
  }, [allProducts]);

  const currentProducts = activeFilter === 'home' ? getCategoryProducts.home : getCategoryProducts.fitness;

  if (isLoading) {
    return (
      <section className="w-full py-6 bg-white">
        <div className="max-w-[1800px] mx-auto px-[30px]">
          <div className="text-center">Загрузка каталога...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-[1800px] mx-auto px-[30px]">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-[#262631]">
            Каталог продукции
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveFilter('home')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === 'home'
                  ? 'bg-[#F53B49] text-white'
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Тренажеры для дома
            </button>
            <button
              onClick={() => setActiveFilter('fitness')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeFilter === 'fitness'
                  ? 'bg-[#F53B49] text-white'
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Фитнес-клуба
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[10px] mb-6">
          {currentProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} variant="grid" linkTo={product.linkTo} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[10px]">
          {currentProducts.slice(6, 10).map((product) => (
            <ProductCard key={product.id} product={product} variant="grid" linkTo={product.linkTo} />
          ))}
          <div className="relative bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer col-span-1 sm:col-span-2 lg:col-span-2 h-[300px]">
            <img 
              src="/lovable-uploads/09316891-e20e-4a75-a9df-6bc5afc0bf97.png" 
              alt="Перейти в каталог"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute top-4 left-4 text-white font-benzin text-lg font-normal">
              {activeFilter === 'home' ? 'Для дома' : 'Для фитнес-клуба'}
            </div>
            <Link 
              to={activeFilter === 'home' ? '/catalog?type=home' : '/catalog?type=fitness'}
              className="absolute bottom-4 left-4 bg-white text-[#262631] px-4 py-2 rounded-lg font-benzin text-sm font-normal hover:bg-[#262631] hover:text-white transition-colors flex items-center gap-2"
            >
              Перейти в каталог <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 flex justify-start">
          <Link 
            to={activeFilter === 'home' ? '/home-fitness-equipment' : '/gym-equipment'}
            className="border-2 border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors font-benzin font-normal"
          >
            Показать все
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
