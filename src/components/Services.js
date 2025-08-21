"use client"

import { Brain, Shield, Cloud, Code, Database, Smartphone, Zap, ArrowRight, CheckCircle } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Intelligent automation and predictive analytics solutions that transform your business operations.",
      features: ["Custom AI Models", "Data Analytics", "Process Automation", "Predictive Insights"],
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security frameworks protecting your digital assets and ensuring compliance.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Risk Assessment"],
      color: "bg-red-500",
      lightColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions designed for performance, security, and cost optimization.",
      features: ["Cloud Migration", "Infrastructure Design", "DevOps Integration", "Performance Optimization"],
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Development",
      description: "Tailored software solutions built with cutting-edge technologies and best practices.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Engineering",
      description: "Robust data pipelines and analytics platforms for data-driven decision making.",
      features: ["Data Warehousing", "ETL Processes", "Real-time Analytics", "Business Intelligence"],
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies that modernize your business processes.",
      features: ["Process Digitization", "Workflow Automation", "Legacy Modernization", "Change Management"],
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center mb-6 bg-orange-50 text-orange-700 border border-orange-200 px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="h-4 w-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-serif">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From AI-powered automation to robust cybersecurity, we provide end-to-end technology services that transform
            how your business operates and competes in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group hover-lift animate-scale-in bg-white rounded-2xl shadow-lg border border-slate-100 p-8 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`flex items-center justify-center w-16 h-16 ${service.lightColor} ${service.textColor} rounded-2xl group-hover:${service.color} group-hover:text-white transition-all duration-300 shadow-lg`}
                >
                  {service.icon}
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base mb-6">{service.description}</p>
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-slate-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <button className="gradient-primary text-white px-10 py-4 rounded-full hover-scale shadow-xl text-lg font-semibold inline-flex items-center">
            Explore All Services
            <ArrowRight className="ml-3 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
