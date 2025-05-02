
import React from 'react';
import { Link } from 'react-router-dom';
import { storeInfo } from '@/lib/data';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand and About */}
          <div>
            <Link to="/" className="font-heading text-2xl font-bold tracking-tighter">
              {storeInfo.name}
            </Link>
            <p className="mt-4 text-gray-600">
              Elevating everyday style with premium quality clothing that combines timeless elegance and contemporary design.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href={storeInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={storeInfo.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={storeInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=women" className="text-gray-600 hover:text-gray-900">Women's Clothing</Link>
              </li>
              <li>
                <Link to="/shop?category=men" className="text-gray-600 hover:text-gray-900">Men's Clothing</Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="text-gray-600 hover:text-gray-900">Accessories</Link>
              </li>
              <li>
                <Link to="/shop?category=footwear" className="text-gray-600 hover:text-gray-900">Footwear</Link>
              </li>
              <li>
                <Link to="/shop?category=new" className="text-gray-600 hover:text-gray-900">New Arrivals</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-gray-900">Careers</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-600 hover:text-gray-900">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600">{storeInfo.address}</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600">{storeInfo.phone}</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600">{storeInfo.email}</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600">{storeInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {storeInfo.name}. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <img 
                src="https://freesvg.org/img/payment-methods-grid.png" 
                alt="Payment methods" 
                className="h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
