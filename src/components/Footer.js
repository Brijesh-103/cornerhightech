'use client';

import { useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Linkedin as LinkedIn, Mail, Phone, Zap, Brain, Shield, Award } from 'lucide-react';
import { gsap } from 'gsap';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Animate footer elements
    gsap.fromTo('.footer-section',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating animation for social icons
    gsap.to('.social-icon', {
      y: -3,
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.2
    });
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-gray-900/50 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="footer-section space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold gradient-text">PrecisionCut Pro</h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Pioneering the future of precision crafting with quantum-enhanced tools that transcend 
              traditional limitations and unlock infinite creative possibilities.
            </p>
            
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: 'hover:text-blue-400' },
                { icon: Twitter, color: 'hover:text-cyan-400' },
                { icon: Instagram, color: 'hover:text-pink-400' },
                { icon: LinkedIn, color: 'hover:text-blue-500' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`social-icon p-3 glass-morphism rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quantum Products */}
          <div className="footer-section">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <Brain className="text-purple-400" size={20} />
              <span>Quantum Arsenal</span>
            </h4>
            <ul className="space-y-3">
              {[
                'Neural Cutting Tools',
                'Holographic Engravers',
                'Quantum Polishers',
                'AI Measuring Systems',
                'Molecular File Sets',
                'Plasma Welders'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quantum Support */}
          <div className="footer-section">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <Shield className="text-green-400" size={20} />
              <span>Quantum Support</span>
            </h4>
            <ul className="space-y-3">
              {[
                'Holographic Guides',
                'Neural Tutorials',
                'Quantum Diagnostics',
                'Infinity Warranty',
                'Dimensional Returns',
                'Time-Travel Support'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quantum Contact */}
          <div className="footer-section">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
              <Award className="text-yellow-400" size={20} />
              <span>Quantum Contact</span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} className="text-cyan-400" />
                <span>+1 (555) QUANTUM</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} className="text-purple-400" />
                <span>quantum@precisioncut.com</span>
              </div>
              <div className="text-sm text-gray-500 space-y-1">
                <p>🌌 Quantum Laboratory</p>
                <p>1234 Quantum Blvd</p>
                <p>Neo Francisco, Sector 7</p>
              </div>
              
              {/* Quantum Status */}
              <div className="glass-morphism rounded-lg p-3 border border-cyan-500/20">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-green-400">Quantum Systems Online</span>
                </div>
                <p className="text-xs text-gray-500">All dimensions operational</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="footer-section border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-500 text-sm">
                © 2025 PrecisionCut Pro. All rights reserved across all dimensions.
              </p>
              <div className="hidden md:flex items-center space-x-2 px-3 py-1 glass-morphism rounded-full">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <span className="text-xs text-cyan-400">Quantum Certified</span>
              </div>
            </div>
            
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Quantum Terms', 'Cookie Matrix'].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-500 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quantum signature */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-600">
              ⚡ Powered by Quantum Computing • 🧠 Enhanced by Neural Networks • 🛡️ Protected by Quantum Encryption
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;