import { phoneNumber } from "@/lib/company";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Check,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white mt-20 border-t border-black">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-xl mb-2 text-[#f80000] font-bold">Service Center UAE</div>
            <p className=" mb-6 leading-relaxed">
              Leading Service Center UAE appliance repair service in UAE. Certified
              technicians, genuine parts, and comprehensive warranty coverage
              for all home appliances.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 ">
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Refrigerator Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Dishwasher Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Oven Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Washing Machine Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Dryer Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Cooktop Repair
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">{phoneNumber}</div>
                  <div className=" text-sm">24/7 Emergency Line</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">UAE</div>
                  <div className=" text-sm">Serving all areas</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Mon-Fri: 8AM-8PM</div>
                  <div className=" text-sm">Sat-Sun: 9AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Service Center UAE. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
