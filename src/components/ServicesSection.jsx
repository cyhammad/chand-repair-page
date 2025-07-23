import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./ImageWithFallback";
import { Wrench, Clock, Shield, Phone } from "lucide-react";

const services = [
  {
    title: "Bosch Refrigerator Repair",
    description:
      "Expert repair for Bosch refrigerators including cooling issues, ice maker problems, and temperature control malfunctions.",
    image:
      "/fridge.webp",
    features: [
      "Temperature Issues",
      "Ice Maker Repair",
      "Compressor Problems",
      "Door Seal Replacement",
    ],
  },
  {
    title: "Bosch Dishwasher Repair",
    description:
      "Professional Bosch dishwasher repair services for cleaning problems, drainage issues, and control panel malfunctions.",
    image:
      "/dishwasher.jpg",
    features: [
      "Poor Cleaning",
      "Water Drainage",
      "Control Panel",
      "Pump Replacement",
    ],
  },
  {
    title: "Bosch Oven Repair",
    description:
      "Comprehensive Bosch oven repair including heating elements, temperature sensors, and door mechanism repairs.",
    image:
      "/oven.webp",
    features: [
      "Heating Elements",
      "Temperature Control",
      "Door Mechanisms",
      "Self-Clean Issues",
    ],
  },
  {
    title: "Bosch Stove/Cooktop Repair",
    description:
      "Expert repair services for Bosch stoves and cooktops including burner issues, ignition problems, and control repairs.",
    image:
      "/cooktop.webp",
    features: [
      "Burner Problems",
      "Ignition Issues",
      "Control Knobs",
      "Gas Line Repairs",
    ],
  },
  {
    title: "Bosch Washing Machine Repair",
    description:
      "Professional Bosch washing machine repair for spinning issues, water problems, and control system malfunctions.",
    image:
      "/washing.webp",
    features: [
      "Spin Cycle Issues",
      "Water Problems",
      "Control Systems",
      "Drum Repairs",
    ],
  },
  {
    title: "Bosch Dryer Repair",
    description:
      "Expert Bosch dryer repair services including heating problems, drum issues, and ventilation system repairs.",
    image:
      "/dryer.webp",
    features: [
      "Heating Problems",
      "Drum Issues",
      "Ventilation",
      "Timer Controls",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
            <Wrench className="h-4 w-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bosch Repair Center UAE Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional repair services for all Bosch home appliances with
            certified technicians, genuine parts, and comprehensive warranty
            coverage in UAE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  width={400}
                  height={300}
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 text-xs rounded">
                  Same Day
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary/5"
                  >
                    Learn More
                  </Button>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    2-4 hours
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Authorized Service
              </h4>
              <p className="text-gray-600 text-sm">
                Official Bosch authorized repair center in UAE
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Same Day Service
              </h4>
              <p className="text-gray-600 text-sm">
                Emergency repairs available 24/7 across UAE
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Genuine Parts
              </h4>
              <p className="text-gray-600 text-sm">
                Only authentic Bosch replacement parts used
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Free Consultation
              </h4>
              <p className="text-gray-600 text-sm">
                Complimentary diagnosis and repair estimates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
