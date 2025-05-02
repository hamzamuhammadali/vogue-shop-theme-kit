
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ShoppingBag, User, Search } from 'lucide-react';
import { storeInfo } from '@/lib/data';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading text-2xl font-bold tracking-tighter">
          {storeInfo.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="font-medium text-sm uppercase tracking-wider hover:text-gray-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/shop" 
                className="font-medium text-sm uppercase tracking-wider hover:text-gray-500"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="font-medium text-sm uppercase tracking-wider hover:text-gray-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="font-medium text-sm uppercase tracking-wider hover:text-gray-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <button className="hover:text-gray-500" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <Link to="/account" className="hover:text-gray-500" aria-label="Account">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/cart" className="relative hover:text-gray-500" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white text-xs">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="block lg:hidden hover:text-gray-500"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-40 animate-fade-in lg:hidden">
          <div className="container mx-auto py-8">
            <nav className="flex flex-col space-y-6">
              <Link 
                to="/" 
                className="font-medium text-lg uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="font-medium text-lg uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-lg uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-lg uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
