import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary text-white px-3 py-1 text-xl font-bold">BOSCH</div>
              <span className="text-gray-300 text-sm">Repair Center</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading Bosch appliance repair service in UAE. Certified technicians, 
              genuine parts, and comprehensive warranty coverage for all Bosch home appliances.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="bg-gray-800 p-2 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Bosch Refrigerator Repair</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bosch Dishwasher Repair</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bosch Oven Repair</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bosch Washing Machine Repair</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bosch Dryer Repair</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bosch Cooktop Repair</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#warranty" className="hover:text-primary transition-colors">Warranty</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Emergency Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Maintenance Plans</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">+971 2 123 4567</div>
                  <div className="text-gray-300 text-sm">24/7 Emergency Line</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">info@boschrepairabu.ae</div>
                  <div className="text-gray-300 text-sm">Response within 2 hours</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">UAE, UAE</div>
                  <div className="text-gray-300 text-sm">Serving all areas</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Mon-Fri: 8AM-8PM</div>
                  <div className="text-gray-300 text-sm">Sat-Sun: 9AM-6PM</div>
                </div>
              </div>
            </div>

            <Button className="mt-6 bg-primary hover:bg-primary/90 text-white w-full">
              Emergency Repair
            </Button>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h4 className="text-lg font-semibold mb-4">Service Areas in UAE</h4>
          <div className="grid md:grid-cols-3 gap-4 text-gray-300 text-sm">
            <div>
              <ul className="space-y-1">
                <li>Marina Mall Area</li>
                <li>Corniche Road</li>
                <li>Downtown UAE</li>
                <li>Al Maryah Island</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>Khalifa City</li>
                <li>Al Raha</li>
                <li>Yas Island</li>
                <li>Saadiyat Island</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>Al Reef</li>
                <li>Al Shamkha</li>
                <li>Masdar City</li>
                <li>Al Forsan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Bosch Repair Center UAE. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}