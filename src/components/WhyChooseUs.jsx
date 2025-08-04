import React from "react";
import {
  Clock,
  Shield,
  Users,
  Award,
  Phone,
  MapPin,
  CheckCircle,
  Zap,
  Wrench,
  Heart,
} from "lucide-react";
import Image from "next/image";
import CTAButtons from "./CTAButtons";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Clock className="size-8" />,
      title: "Same Day Service",
      description:
        "We understand the urgency of appliance breakdowns. Our team provides same-day repair services to minimize disruption to your daily routine.",
      color: "bg-[#f80000]",
    },
    {
      icon: <Shield className="size-8" />,
      title: "Warranty Guaranteed",
      description:
        "All our repairs come with a comprehensive warranty. We stand behind our work with confidence, ensuring your peace of mind.",
      color: "bg-[#f80000]",
    },
    {
      icon: <Users className="size-8" />,
      title: "Certified Technicians",
      description:
        "Our team consists of factory-trained and certified technicians with extensive experience in all major appliance brands and models.",
      color: "bg-[#f80000]",
    },
    {
      icon: <Award className="size-8" />,
      title: "10+ Years Experience",
      description:
        "With over a decade of experience in appliance repair, we've built a reputation for reliability, quality, and customer satisfaction.",
      color: "bg-[#f80000]",
    },
    {
      icon: <Phone className="size-8" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support ensures you can reach us whenever you need assistance with your appliance emergencies.",
      color: "bg-[#f80000]",
    },
    {
      icon: <MapPin className="size-8" />,
      title: "UAE Wide Coverage",
      description:
        "We provide our professional repair services across all Emirates, ensuring no customer is left without reliable appliance support.",
      color: "bg-[#f80000]",
    },
    {
      icon: <CheckCircle className="size-8" />,
      title: "Genuine Parts Only",
      description:
        "We use only original manufacturer parts to ensure optimal performance and longevity of your appliances after repair.",
      color: "bg-[#f80000]",
    },
    {
      icon: <Zap className="size-8" />,
      title: "Quick Diagnostics",
      description:
        "Advanced diagnostic tools and expertise allow us to quickly identify issues and provide accurate repair solutions.",
      color: "bg-[#f80000]",
    },
    {
      icon: <Wrench className="size-8" />,
      title: "All Brands Supported",
      description:
        "From Samsung to LG, Bosch to Siemens, we repair all major appliance brands with equal expertise and care.",
      color: "bg-[#f80000]",
    },
    {
      icon: <Heart className="size-8" />,
      title: "Customer First Approach",
      description:
        "Your satisfaction is our priority. We go above and beyond to ensure every customer receives exceptional service.",
      color: "bg-[#f80000]",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="text-[#f80000]">Service Center UAE</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another repair service. We're your trusted partner in
            keeping your home appliances running smoothly with unmatched
            expertise, reliability, and customer care.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-3 rounded-lg ${reason.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#f80000] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 overflow-hidden relative rounded-2xl text-white">
          <Image
            src="/kitchen-2.jpg"
            alt="Kitchen Appliances"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="bg-black/50 absolute top-0 left-0 w-full h-full"></div>
          <div className="flex flex-col gap-4 z-10">
            <div className="text-xl mb-6 flex flex-col gap-2 items-center justify-center h-full pt-4 opacity-90 text-white">
              <span className="font-bold">
                Ready to Experience Professional Appliance Repair?
              </span>
              <br />
              <span>
                Join thousands of satisfied customers who trust us with their
                appliance repairs
              </span>
              <CTAButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
