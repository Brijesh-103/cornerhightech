'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Award, Zap, Shield, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Hero entrance animation
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(imageRef.current,
      { scale: 0.8, opacity: 0, rotateY: 45 },
      { scale: 1, opacity: 1, rotateY: 0, duration: 1.5, ease: 'power3.out' },
      '-=1'
    );

    // Floating animation for image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 3,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });

    // Sparkle animation
    gsap.to('.sparkle', {
      rotation: 360,
      duration: 4,
      ease: 'none',
      repeat: -1
    });

  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="sparkle text-cyan-400" size={24} />
                <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Next-Gen Tools</span>
              </div>
              
              <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Quantum Precision</span>
                <br />
                <span className="glow-text">Cutting Tools</span>
              </h1>
              
              <p ref={subtitleRef} className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Revolutionary nano-engineered tools that redefine precision in jewelry crafting. 
                Experience the future of artisanal excellence with our quantum-enhanced cutting technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cyber-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-cyan-500/25">
                <span>Explore Arsenal</span>
                <ArrowRight size={20} />
              </button>
              <button className="cyber-button glass-morphism text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/20 transition-all duration-300 neon-border">
                Request Demo
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: Award, label: 'Quantum Grade', color: 'text-yellow-400' },
                { icon: Zap, label: 'Instant Precision', color: 'text-cyan-400' },
                { icon: Shield, label: 'Lifetime Warranty', color: 'text-purple-400' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <item.icon className={`mx-auto mb-2 ${item.color} group-hover:scale-110 transition-transform duration-300`} size={32} />
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10">
            <div 
              ref={imageRef}
              className="relative group"
            >
              {/* Holographic frame */}
              <div className="absolute -inset-4 holographic rounded-3xl blur-sm group-hover:blur-none transition-all duration-500"></div>
              
              {/* Main image container */}
              <div className="relative glass-morphism rounded-2xl p-6 hover:scale-105 transition-all duration-500">
                <img 
                  src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Quantum precision cutting tools"
                  className="rounded-xl shadow-2xl w-full"
                />
                
                {/* Floating stats */}
                <div className="absolute -bottom-6 -left-6 glass-morphism p-4 rounded-lg shadow-xl border border-cyan-500/30">
                  <div className="text-3xl font-bold gradient-text">99.9%</div>
                  <div className="text-sm text-gray-400">Precision Rate</div>
                </div>
                
                <div className="absolute -top-6 -right-6 glass-morphism p-4 rounded-lg shadow-xl border border-purple-500/30">
                  <div className="text-3xl font-bold gradient-text">25+</div>
                  <div className="text-sm text-gray-400">Years Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;