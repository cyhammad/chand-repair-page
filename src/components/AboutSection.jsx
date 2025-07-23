import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./ImageWithFallback";
import { Award, Users, Clock, Shield, CheckCircle, Star } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Bosch Certified",
    description: "Official Bosch authorized service center",
  },
  {
    icon: Users,
    title: "Expert Technicians",
    description: "15+ years of appliance repair experience",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Same-day service across UAE",
  },
  {
    icon: Shield,
    title: "Warranty Coverage",
    description: "Comprehensive warranty on all repairs",
  },
];

const stats = [
  { number: "500+", label: "Satisfied Customers" },
  { number: "15+", label: "Years Experience" },
  { number: "24/7", label: "Emergency Service" },
  { number: "4.9★", label: "Customer Rating" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              <Star className="h-4 w-4 mr-2" />
              About Us
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Leading Bosch Repair Center in UAE
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bosch Repair Center UAE has been the trusted choice for
              Bosch appliance repairs since 2008. Our certified technicians
              specialize exclusively in Bosch home appliances, ensuring expert
              service with genuine parts and comprehensive warranty coverage.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As an authorized Bosch service center in UAE, we maintain
              the highest standards of quality and customer satisfaction. Our
              team undergoes continuous training to stay updated with the latest
              Bosch technologies and repair techniques.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Authorized Bosch Service Center in UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Factory-trained certified technicians</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Only genuine Bosch replacement parts used</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Comprehensive warranty on all services</span>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white">
              View Our Certifications
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=500&fit=crop&crop=center"
              alt="Bosch certified technician working on appliance repair in UAE"
              className="w-full h-auto rounded-lg shadow-lg"
              width={600}
              height={500}
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Years Serving</div>
                <div className="text-sm text-gray-600">UAE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
