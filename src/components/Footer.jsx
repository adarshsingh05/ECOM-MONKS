import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-green-400 mt-32 text-green-900" style={{ fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-5xl font-extrabold mb-8 ml-[-50px] text-green-700">
              <span className="text-white">THE</span>
              <span className="text-yellow-400 ml-3">ECOM</span>
              <span className="text-blue-600 ml-3">MONKS</span>
            </div>
            <p className="text-green-900 text-xl mb-10 leading-relaxed font-semibold">
              Plot No. GH02, Sector-4, Greater Noida West- 201309
            </p>
            <div className="flex space-x-8 ml-16">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center text-2xl hover:scale-110 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-500 transform hover:rotate-6 cursor-pointer">
                <Instagram className="w-7 h-7 text-white" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center text-2xl hover:scale-110 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-500 transform hover:rotate-6 cursor-pointer">
                <MessageCircle className="w-7 h-7 text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center text-2xl hover:scale-110 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-500 transform hover:rotate-6 cursor-pointer">
                <Facebook className="w-7 h-7 text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center text-2xl hover:scale-110 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-500 transform hover:rotate-6 cursor-pointer">
                <Linkedin className="w-7 h-7 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-3xl font-extrabold text-green-900 mb-10">
              Quick Links
            </h3>
            <ul className="space-y-6">
              {[
                "Home",
                "Our Services",
                "Our Frameworks",
                "Why Us",
                "Contact Us",
                "How it Works",
                "About Us",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-green-700 hover:text-green-400 transition-all duration-500 text-xl font-medium hover:translate-x-4 transform block cursor-pointer"
                  >
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-3xl font-extrabold text-green-900 mb-10">Contact</h3>
            <div className="space-y-8">
              <a
                href="mailto:hello@thecommonks.com"
                className="block text-green-700 hover:text-green-400 transition-colors duration-500 text-xl font-medium cursor-pointer"
              >
                <Mail className="inline w-6 h-6 mr-3 align-text-bottom" />
                hello@thecommonks.com
              </a>
              <a
                href="https://www.theecommonks.com"
                className="block text-green-700 hover:text-green-400 transition-colors duration-500 text-xl font-medium cursor-pointer"
              >
                <Globe className="inline w-6 h-6 mr-3 align-text-bottom" />
                www.theecommonks.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-1 border-green-200 mt-20 pt-16 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xl">
            © 2025 The Ecom Monks. All rights reserved.
          </p>
          <p className="text-gray-400 text-xl mt-6 md:mt-0">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
