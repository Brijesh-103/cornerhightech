'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-200">
              <Zap className="text-white" size={20} />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              PrecisionCraft Pro
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'products', 'features', 'testimonials', 'contact'].map((item) => (
              <button 
                key={item}
                onClick={() => smoothScrollTo(item)}
                className={`relative font-medium transition-all duration-300 capitalize hover:scale-105 ${
                  scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-200 hover:text-white'
                } ${activeSection === item ? (scrolled ? 'text-blue-600' : 'text-white') : ''}`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full transition-all duration-300"></span>
                )}
              </button>
            ))}
          </nav>
          
          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <a 
              href="tel:+15551234567"
              className={`flex items-center space-x-2 text-sm transition-colors duration-300 hover:scale-105 ${
                scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </a>
            <a 
              href="mailto:info@precisioncraft.com"
              className={`flex items-center space-x-2 text-sm transition-colors duration-300 hover:scale-105 ${
                scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-gray-300 hover:text-white'
              }`}
            >
              <Mail size={16} />
              <span className="hidden xl:inline">Contact</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              scrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}>
          <nav className="border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col space-y-2 p-4">
              {['home', 'products', 'features', 'testimonials', 'contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => smoothScrollTo(item)}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium capitalize py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:translate-x-2"
                >
                  {item}
                </button>
              ))}
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a 
                  href="tel:+15551234567"
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <Phone size={18} />
                  <span>+1 (555) 123-4567</span>
                </a>
                <a 
                  href="mailto:info@precisioncraft.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  <Mail size={18} />
                  <span>info@precisioncraft.com</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;