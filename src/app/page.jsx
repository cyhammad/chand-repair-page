import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingActionButtons from "@/components/FloatingActionButtons";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MaintenanceSection from "@/components/MaintenanceSection";
import ServiceDetails from "@/components/ServiceDetails";
import ServicesSection from "@/components/ServicesSection";
import WarrantySection from "@/components/WarrantySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServiceDetails />
        {/* <ServicesSection /> */}
        {/* <AboutSection /> */}
        {/* <WarrantySection /> */}
        {/* <MaintenanceSection /> */}
        {/* <ContactSection /> */}
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
