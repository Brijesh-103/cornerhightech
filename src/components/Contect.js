'use client';

import { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Zap, Brain, Shield } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);

  useEffect(() => {
    // Animate contact info
    gsap.fromTo(contactInfoRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate form
    gsap.fromTo(formRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating animation for icons
    gsap.to('.contact-icon', {
      y: -5,
      duration: 2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.3
    });
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 glass-morphism rounded-full">
            <Zap className="text-cyan-400" size={20} />
            <span className="text-cyan-400 font-semibold">Quantum Communication</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6">
            <span className="gradient-text">Connect</span> with Our Quantum Experts
          </h2>
          
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ready to transcend traditional crafting? Our quantum specialists are standing by to guide 
            your journey into the future of precision engineering.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div className="glass-morphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold gradient-text mb-6">Quantum Communication Channels</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="contact-icon text-cyan-400" size={24} />,
                    title: "Quantum Hotline",
                    primary: "+1 (555) QUANTUM",
                    secondary: "Instant neural connection",
                    gradient: "from-cyan-500 to-blue-600"
                  },
                  {
                    icon: <Mail className="contact-icon text-purple-400" size={24} />,
                    title: "Neural Email",
                    primary: "quantum@precisioncut.com",
                    secondary: "Response within nanoseconds",
                    gradient: "from-purple-500 to-pink-600"
                  },
                  {
                    icon: <MapPin className="contact-icon text-green-400" size={24} />,
                    title: "Quantum Laboratory",
                    primary: "1234 Quantum Blvd",
                    secondary: "Neo Francisco, Sector 7",
                    gradient: "from-green-500 to-emerald-600"
                  },
                  {
                    icon: <Clock className="contact-icon text-yellow-400" size={24} />,
                    title: "Temporal Availability",
                    primary: "24/7 Across All Dimensions",
                    secondary: "Quantum time synchronization",
                    gradient: "from-yellow-500 to-orange-600"
                  }
                ].map((item, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className={`p-3 rounded-xl glass-morphism group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${item.gradient} bg-opacity-20`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 font-medium">{item.primary}</p>
                      <p className="text-sm text-gray-500">{item.secondary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantum Features */}
            <div className="glass-morphism rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Quantum Support Features</h4>
              <div className="space-y-3">
                {[
                  { icon: <Brain size={16} />, text: "AI-powered consultation", color: "text-purple-400" },
                  { icon: <Shield size={16} />, text: "Quantum-encrypted communication", color: "text-green-400" },
                  { icon: <Zap size={16} />, text: "Instant holographic demos", color: "text-yellow-400" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-300">
                    <span className={feature.color}>{feature.icon}</span>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div ref={formRef} className="glass-morphism rounded-2xl p-8 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 holographic opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold gradient-text mb-6">Initiate Quantum Contact</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 glass-morphism rounded-lg border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 glass-morphism rounded-lg border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                      placeholder="Enter your surname"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Quantum Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 glass-morphism rounded-lg border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500"
                    placeholder="your@quantum.email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                    Transmission Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 glass-morphism rounded-lg border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white"
                  >
                    <option value="">Select quantum inquiry type</option>
                    <option value="consultation">Quantum Consultation</option>
                    <option value="demo">Holographic Demo Request</option>
                    <option value="custom">Custom Tool Design</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Quantum Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 glass-morphism rounded-lg border border-cyan-500/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-500 resize-none"
                    placeholder="Describe your quantum crafting vision..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full cyber-button bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Send size={20} />
                    <span>Transmit Quantum Message</span>
                  </span>
                </button>
              </form>

              {/* Additional info */}
              <div className="mt-6 p-4 glass-morphism rounded-lg border border-cyan-500/20">
                <p className="text-sm text-gray-400 text-center">
                  🔒 All communications are quantum-encrypted and processed through our neural network for instant response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
