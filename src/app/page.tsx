import ScarcityBanner from "@/components/ScarcityBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConversionSection from "@/components/ConversionSection";
import PivotFeature from "@/components/PivotFeature";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ScarcityBanner />
      <Navbar />
      
      <Hero />
      
      <div id="services" className="py-20" />
      
      <ConversionSection />
      
      <PivotFeature />
      
      <Testimonials />
      
      <Footer />
      
      <FloatingCTA />
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 h-full w-full bg-navy" />
        <div className="absolute top-[20%] left-[-10%] h-[600px] w-[600px] bg-cyan/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[10%] right-[-5%] h-[500px] w-[500px] bg-gold/5 blur-[120px] rounded-full opacity-30" />
      </div>
    </main>
  );
}
