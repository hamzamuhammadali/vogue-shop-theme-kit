
import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Product } from '@/lib/data';

interface CartItemProps {
  product: Product;
  quantity: number;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  product,
  quantity,
  onRemove,
  onUpdateQuantity,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setItemQuantity(newQuantity);
    onUpdateQuantity(newQuantity);
  };

  const price = product.salePrice || product.price;
  const subtotal = price * quantity;

  return (
    <div className="flex py-6 border-b border-gray-200">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="ml-4 flex-1 flex flex-col sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-base font-medium">{product.name}</h3>
          
          {product.colors && product.colors.length > 0 && (
            <p className="mt-1 text-sm text-gray-500">
              Color: <span className="text-gray-800">{product.colors[0]}</span>
            </p>
          )}
          
          {product.sizes && product.sizes.length > 0 && (
            <p className="mt-1 text-sm text-gray-500">
              Size: <span className="text-gray-800">{product.sizes[0]}</span>
            </p>
          )}
          
          <p className="mt-1 text-sm font-medium">
            ${price.toFixed(2)}
          </p>
        </div>

        <div className="mt-4 sm:mt-0 flex items-center">
          {/* Quantity Selector */}
          <select
            value={itemQuantity}
            onChange={handleQuantityChange}
            className="rounded border border-gray-300 py-0 pl-2 pr-7 text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          {/* Subtotal (for larger screens) */}
          <p className="hidden sm:block ml-8 text-base font-medium">
            ${subtotal.toFixed(2)}
          </p>

          {/* Remove Button */}
          <button
            onClick={onRemove}
            className="ml-4 text-gray-500 hover:text-gray-700"
            aria-label="Remove item"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>

        {/* Subtotal (for mobile) */}
        <p className="sm:hidden mt-2 text-base font-medium">
          Subtotal: ${subtotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
