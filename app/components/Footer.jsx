import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm leading-relaxed">
                  B92, Block 10 Gulshan-e-Iqbal,
                  <br />
                  Karachi, 75290
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
              <p className="text-sm">+92 303 333 7939</p>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
              <p className="text-sm">info@devnest.co</p>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium mb-1">Opening Hours:</p>
                <p className="text-sm text-gray-300">Mon to Sat: 9:00am - 6:00pm</p>
                <p className="text-sm text-gray-300">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Menu</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-green-400 hover:text-green-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#career" className="text-gray-300 hover:text-white transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Production
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Content Creation
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4">Follow us on:</h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="#"
                className="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
              >
                <Instagram className="h-6 w-6 mb-2 group-hover:text-green-400 transition-colors" />
                <span className="text-xs">Instagram</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
              >
                <Facebook className="h-6 w-6 mb-2 group-hover:text-green-400 transition-colors" />
                <span className="text-xs">Facebook</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
              >
                <Linkedin className="h-6 w-6 mb-2 group-hover:text-green-400 transition-colors" />
                <span className="text-xs">LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex flex-col items-center justify-center p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
              >
                <Youtube className="h-6 w-6 mb-2 group-hover:text-green-400 transition-colors" />
                <span className="text-xs">Youtube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <a href="#" className="text-gray-300 hover:text-white transition-colors mb-4 md:mb-0">
            Privacy Policy
          </a>
          <div className="flex items-center space-x-2">
            <span className="text-gray-300">©devnest. All Rights Reserved</span>
            <div className="w-6 h-6 bg-green-400 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-white">D</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
