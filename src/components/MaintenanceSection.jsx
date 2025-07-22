import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./ImageWithFallback";
import { Lightbulb, Calendar, AlertTriangle, BookOpen, CheckCircle, Download } from "lucide-react";

const maintenanceTips = [
  {
    appliance: "Refrigerator",
    tips: [
      "Clean coils every 6 months for optimal cooling",
      "Replace water filter every 6-12 months",
      "Check door seals for proper closure",
      "Keep temperature between 37-40°F"
    ],
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=200&fit=crop"
  },
  {
    appliance: "Dishwasher",
    tips: [
      "Clean filter monthly to prevent blockages",
      "Run empty cycle with vinegar quarterly",
      "Check spray arms for food debris",
      "Use rinse aid for spot-free drying"
    ],
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop"
  },
  {
    appliance: "Washing Machine",
    tips: [
      "Clean drum monthly with hot water cycle",
      "Leave door open after use to air dry",
      "Check hoses for leaks regularly",
      "Use appropriate detergent amounts"
    ],
    image: "https://images.unsplash.com/photo-1604709177595-4e347c4b4b4f?w=300&h=200&fit=crop"
  }
];

const preventiveMaintenance = [
  {
    icon: Calendar,
    title: "Regular Cleaning",
    description: "Monthly cleaning schedules to prevent buildup and maintain efficiency"
  },
  {
    icon: AlertTriangle,
    title: "Early Detection",
    description: "Identifying potential issues before they become major problems"
  },
  {
    icon: CheckCircle,
    title: "Performance Optimization",
    description: "Maintaining peak performance and energy efficiency"
  },
  {
    icon: BookOpen,
    title: "Expert Guidance",
    description: "Professional advice on proper appliance care and usage"
  }
];

export default function MaintenanceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
            <Lightbulb className="h-4 w-4 mr-2" />
            Maintenance Tips
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Keep Your Bosch Appliances Running Smoothly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proper maintenance extends appliance life and prevents costly repairs. 
            Follow these expert tips from Bosch Repair Center Abu Dhabi.
          </p>
        </div>

        {/* Maintenance Tips Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {maintenanceTips.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={item.image}
                  alt={`${item.appliance} maintenance tips`}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={200}
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-sm rounded">
                  {item.appliance}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Bosch {item.appliance} Care
                </h3>
                <div className="space-y-3">
                  {item.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Preventive Maintenance Benefits */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Benefits of Preventive Maintenance
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Regular maintenance by Bosch Repair Center Abu Dhabi helps prevent breakdowns 
              and ensures your appliances operate at peak efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {preventiveMaintenance.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Plans */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Annual Maintenance Plan */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 rounded-full p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Annual Maintenance Plan</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive appliance inspection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Deep cleaning and calibration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Filter replacement and part checks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Performance optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Priority service booking</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="text-2xl font-bold text-primary mb-2">AED 299/year</div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Subscribe Now
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Emergency Maintenance */}
          <Card className="border-2 border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-100 rounded-full p-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Emergency Maintenance</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">24/7 emergency response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Same-day service in Abu Dhabi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Diagnostic and quick fixes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">Temporary solutions available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">No extra weekend charges</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="text-2xl font-bold text-primary mb-2">AED 150/visit</div>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                  Call Emergency Line
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Resources */}
        <div className="bg-primary text-white rounded-2xl p-8 text-center">
          <Download className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-2xl font-semibold mb-4">
            Download Free Maintenance Guides
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get comprehensive maintenance guides for your Bosch appliances. 
            These expert-created guides help you maintain optimal performance and prevent issues.
          </p>
          <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Download All Guides (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}