
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  salePrice,
  image,
  hoverImage,
  isNew,
  className,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Add to cart:', id);
    // Implement add to cart logic here
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link
      to={`/product/${id}`}
      className={cn(
        'group block product-card',
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative overflow-hidden mb-4">
        {/* Product Image */}
        <div className="aspect-[3/4] w-full bg-gray-100 relative">
          <img
            src={isHovering && hoverImage ? hoverImage : image}
            alt={name}
            className="w-full h-full object-cover product-card-image"
          />
        </div>

        {/* New Badge */}
        {isNew && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs uppercase font-medium py-1 px-2">
            New
          </span>
        )}

        {/* Sale Badge */}
        {salePrice && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs uppercase font-medium py-1 px-2">
            Sale
          </span>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-3 px-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
          <button 
            onClick={handleAddToCart}
            className="flex items-center text-sm font-medium"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </button>
          <button 
            onClick={handleToggleFavorite}
            className="text-gray-700 hover:text-red-500"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={cn("h-4 w-4", isFavorite && "fill-red-500 text-red-500")} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="font-medium text-base">{name}</h3>
        <div className="mt-1 flex items-center">
          {salePrice ? (
            <>
              <span className="text-red-600 font-medium mr-2">${salePrice.toFixed(2)}</span>
              <span className="text-gray-500 line-through text-sm">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-medium">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
