
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import { products } from '@/lib/data';
import { ShoppingBag } from 'lucide-react';

interface CartProduct {
  product: typeof products[0];
  quantity: number;
}

const Cart: React.FC = () => {
  // Mock cart items - in a real app, this would come from your cart state/storage
  const [cartItems, setCartItems] = useState<CartProduct[]>([
    { product: products[0], quantity: 1 },
    { product: products[2], quantity: 2 },
  ]);
  
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Remove item from cart
  const handleRemoveItem = (productId: number) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };
  
  // Update item quantity
  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCartItems(cartItems.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };
  
  // Apply promo code
  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toLowerCase() === 'save10') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => {
    const price = item.product.salePrice || item.product.price;
    return sum + (price * item.quantity);
  }, 0);
  
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = 12.99;
  const total = subtotal - discount + shipping;
  
  // Empty cart
  const isCartEmpty = cartItems.length === 0;
  
  return (
    <>
      <Navbar />
      
      <main className="mt-24">
        <div className="container mx-auto py-16">
          <h1 className="text-3xl font-medium mb-8">Shopping Cart</h1>
          
          {isCartEmpty ? (
            <div className="text-center py-16 border border-dashed rounded-lg">
              <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Link to="/shop" className="btn btn-primary py-3 px-8">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="hidden sm:flex border-b border-gray-200 pb-4 mb-6 text-sm font-medium text-gray-600">
                    <div className="flex-1">Product</div>
                    <div className="w-32 text-center">Quantity</div>
                    <div className="w-24 text-right">Subtotal</div>
                    <div className="w-10"></div>
                  </div>
                  
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.product.id}
                        product={item.product}
                        quantity={item.quantity}
                        onRemove={() => handleRemoveItem(item.product.id)}
                        onUpdateQuantity={(quantity) => handleUpdateQuantity(item.product.id, quantity)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-28">
                  <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                  
                  {/* Promo Code */}
                  <form onSubmit={handleApplyPromo} className="mb-6">
                    <label htmlFor="promo" className="block text-sm font-medium text-gray-700 mb-1">
                      Promo Code
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        id="promo"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                        placeholder="Enter code"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button
                        type="submit"
                        disabled={promoApplied || !promoCode}
                        className="bg-gray-900 text-white px-4 py-2 rounded-r-md disabled:bg-gray-400"
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="mt-2 text-sm text-green-600">Promo code applied!</p>
                    )}
                  </form>
                  
                  {/* Subtotals */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between text-lg font-medium">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Checkout Button */}
                  <div className="mt-6">
                    <button className="w-full btn btn-primary py-3 px-4">
                      Proceed to Checkout
                    </button>
                  </div>
                  
                  {/* Continue Shopping */}
                  <div className="mt-4 text-center">
                    <Link to="/shop" className="text-sm text-gray-600 hover:text-gray-900">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Cart;
