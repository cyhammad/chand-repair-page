import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Shield, Clock, Wrench, Phone, CheckCircle, FileText } from "lucide-react";

const warrantyFeatures = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description: "All repairs covered with full warranty on parts and labor for 12 months"
  },
  {
    icon: Clock,
    title: "Extended Protection",
    description: "Optional extended warranty plans available for up to 3 years"
  },
  {
    icon: Wrench,
    title: "Genuine Parts Only",
    description: "All replacement parts are genuine Bosch components with manufacturer warranty"
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock customer support for warranty claims and assistance"
  }
];

const warrantyBenefits = [
  "Free callback service within warranty period",
  "No additional charges for warranty repairs",
  "Priority booking for warranty customers",
  "Nationwide warranty coverage across UAE",
  "Transferable warranty for appliance sales",
  "Digital warranty certificates and tracking"
];

export default function WarrantySection() {
  return (
    <section id="warranty" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
            <Shield className="h-4 w-4 mr-2" />
            Warranty & Protection
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Warranty Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bosch Repair Center Abu Dhabi offers industry-leading warranty coverage on all repairs. 
            Your satisfaction and peace of mind are our top priorities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Warranty Features */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Warranty Features</h3>
            <div className="space-y-6">
              {warrantyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty Benefits */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">What's Included</h3>
            <div className="space-y-3 mb-8">
              {warrantyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Download Warranty Terms
            </Button>
          </div>
        </div>

        {/* Warranty Plans */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 border-gray-200 hover:border-primary/50 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-gray-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Standard Warranty</h4>
              <div className="text-3xl font-bold text-primary mb-4">12 Months</div>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>Parts & Labor Coverage</li>
                <li>Free Callback Service</li>
                <li>Phone Support</li>
                <li>Digital Certificate</li>
              </ul>
              <div className="text-green-600 font-semibold">Included with Service</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm">
              Most Popular
            </div>
            <CardContent className="p-8 text-center pt-12">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Extended Warranty</h4>
              <div className="text-3xl font-bold text-primary mb-4">24 Months</div>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>Everything in Standard</li>
                <li>Priority Service</li>
                <li>Free Annual Maintenance</li>
                <li>24/7 Emergency Support</li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Upgrade Now
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:border-primary/50 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Premium Warranty</h4>
              <div className="text-3xl font-bold text-primary mb-4">36 Months</div>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                <li>Everything in Extended</li>
                <li>Replacement Guarantee</li>
                <li>Quarterly Maintenance</li>
                <li>VIP Customer Support</li>
              </ul>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Warranty CTA */}
        <div className="mt-16 bg-primary text-white rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <FileText className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl font-semibold mb-4">Need Help with Your Warranty?</h3>
            <p className="text-lg opacity-90 mb-6">
              Our customer service team is ready to assist with warranty claims, coverage questions, 
              and extended protection plans for your Bosch appliances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Check Warranty Status
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Warranty Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}