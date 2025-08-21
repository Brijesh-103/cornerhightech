"use client"

import { Building2, Target, Rocket, BarChart3, Globe, Users, Award, TrendingUp, ArrowRight } from "lucide-react"

export default function About() {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "500+", label: "Happy Clients", color: "text-blue-600" },
    { icon: <Award className="h-6 w-6" />, value: "15+", label: "Years Experience", color: "text-green-600" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "98%", label: "Success Rate", color: "text-purple-600" },
    { icon: <Globe className="h-6 w-6" />, value: "50+", label: "Countries Served", color: "text-orange-600" },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategic Excellence",
      description: "Technology roadmaps perfectly aligned with your business objectives and growth plans.",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Rapid Innovation",
      description: "Fast implementation with cutting-edge solutions and minimal business disruption.",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Measurable Impact",
      description: "Data-driven outcomes with comprehensive ROI tracking and performance analytics.",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Supporting businesses worldwide with 24/7 support and local expertise.",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center mb-8 bg-blue-50 text-blue-700 border border-blue-200 px-4 py-2 rounded-full text-sm font-medium">
              <Building2 className="h-4 w-4 mr-2" />
              About Corner High Tech
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight">
              15+ Years of Technology Excellence & Innovation
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {
                "Since 2009, Corner High Tech has been at the forefront of technological innovation, helping over 500 businesses transform their operations through strategic technology implementation and digital excellence."
              }
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              Our team of certified experts combines deep technical knowledge with business acumen to deliver solutions
              that not only work flawlessly but drive measurable results and sustainable growth.
            </p>
            <button className="gradient-primary text-white px-10 py-4 rounded-full hover-scale shadow-xl text-lg font-semibold inline-flex items-center">
              Learn More About Us
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="animate-slide-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-8 text-center hover-lift animate-scale-in bg-white shadow-lg border border-slate-100 rounded-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex justify-center mb-4 ${stat.color}`}>{stat.icon}</div>
                  <div className="text-4xl font-bold text-slate-900 mb-2 font-serif">{stat.value}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="animate-fade-in">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Our Core Values & Approach
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We believe in delivering exceptional value through innovation, excellence, and unwavering commitment to
              our clients' success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 hover-lift animate-scale-in bg-white shadow-lg border border-slate-100 rounded-2xl text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 ${value.lightColor} ${value.textColor} rounded-2xl mx-auto mb-6 shadow-lg`}
                >
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 font-serif">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
