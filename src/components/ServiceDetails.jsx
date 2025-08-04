import { Clock, Wrench, Users, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import CTAButtons from "./CTAButtons";

const ServiceDetails = () => {
  const services = [
    {
      title: "Refrigerator Repair",
      description:
        "Our refrigerator repair service covers a wide range of problems such as insufficient cooling, water leakage, noisy operation, and malfunctioning ice makers. Whether your fridge isn't maintaining temperature, experiencing power issues, or has a faulty thermostat, our certified technicians deliver prompt and accurate diagnostics using advanced tools. We specialize in replacing compressors, door seals, and evaporator coils with genuine parts to ensure long-lasting performance. Count on us to restore your refrigerator’s full functionality with efficient and cost-effective solutions tailored for all models.",
      image: "/fridge.jpg",
      features: [
        "Temperature Issues",
        "Ice Maker Repair",
        "Compressor Problems",
        "Door Seal Replacement",
      ],
    },
    {
      title: "Dishwasher Repair",
      description:
        "Our expert dishwasher repair service addresses cleaning inefficiencies, strange noises, water leakage, and error codes. Whether your dishwasher isn't draining, is leaving dishes dirty, or fails to start altogether, we quickly identify the root cause and apply proven solutions. Our team handles everything from clogged filters and faulty control boards to worn-out pumps and heating elements. We use only authentic parts and follow manufacturer guidelines to ensure your dishwasher runs efficiently, quietly, and consistently for years to come.",
      image: "/dishwasher.jpg",
      features: [
        "Poor Cleaning",
        "Water Drainage",
        "Control Panel",
        "Pump Replacement",
      ],
    },
    {
      title: "Oven Repair",
      description:
        "We provide comprehensive oven repair services that solve common and advanced issues including no heating, incorrect temperature readings, tripped fuses, and unresponsive control panels. Whether you're dealing with a broken heating element, a damaged door hinge, or a faulty self-cleaning function, our trained professionals are equipped with the right tools and experience to restore your oven. We work on both gas and electric ovens and guarantee safety, precision, and reliable performance using genuine replacement parts and diagnostic procedures.",
      image: "/oven.webp",
      features: [
        "Heating Elements",
        "Temperature Control",
        "Door Mechanisms",
        "Self-Clean Issues",
      ],
    },
    {
      title: "Stove/Cooktop Repair",
      description:
        "Our stove and cooktop repair service is ideal for resolving all types of burner, ignition, and temperature issues. Whether you’re using a gas or electric cooktop, we handle non-functioning burners, faulty spark igniters, broken knobs, and damaged wiring. We also address gas leaks, glass-top cracks, and flame control issues. Our technicians are highly skilled at performing safe, accurate repairs with minimum downtime using approved tools and components. Restore your cooking convenience and safety with our expert care.",
      image: "/cooktop.webp",
      features: [
        "Burner Problems",
        "Ignition Issues",
        "Control Knobs",
        "Gas Line Repairs",
      ],
    },
    {
      title: "Washing Machine Repair",
      description:
        "We specialize in washing machine repair services that tackle all functional issues including unbalanced spinning, blocked drainage, water leakage, and system errors. Our technicians are trained to diagnose problems in drum mechanisms, water inlet valves, motor assemblies, and electronic control units. Whether your washer is making unusual noises, failing mid-cycle, or displaying error codes, we provide reliable and efficient repair solutions. Using original parts, we ensure your washer runs smoothly, saves water, and extends its lifespan with every repair.",
      image: "/washing.webp",
      features: [
        "Spin Cycle Issues",
        "Water Problems",
        "Control Systems",
        "Drum Repairs",
      ],
    },
    {
      title: "Dryer Repair",
      description:
        "Our dryer repair experts solve a wide range of problems such as overheating, no heat, noisy drum, and poor airflow. We repair both vented and condenser dryers with precision, addressing issues in thermal fuses, heating elements, drum bearings, and blower motors. Whether your dryer won’t start, doesn’t stop, or leaves clothes damp, our repair process is quick, safe, and backed by a workmanship guarantee. We use genuine components and restore optimal performance to make laundry care hassle-free again.",
      image: "/dryer.jpg",
      features: [
        "Heating Problems",
        "Drum Issues",
        "Ventilation",
        "Timer Controls",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="px-4 mb-16 flex flex-col self-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Service Center UAE Services
        </h2>
        <p className="text-xl text-gray-600 mx-auto">
          Professional repair services for all home appliances with certified
          technicians, genuine parts, and comprehensive warranty coverage in
          UAE.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Years of Experience */}
        <div className="flex items-center px-3 py-3 rounded bg-gray-50 gap-5">
          <div className="text-3xl bg-gray-700 flex items-center gap-2 font-bold px-3 py-2 rounded-lg text-white">
            <Clock className="size-8" />
            <span>10</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Years of Experience</span>
            <span className="text-sm">
              We have been in the business for 10 years
            </span>
          </div>
        </div>

        {/* Number of Technicians */}
        <div className="flex items-center px-3 py-3 rounded bg-gray-50 gap-5">
          <div className="text-3xl bg-gray-700 flex items-center gap-2 font-bold px-3 py-2 rounded-lg text-white">
            <Users className="size-8" />
            <span>25</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Certified Technicians</span>
            <span className="text-sm">
              Our team of 25+ skilled professionals
            </span>
          </div>
        </div>

        {/* Number of Repairs Done */}
        <div className="flex items-center px-3 py-3 rounded bg-gray-50 gap-5">
          <div className="text-3xl bg-gray-700 flex items-center gap-2 font-bold px-3 py-2 rounded-lg text-white">
            <CheckCircle className="size-8" />
            <span>5K</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Successful Repairs</span>
            <span className="text-sm">
              Over 5,000 appliances repaired successfully
            </span>
          </div>
        </div>

        {/* Customer Satisfaction */}
        <div className="flex items-center px-3 py-3 rounded bg-gray-50 gap-5">
          <div className="text-3xl bg-gray-700 flex items-center gap-2 font-bold px-3 py-2 rounded-lg text-white">
            <span>100%</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold">Customer Satisfaction</span>
            <span className="text-sm">
              100% customer satisfaction rate
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-40 max-w-7xl self-center">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-5 w-full">
            <Image
              src={service.image}
              width={1200}
              height={1200}
              alt={service.title}
            />
            <div className="flex flex-col gap-5 w-full px-4">
              <span className="text-3xl font-bold">{service.title}</span>
              <span className="text-xl">{service.description}</span>
              <div className="flex w-full pt-10">
                <CTAButtons />
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col items-center w-full gap-7 justify-center">
          <div className="text-center text-3xl font-bold">Our Features</div>
          <div className="grid md:grid-cols-3 place-items-center gap-10 self-center w-full">
            <div className="flex flex-col items-center justify-center gap-4 max-w-[180px] text-center">
              <Image src="/handshake.svg" width={80} height={80} alt="icon" />
              <span className="text-2xl font-bold">Affordable Rates</span>
              <span className="text-center">
                Quality services does not have be heavy on your pocket. We offer
                reasonable pricing.
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 max-w-[180px] text-center">
              <Image src="/hearthand.svg" width={80} height={80} alt="icon" />
              <span className="text-2xl font-bold">Customer Satisfaction</span>
              <span className="text-center">
                Your satisfaction means everything to us. We ensure you are
                satisfied by the repairs done by us.
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 max-w-[180px] text-center">
              <Image src="/laptop.svg" width={80} height={80} alt="icon" />
              <span className="text-2xl font-bold">Certified Technicians</span>
              <span className="text-center">
                We have a certified team of home appliance repairs to handle all
                the issues in home appliances at professional level.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
