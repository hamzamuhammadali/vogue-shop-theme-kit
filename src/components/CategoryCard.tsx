
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  id: number;
  name: string;
  image: string;
  productCount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  image,
  productCount,
}) => {
  return (
    <Link 
      to={`/shop?category=${name.toLowerCase()}`} 
      className="block group relative overflow-hidden"
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h3 className="text-2xl md:text-3xl font-medium mb-2">{name}</h3>
        <p className="text-sm uppercase tracking-wider">{productCount} Products</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
