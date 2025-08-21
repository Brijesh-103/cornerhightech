'use client';

import { useEffect, useRef } from 'react';
import { Cpu, Clock, Wrench, Users, Globe, Trophy, Zap, Shield, Brain } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  const features = [
    {
      icon: <Cpu className="text-cyan-400" size={40} />,
      title: "Quantum Engineering",
      description: "Molecular-level precision with quantum-enhanced manufacturing processes achieving tolerances of ±0.0001mm.",
      gradient: "from-cyan-500 to-blue-600",
      delay: 0
    },
    {
      icon: <Brain className="text-purple-400" size={40} />,
      title: "AI-Powered Optimization",
      description: "Neural networks continuously optimize cutting patterns and tool performance for maximum efficiency.",
      gradient: "from-purple-500 to-pink-600",
      delay: 0.1
    },
    {
      icon: <Shield className="text-green-400" size={40} />,
      title: "Self-Healing Materials",
      description: "Advanced nano-materials that repair micro-damage automatically, extending tool life indefinitely.",
      gradient: "from-green-500 to-emerald-600",
      delay: 0.2
    },
    {
      icon: <Zap className="text-yellow-400" size={40} />,
      title: "Instant Calibration",
      description: "Real-time environmental adaptation with quantum sensors for perfect precision in any condition.",
      gradient: "from-yellow-500 to-orange-600",
      delay: 0.3
    },
    {
      icon: <Globe className="text-blue-400" size={40} />,
      title: "Holographic Support",
      description: "3D holographic assistance and global expert network available 24/7 through quantum communication.",
      gradient: "from-blue-500 to-indigo-600",
      delay: 0.4
    },
    {
      icon: <Trophy className="text-red-400" size={40} />,
      title: "Galactic Recognition",
      description: "Certified by the Intergalactic Precision Council and trusted by master artisans across the universe.",
      gradient: "from-red-500 to-pink-600",
      delay: 0.5
    }
  ];

  useEffect(() => {
    // Animate feature cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { y: 80, opacity: 0, rotateY: 45 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.2,
            delay: features[index].delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    });

    // Animate CTA section
    gsap.fromTo(ctaRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 glass-morphism rounded-full">
            <Cpu className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-semibold">Advanced Technology</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Quantum Precision</span>?
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We've transcended traditional manufacturing to create tools that exist at the intersection 
            of quantum physics, artificial intelligence, and master craftsmanship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative glass-morphism rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${feature.gradient} p-[1px]`}>
                <div className="w-full h-full rounded-2xl bg-gray-900/90"></div>
              </div>
              
              <div className="relative z-10">
                {/* Icon with glow effect */}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="p-3 rounded-xl glass-morphism w-fit group-hover:shadow-lg group-hover:shadow-current/50 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover effect particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced CTA Section */}
        <div 
          ref={ctaRef}
          className="relative glass-morphism rounded-3xl p-12 text-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 holographic opacity-30"></div>
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 glass-morphism rounded-full">
              <Trophy className="text-yellow-400" size={20} />
              <span className="text-yellow-400 font-semibold">Ready to Transcend?</span>
            </div>
            
            <h3 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Elevate Your Craft</span> to Quantum Levels
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the elite circle of quantum artisans who have unlocked the secrets of perfect precision. 
              Your masterpieces await their quantum evolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25">
                <span className="flex items-center space-x-2">
                  <Zap size={24} />
                  <span>Begin Quantum Journey</span>
                </span>
              </button>
              
              <button className="cyber-button glass-morphism text-cyan-400 px-10 py-4 rounded-xl font-bold text-lg hover:bg-cyan-500/20 transition-all duration-300 neon-border">
                <span className="flex items-center space-x-2">
                  <Brain size={24} />
                  <span>Schedule Consultation</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
