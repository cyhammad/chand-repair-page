import { Wrench } from "lucide-react";
import Image from "next/image";
import React from "react";
import CTAButtons from "./CTAButtons";

const ServiceDetails = () => {
  const services = [
    {
      title: "Bosch Refrigerator Repair",
      description:
        "Our Bosch refrigerator repair service covers a wide range of problems such as insufficient cooling, water leakage, noisy operation, and malfunctioning ice makers. Whether your fridge isn't maintaining temperature, experiencing power issues, or has a faulty thermostat, our certified technicians deliver prompt and accurate diagnostics using advanced tools. We specialize in replacing compressors, door seals, and evaporator coils with genuine Bosch parts to ensure long-lasting performance. Count on us to restore your refrigerator’s full functionality with efficient and cost-effective solutions tailored for all Bosch models.",
      image: "/fridge.webp",
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
        "Our expert Bosch dishwasher repair service addresses cleaning inefficiencies, strange noises, water leakage, and error codes. Whether your dishwasher isn't draining, is leaving dishes dirty, or fails to start altogether, we quickly identify the root cause and apply proven solutions. Our team handles everything from clogged filters and faulty control boards to worn-out pumps and heating elements. We use only authentic Bosch parts and follow manufacturer guidelines to ensure your dishwasher runs efficiently, quietly, and consistently for years to come.",
      image: "/dishwasher.jpg",
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
        "We provide comprehensive Bosch oven repair services that solve common and advanced issues including no heating, incorrect temperature readings, tripped fuses, and unresponsive control panels. Whether you're dealing with a broken heating element, a damaged door hinge, or a faulty self-cleaning function, our trained professionals are equipped with the right tools and experience to restore your oven. We work on both gas and electric ovens and guarantee safety, precision, and reliable performance using genuine Bosch replacement parts and diagnostic procedures.",
      image: "/oven.webp",
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
        "Our Bosch stove and cooktop repair service is ideal for resolving all types of burner, ignition, and temperature issues. Whether you’re using a gas or electric cooktop, we handle non-functioning burners, faulty spark igniters, broken knobs, and damaged wiring. We also address gas leaks, glass-top cracks, and flame control issues. Our technicians are highly skilled at performing safe, accurate repairs with minimum downtime using Bosch-approved tools and components. Restore your cooking convenience and safety with our expert care.",
      image: "/cooktop.webp",
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
        "We specialize in Bosch washing machine repair services that tackle all functional issues including unbalanced spinning, blocked drainage, water leakage, and system errors. Our technicians are trained to diagnose problems in drum mechanisms, water inlet valves, motor assemblies, and electronic control units. Whether your washer is making unusual noises, failing mid-cycle, or displaying error codes, we provide reliable and efficient repair solutions. Using original Bosch parts, we ensure your washer runs smoothly, saves water, and extends its lifespan with every repair.",
      image: "/washing.webp",
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
        "Our Bosch dryer repair experts solve a wide range of problems such as overheating, no heat, noisy drum, and poor airflow. We repair both vented and condenser dryers with precision, addressing issues in thermal fuses, heating elements, drum bearings, and blower motors. Whether your dryer won’t start, doesn’t stop, or leaves clothes damp, our repair process is quick, safe, and backed by a workmanship guarantee. We use genuine Bosch components and restore optimal performance to make laundry care hassle-free again.",
      image: "/dryer.webp",
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
          Bosch Repair Center UAE Services
        </h2>
        <p className="text-xl text-gray-600 mx-auto">
          Professional repair services for all Bosch home appliances with
          certified technicians, genuine parts, and comprehensive warranty
          coverage in UAE.
        </p>
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
      </div>
    </div>
  );
};

export default ServiceDetails;
