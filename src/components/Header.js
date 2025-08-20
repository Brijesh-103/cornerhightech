'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Zap } from 'lucide-react';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate header on load
    gsap.fromTo('.header-content', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    // Animate logo
    gsap.fromTo('.logo-icon',
      { rotate: 0 },
      { rotate: 360, duration: 2, ease: 'power2.inOut', repeat: -1, repeatDelay: 3 }
    );
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-morphism shadow-2xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="header-content flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="logo-icon p-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
              <Zap className="text-white" size={24} />
            </div>
            <div className="text-2xl font-bold gradient-text">
              PrecisionCut Pro
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Products', 'About', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors">
              <Phone size={16} className="pulse-glow" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={16} className="pulse-glow" />
              <span>info@precisioncut.com</span>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass-morphism hover:bg-cyan-500/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-cyan-400" /> : <Menu size={24} className="text-cyan-400" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-cyan-500/20 glass-morphism">
            <div className="flex flex-col space-y-4">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors py-2 px-4 rounded-lg hover:bg-cyan-500/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;