"use client";

import { Button } from "./ui/button";
import { CheckCircle, Clock, Wrench, Star } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { phoneNumber } from "@/lib/company";

export default function HeroSection() {
  const sendMessage = () => {
    const message = `Hello, I’m interested in getting my home appliance repaired by Bosch Repair Center.`;
    const url = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const dialPhone = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
  };
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-50 to-white py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 px-4">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                <Star className="h-4 w-4 mr-2" />
                Authorized Service Center Across UAE
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Professional Bosch Appliance Repair Services in
                <span className="text-primary"> UAE</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Bosch Repair Center UAE offers expert repair services for all
                Bosch home appliances. Our certified technicians provide
                same-day service with genuine Bosch parts and comprehensive
                warranty.
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
              <Button
                size="lg"
                onClick={dialPhone}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
              >
                Schedule Repair Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={sendMessage}
                className="border-primary text-primary hover:bg-primary/5 px-8 py-3"
              >
                Whatsapp Us Now
              </Button>
            </div>
          </div>
          <ImageWithFallback
            src="/kitchen.jpg"
            alt="Bosch appliance repair technician in UAE"
            className="w-full h-auto"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
