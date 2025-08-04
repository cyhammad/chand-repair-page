import FloatingActionButtons from "@/components/FloatingActionButtons";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceDetails from "@/components/ServiceDetails";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServiceDetails />
        <WhyChooseUs />
      </main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
