'use client';

import { useEffect, useRef } from 'react';
import { Star, Eye, ShoppingCart, Zap, Shield, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const products = [
    {
      id: 1,
      name: "Quantum Diamond Wire",
      price: "$599.99",
      originalPrice: "$799.99",
      rating: 4.9,
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["0.1mm precision", "Nano-coating", "Self-sharpening"],
      badge: "BESTSELLER",
      glowColor: "cyan"
    },
    {
      id: 2,
      name: "Neural Ultrasonic Cutter",
      price: "$899.99",
      originalPrice: "$1199.99",
      rating: 4.8,
      image: "https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["AI-controlled", "Zero heat", "Quantum precision"],
      badge: "NEW",
      glowColor: "purple"
    },
    {
      id: 3,
      name: "Holographic Laser Engraver",
      price: "$1299.99",
      originalPrice: "$1599.99",
      rating: 5.0,
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["3D holographic", "Multi-spectrum", "Cloud-connected"],
      badge: "PREMIUM",
      glowColor: "yellow"
    },
    {
      id: 4,
      name: "Molecular File Matrix",
      price: "$299.99",
      originalPrice: "$399.99",
      rating: 4.7,
      image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["24-piece set", "Adaptive grip", "Smart feedback"],
      badge: "VALUE",
      glowColor: "green"
    }
  ];

  useEffect(() => {
    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 100, opacity: 0, rotateX: 45 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'BESTSELLER': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'NEW': return 'bg-gradient-to-r from-green-400 to-emerald-500';
      case 'PREMIUM': return 'bg-gradient-to-r from-purple-400 to-pink-500';
      case 'VALUE': return 'bg-gradient-to-r from-blue-400 to-cyan-500';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500';
    }
  };

  const getGlowClass = (color) => {
    switch (color) {
      case 'cyan': return 'hover:shadow-cyan-500/50';
      case 'purple': return 'hover:shadow-purple-500/50';
      case 'yellow': return 'hover:shadow-yellow-500/50';
      case 'green': return 'hover:shadow-green-500/50';
      default: return 'hover:shadow-cyan-500/50';
    }
  };

  return (
    <section ref={sectionRef} id="products" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 glass-morphism rounded-full">
            <Zap className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-semibold">Quantum Arsenal</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Next-Gen</span> Precision Tools
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover our revolutionary collection of quantum-enhanced tools that push the boundaries 
            of precision engineering and redefine what's possible in jewelry crafting.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              ref={el => cardsRef.current[index] = el}
              className={`group relative glass-morphism rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 ${getGlowClass(product.glowColor)} hover:shadow-2xl`}
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(product.badge)}`}>
                {product.badge}
              </div>

              {/* Image container */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick view button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-2 glass-morphism rounded-full hover:bg-white/20 transition-colors">
                    <Eye size={20} className="text-white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">({product.rating})</span>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 pulse-glow"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Price and action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold gradient-text">{product.price}</div>
                    <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                  </div>
                  
                  <button className="cyber-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                    <ShoppingCart size={16} />
                    <span>Add</span>
                  </button>
                </div>
              </div>

              {/* Holographic border effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 bg-clip-border animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <button className="cyber-button bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
            <span className="flex items-center space-x-2">
              <Award size={24} />
              <span>View Complete Arsenal</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
