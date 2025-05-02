
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  overlay?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  overlay = true,
}) => {
  return (
    <div 
      className="relative h-screen max-h-[800px] min-h-[600px] w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      )}
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link 
          to={ctaLink} 
          className="btn btn-primary py-3 px-8 text-lg"
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
