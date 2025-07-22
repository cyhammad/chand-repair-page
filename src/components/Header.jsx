import { Button } from "./ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Top contact bar */}
      <div className="bg-gray-100 py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+971 2 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Abu Dhabi, UAE</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-muted-foreground">Available 24/7 for Emergency Repairs</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-white px-3 py-1 text-xl font-bold">BOSCH</div>
              <span className="text-gray-600 text-sm">Repair Center</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#warranty" className="text-gray-700 hover:text-primary transition-colors">Warranty</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Book Repair
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}