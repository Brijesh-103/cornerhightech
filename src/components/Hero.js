'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Award, Zap, Shield, Play } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Award, label: 'Premium Quality', color: 'text-amber-500' },
    { icon: Zap, label: 'Fast Delivery', color: 'text-blue-500' },
    { icon: Shield, label: '5-Year Warranty', color: 'text-green-500' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23374151'/%3E%3C/svg%3E')] opacity-30"/>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-blue-200 font-medium text-sm">Professional Grade Tools</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Precision
                <span className="block text-gradient-primary">
                  Crafted Excellence
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Professional-grade cutting tools engineered for precision, durability, and exceptional performance. 
                Trusted by craftsmen worldwide for over 25 years.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span>Explore Products</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center space-x-2">
                <Play size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((item, index) => (
                <div key={index} className="group text-center">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <item.icon className={`mx-auto mb-2 ${item.color} group-hover:scale-110 transition-transform duration-300`} size={32} />
                    <div className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-sm text-slate-400">Trusted by 2,500+ professionals</div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white/20"></div>
                ))}
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-xs text-white font-medium">+</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Main container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 hover:bg-white/15">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Precision cutting tools showcase"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <Play size={32} className="text-white ml-1" />
                    </button>
                  </div>
                </div>
                
                {/* Floating stats */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-2xl border hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-gradient-primary">99.9%</div>
                  <div className="text-sm text-slate-600">Precision Rate</div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-4 shadow-2xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm opacity-90">Years Excellence</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 left-8 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-8 right-8 w-6 h-6 bg-purple-400 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;