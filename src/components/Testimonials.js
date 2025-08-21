'use client';

import { useEffect, useRef } from 'react';
import { Quote, Star, Sparkles, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const testimonials = [
    {
      name: "Dr. Maria Rodriguez",
      title: "Quantum Jeweler, Artisan Gems",
      content: "These quantum tools have revolutionized my workshop. The precision is beyond anything I've experienced in 20 years of crafting. The AI assistance feels like having a master craftsman guiding every cut.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      achievement: "Master Artisan",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      name: "David Chen",
      title: "Neural Designer, Chen Studios",
      content: "The holographic interface and quantum precision have elevated my designs to levels I never thought possible. My clients are amazed by the intricate details achievable with these tools.",
      rating: 5,
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150",
      achievement: "Innovation Pioneer",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Sarah Thompson",
      title: "Quantum Artisan, Independent",
      content: "As a solo artisan, having AI-powered tools that adapt to my style and provide real-time feedback has been game-changing. The self-healing materials mean I never worry about tool maintenance.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      achievement: "Rising Star",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  useEffect(() => {
    // Animate testimonial cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { y: 100, opacity: 0, rotateX: 30 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
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
      }
    });

    // Floating animation for quote icons
    gsap.to('.quote-float', {
      y: -10,
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 glass-morphism rounded-full">
            <Sparkles className="text-yellow-400" size={20} />
            <span className="text-yellow-400 font-semibold">Quantum Testimonials</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Trusted by</span> Quantum Masters
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Discover how master artisans across the galaxy have transcended traditional crafting 
            with our quantum-enhanced precision tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative glass-morphism rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${testimonial.gradient} p-[1px]`}>
                <div className="w-full h-full rounded-2xl bg-gray-900/90"></div>
              </div>
              
              <div className="relative z-10">
                {/* Floating quote icon */}
                <div className="mb-6">
                  <Quote className="quote-float text-cyan-400 opacity-60" size={40} />
                </div>
                
                {/* Rating stars with glow */}
                <div className="flex items-center mb-6 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className="text-yellow-400 fill-current drop-shadow-lg"
                      style={{ filter: 'drop-shadow(0 0 3px #fbbf24)' }}
                    />
                  ))}
                  <div className="ml-2 px-2 py-1 glass-morphism rounded-full">
                    <span className="text-xs text-yellow-400 font-semibold">QUANTUM VERIFIED</span>
                  </div>
                </div>
                
                {/* Testimonial content */}
                <p className="text-gray-300 mb-8 leading-relaxed italic text-lg group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors duration-300"
                    />
                    {/* Achievement badge */}
                    <div className="absolute -bottom-1 -right-1 p-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                      <Award size={12} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-1">{testimonial.title}</p>
                    <div className="inline-flex items-center space-x-1 px-2 py-1 glass-morphism rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400 font-semibold">{testimonial.achievement}</span>
                    </div>
                  </div>
                </div>

                {/* Hover effect particles */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '10,000+', label: 'Quantum Artisans', color: 'text-cyan-400' },
            { number: '99.9%', label: 'Precision Rate', color: 'text-purple-400' },
            { number: '50+', label: 'Galaxies Served', color: 'text-yellow-400' },
            { number: '∞', label: 'Tool Lifespan', color: 'text-green-400' }
          ].map((stat, index) => (
            <div key={index} className="text-center glass-morphism rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className={`text-3xl font-bold ${stat.color} mb-2 glow-text`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
