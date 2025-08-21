"use client"

import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-10 h-10 gradient-primary rounded-lg mr-3">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold font-serif">Corner High Tech</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative technology solutions since 2009. We deliver excellence in AI,
              cybersecurity, cloud infrastructure, and digital transformation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6 font-serif text-lg">Services</h3>
            <ul className="space-y-3 text-slate-300">
              {[
                "AI & Machine Learning",
                "Cybersecurity Solutions",
                "Cloud Infrastructure",
                "Custom Development",
                "Data Engineering",
                "Digital Transformation",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-6 font-serif text-lg">Contact</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>info@cornerhightech.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <p>Silicon Valley, CA</p>
                  <p className="text-sm text-slate-400">United States</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">© 2024 Corner High Tech. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
