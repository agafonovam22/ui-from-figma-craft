
import React from 'react';
import { Link } from 'react-router-dom';

interface NewProductsProps {
  title?: string;
}

const NewProducts: React.FC<NewProductsProps> = ({ title = "Новинки" }) => {
  const products = [
    {
      id: 1,
      image: '/lovable-uploads/17550498-ab60-43c0-9b84-f49dd8ddc1fc.png'
    },
    {
      id: 2,
      image: '/lovable-uploads/f86d41dd-f2f8-4cab-a66e-40c3a81d9cbf.png'
    },
    {
      id: 3,
      image: '/lovable-uploads/43ad4887-adce-485a-b310-3d8582e01128.png'
    },
    {
      id: 4,
      image: '/lovable-uploads/4daf7315-525c-4043-a1d0-72dcc05b49bf.png'
    },
    {
      id: 5,
      image: '/lovable-uploads/225fbdeb-52a8-41c5-8d82-91fda1b8d960.png'
    }
  ];

  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-[1800px] mx-auto px-2 sm:px-4 lg:px-[60px]">
        <h2 className="text-2xl font-bold text-[#262631] mb-8 font-benzin-semibold">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img 
                src={product.image} 
                alt="Товар"
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
        
        <div className="flex justify-start">
          <button className="border-2 border-[#F53B49] text-[#F53B49] px-8 py-3 rounded hover:bg-[#F53B49] hover:text-white transition-colors font-benzin">
            Показать все новинки
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
