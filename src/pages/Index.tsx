
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { products, categories, reviews } from '@/lib/data';
import { Star } from 'lucide-react';

const Index: React.FC = () => {
  // Filter featured products
  const featuredProducts = products.filter(product => product.isFeatured);
  const newArrivals = products.filter(product => product.isNew);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <Hero
        title="Elevate Your Style"
        subtitle="Discover our new collection of premium clothing designed for the modern individual."
        ctaText="Shop Now"
        ctaLink="/shop"
        backgroundImage="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Featured Categories */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-medium mb-10">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
                productCount={category.productCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-medium mb-2">Featured Products</h2>
          <p className="text-center text-gray-600 mb-10">Discover our carefully selected pieces</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                salePrice={product.salePrice}
                image={product.image}
                hoverImage={product.hoverImage}
                isNew={product.isNew}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/shop" className="btn btn-outline py-3 px-8">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-medium mb-2">New Arrivals</h2>
          <p className="text-center text-gray-600 mb-10">The latest additions to our collection</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                salePrice={product.salePrice}
                image={product.image}
                hoverImage={product.hoverImage}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Premium Quality Materials</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our commitment to quality means we source only the finest materials and work with skilled artisans to create pieces that last.
              </p>
              <Link to="/about" className="btn bg-white text-gray-900 hover:bg-gray-200 py-3 px-8">
                Our Story
              </Link>
            </div>
            <div className="aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" 
                alt="Artisan crafting clothing" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-medium mb-2">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-10">Testimonials from our valued customers</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {review.avatar ? (
                      <img src={review.avatar} alt={review.customerName} className="h-10 w-10 rounded-full" />
                    ) : (
                      <span className="text-lg font-medium text-gray-700">{review.customerName[0]}</span>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{review.customerName}</p>
                    <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="container-md text-center">
          <h2 className="text-3xl font-medium mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive updates on new arrivals, special offers and exclusive events.
          </p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button 
              type="submit" 
              className="btn btn-primary py-3 px-8"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
