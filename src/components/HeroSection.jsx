"use client";

import { Button } from "./ui/button";
import { CheckCircle, Clock, Wrench, Star } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { phoneNumber } from "@/lib/company";
import CTAButtons from "./CTAButtons";
import ServicesBar from "./ServiceBar";

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
      className="relative bg-gradient-to-br from-gray-50 to-white pt-4 pb-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-end pr-4 text-2xl font-bold pb-4">
          Repair Center
        </div>
        <ImageWithFallback
          src="/kitchen.jpg"
          alt="Bosch appliance repair technician in UAE"
          className="w-full h-auto"
          width={600}
          height={600}
        />
        <div className="grid gap-12 items-center">
          {/* Content */}
          <div>
            <div className="space-y-4">
              <ServicesBar />
              <p className="text-xl text-gray-600 px-4 leading-relaxed">
                Bosch Repair Center UAE offers expert repair services for all
                Bosch home appliances. Our certified technicians provide
                same-day service with genuine Bosch parts and comprehensive
                warranty.
              </p>
            </div>
            <div className="px-4">
              <CTAButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
