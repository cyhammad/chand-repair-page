"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActionButtons() {
  const handleCall = () => {
    window.location.href = "tel:+97121234567";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/97121234567?text=Hello! I need help with my Bosch appliance repair in Abu Dhabi.",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp Chat
        </div>
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
        aria-label="Call us now"
      >
        <Phone className="h-6 w-6" />
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </div>
      </button>
    </div>
  );
}
