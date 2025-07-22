import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
            <MessageCircle className="h-4 w-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Bosch Repair Center Abu Dhabi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need Bosch appliance repair in Abu Dhabi? Contact our certified technicians for immediate assistance. 
            We provide same-day service across all areas of Abu Dhabi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Schedule Your Repair</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <Input placeholder="Your full name" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input placeholder="+971 xx xxx xxxx" className="w-full" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="your.email@example.com" className="w-full" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Appliance Type</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Select appliance</option>
                        <option>Refrigerator</option>
                        <option>Dishwasher</option>
                        <option>Oven</option>
                        <option>Stove/Cooktop</option>
                        <option>Washing Machine</option>
                        <option>Dryer</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <Input type="date" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Problem Description</label>
                    <Textarea 
                      placeholder="Describe the issue with your Bosch appliance..."
                      className="w-full h-24"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Abu Dhabi Location</label>
                    <Input placeholder="e.g., Marina, Downtown, Khalifa City..." className="w-full" />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                    Schedule Repair Service
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Call for Emergency Repair</h4>
                      <p className="text-primary text-lg font-semibold">+971 2 123 4567</p>
                      <p className="text-gray-600 text-sm">Available 24/7 for urgent Bosch repairs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                      <p className="text-primary text-lg font-semibold">info@boschrepairabu.ae</p>
                      <p className="text-gray-600 text-sm">Response within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Service Areas in Abu Dhabi</h4>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>• Marina Mall Area, Corniche</p>
                        <p>• Downtown Abu Dhabi, Al Maryah Island</p>
                        <p>• Khalifa City, Al Raha</p>
                        <p>• Yas Island, Saadiyat Island</p>
                        <p>• Al Reef, Al Shamkha</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Operating Hours</h4>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM</p>
                        <p><strong>Saturday:</strong> 9:00 AM - 6:00 PM</p>
                        <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                        <p><strong>Emergency:</strong> 24/7 Available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Banner */}
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold mb-2">Emergency Bosch Repair?</h4>
              <p className="mb-4">Our certified technicians are available 24/7 for urgent repairs across Abu Dhabi</p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Call Emergency Line
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}