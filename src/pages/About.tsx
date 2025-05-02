
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { teamMembers } from '@/lib/data';

const About: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <Hero
        title="About Us"
        subtitle="Learn about our mission, values, and the team behind our brand."
        ctaText="Contact Us"
        ctaLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2070&auto=format&fit=crop"
      />

      {/* Our Story */}
      <section className="py-16">
        <div className="container-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2015, VOGUE began with a simple vision: to create premium quality clothing that combines timeless elegance with contemporary design, all while maintaining ethical production practices and sustainability.
              </p>
              <p className="text-gray-700 mb-6">
                What started as a small boutique in New York has grown into an international brand, but our core values remain the same. We believe in creating pieces that stand the test of time, both in durability and style.
              </p>
              <p className="text-gray-700">
                Each collection is thoughtfully designed with attention to detail, quality craftsmanship, and a commitment to responsible manufacturing. We work closely with skilled artisans and ethical factories to ensure that every garment meets our high standards.
              </p>
            </div>
            <div className="aspect-square md:aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1000&auto=format&fit=crop" 
                alt="Our workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-lg mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              To create premium quality clothing that empowers individuals to express their unique style, while maintaining a commitment to ethical production and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Quality Craftsmanship</h3>
              <p className="text-gray-700">
                We partner with skilled artisans who share our passion for quality and attention to detail, ensuring every piece meets our high standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Sustainability</h3>
              <p className="text-gray-700">
                We're committed to reducing our environmental footprint through responsible material sourcing, ethical manufacturing practices, and minimizing waste.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 118 0v7M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v12a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Timeless Style</h3>
              <p className="text-gray-700">
                We design pieces that transcend fleeting trends, focusing on timeless elegance that you'll love wearing season after season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container-lg mx-auto">
          <h2 className="text-3xl font-medium mb-2 text-center">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-12">The creative minds behind our brand</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="text-center">
                <div className="aspect-square mb-6 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gray-600 mt-1">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Banner */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Join Our Journey</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about fashion, sustainability, and creating exceptional experiences.
          </p>
          <a href="/careers" className="btn bg-white text-gray-900 hover:bg-gray-200 py-3 px-8">
            Careers
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
