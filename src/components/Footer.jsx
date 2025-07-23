import { phoneNumber } from "@/lib/company";
import { Button } from "./ui/button";
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
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white mt-20 border-t border-black">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Image
                className="w-32"
                src="/bosch.svg"
                width={200}
                height={100}
                alt="Logo"
              />
              <span className=" text-sm">Repair Center</span>
            </div>
            <p className=" mb-6 leading-relaxed">
              Leading Bosch appliance repair service in UAE. Certified
              technicians, genuine parts, and comprehensive warranty coverage
              for all Bosch home appliances.
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
            <ul className="space-y-3 ">
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Bosch Refrigerator Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Bosch Dishwasher Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Bosch Oven Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Bosch Washing Machine Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Bosch Dryer Repair
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary flex items-center gap-2 transition-colors"
                >
                  <Check size={16} /> Bosch Cooktop Repair
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
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">info@boschrepairabu.ae</div>
                  <div className=" text-sm">Response within 2 hours</div>
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

            <Button className="mt-6 bg-primary hover:bg-primary/90 text-white w-full">
              Emergency Repair
            </Button>
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
