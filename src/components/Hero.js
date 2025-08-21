"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Users, Award, TrendingUp, Star, Lightbulb } from "lucide-react"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { icon: Users, value: "500+", label: "Enterprise Clients", color: "text-blue-600" },
    { icon: Award, value: "15+", label: "Years Experience", color: "text-green-600" },
    { icon: TrendingUp, value: "98%", label: "Success Rate", color: "text-purple-600" },
    { icon: Star, value: "50+", label: "Countries Served", color: "text-orange-600" },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-subtle"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                <Lightbulb className="text-blue-600" size={16} />
                <span className="text-blue-700 font-medium text-sm">Technology Excellence</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight font-serif">
                Transforming Business Through
                <span className="block text-gradient-primary">Smart Technology</span>
              </h1>

              {/* Description */}
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                We deliver cutting-edge technology solutions that drive innovation, enhance efficiency, and accelerate
                growth for forward-thinking businesses worldwide.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="gradient-primary text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl">
                <span>Start Your Project</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-200 hover:scale-105 transition-all duration-500">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className={`flex justify-center mb-3 ${stat.color}`}>
                        <stat.icon size={32} />
                      </div>
                      <div className="text-3xl font-bold text-slate-900 font-serif">{stat.value}</div>
                      <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-float opacity-20"></div>
              <div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-orange-500 rounded-full animate-float opacity-20"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
