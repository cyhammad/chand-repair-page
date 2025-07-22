import { Button } from "./ui/button";
import { CheckCircle, Clock, Wrench, Star } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                <Star className="h-4 w-4 mr-2" />
                #1 Bosch Repair Center Abu Dhabi
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Professional Bosch Appliance Repair Services in 
                <span className="text-primary"> Abu Dhabi</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Bosch Repair Center Abu Dhabi offers expert repair services for all Bosch home appliances. 
                Our certified technicians provide same-day service with genuine Bosch parts and comprehensive warranty.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">Certified Technicians</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">Same Day Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">Genuine Bosch Parts</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Schedule Repair Now
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 px-8 py-3">
                Get Free Quote
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t">
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Repairs Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop&crop=center"
                alt="Bosch appliance repair technician in Abu Dhabi"
                className="w-full h-auto rounded-lg shadow-lg"
                width={600}
                height={600}
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">4.9★</div>
                <div className="text-xs text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}