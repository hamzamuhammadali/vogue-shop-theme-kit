
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';
import { Check, ChevronDown, SlidersHorizontal } from 'lucide-react';

const Shop: React.FC = () => {
  // Parse query params
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category')?.toLowerCase();
  
  // State
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam || null);
  const [activePriceRange, setActivePriceRange] = useState<string | null>(null);
  const [activeSort, setActiveSort] = useState<string>('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Filter categories
  const categories = ['All', 'Women\'s Clothing', 'Men\'s Clothing', 'Accessories', 'Footwear'];
  const priceRanges = ['Under $50', '$50 - $100', '$100 - $200', 'Over $200'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];
  
  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory && activeCategory !== 'all') {
      result = result.filter(product => 
        product.category.toLowerCase().includes(activeCategory.toLowerCase()));
    }
    
    // Filter by price
    if (activePriceRange) {
      switch(activePriceRange) {
        case 'Under $50':
          result = result.filter(product => (product.salePrice || product.price) < 50);
          break;
        case '$50 - $100':
          result = result.filter(product => {
            const price = product.salePrice || product.price;
            return price >= 50 && price <= 100;
          });
          break;
        case '$100 - $200':
          result = result.filter(product => {
            const price = product.salePrice || product.price;
            return price > 100 && price <= 200;
          });
          break;
        case 'Over $200':
          result = result.filter(product => (product.salePrice || product.price) > 200);
          break;
        default:
          break;
      }
    }
    
    // Apply sorting
    switch(activeSort) {
      case 'newest':
        result = result.filter(product => product.isNew).concat(
          result.filter(product => !product.isNew)
        );
        break;
      case 'price-low':
        result = result.sort((a, b) => {
          const priceA = a.salePrice || a.price;
          const priceB = b.salePrice || b.price;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        result = result.sort((a, b) => {
          const priceA = a.salePrice || a.price;
          const priceB = b.salePrice || b.price;
          return priceB - priceA;
        });
        break;
      case 'featured':
      default:
        result = result.filter(product => product.isFeatured).concat(
          result.filter(product => !product.isFeatured)
        );
        break;
    }
    
    setFilteredProducts(result);
  }, [activeCategory, activePriceRange, activeSort]);
  
  const handleCategoryChange = (category: string) => {
    const normalizedCategory = category.toLowerCase();
    setActiveCategory(normalizedCategory === 'all' ? null : normalizedCategory);
  };
  
  const handlePriceRangeChange = (range: string) => {
    setActivePriceRange(range === activePriceRange ? null : range);
  };
  
  const handleSortChange = (sort: string) => {
    setActiveSort(sort);
  };
  
  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };
  
  return (
    <>
      <Navbar />
      
      <main>
        {/* Page Header */}
        <section className="bg-gray-100 py-16 mt-20">
          <div className="container mx-auto">
            <h1 className="text-4xl font-medium text-center">Shop</h1>
          </div>
        </section>
        
        {/* Shop Content */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              {/* Filter Toggle Button (Mobile) */}
              <div className="md:hidden mb-4">
                <button 
                  onClick={toggleMobileFilters} 
                  className="w-full py-3 px-4 border border-gray-300 rounded-md flex items-center justify-between"
                >
                  <span className="flex items-center">
                    <SlidersHorizontal className="h-5 w-5 mr-2" />
                    Filter & Sort
                  </span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Filters Sidebar (Desktop always visible, Mobile conditional) */}
              <div className={`md:w-64 md:flex-shrink-0 md:block ${mobileFiltersOpen ? 'block' : 'hidden'}`}>
                <div className="pr-0 md:pr-8">
                  {/* Categories Filter */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => handleCategoryChange(category)}
                          className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                            (category.toLowerCase() === 'all' && !activeCategory) || 
                            (activeCategory && category.toLowerCase().includes(activeCategory))
                              ? 'bg-gray-100 font-medium'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Filter */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4">Price</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => handlePriceRangeChange(range)}
                          className={`w-full text-left py-2 px-3 rounded-md flex items-center justify-between transition-colors ${
                            activePriceRange === range
                              ? 'bg-gray-100 font-medium'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <span>{range}</span>
                          {activePriceRange === range && <Check className="h-4 w-4" />}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Sort (Mobile Only) */}
                  <div className="mb-8 md:hidden">
                    <h3 className="text-lg font-medium mb-4">Sort By</h3>
                    <div className="space-y-2">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleSortChange(option.value)}
                          className={`w-full text-left py-2 px-3 rounded-md transition-colors ${
                            activeSort === option.value
                              ? 'bg-gray-100 font-medium'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="flex-1">
                {/* Sort Dropdown (Desktop) */}
                <div className="hidden md:flex justify-between items-center mb-8">
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                  </p>
                  
                  <div className="relative">
                    <select
                      value={activeSort}
                      onChange={(e) => handleSortChange(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 py-2 px-4 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
                  </div>
                </div>
                
                {/* Products Grid */}
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
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
                ) : (
                  <div className="text-center py-12">
                    <p className="text-xl text-gray-600">No products found matching your criteria.</p>
                    <button 
                      onClick={() => {
                        setActiveCategory(null);
                        setActivePriceRange(null);
                        setActiveSort('featured');
                      }}
                      className="mt-4 btn btn-outline py-2 px-4"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Shop;
