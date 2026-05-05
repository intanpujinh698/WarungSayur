import Navbar from "@/components/warung/Navbar";
import HeroSection from "@/components/warung/HeroSection";
import PromoStrip from "@/components/warung/PromoStrip";
import CategorySection from "@/components/warung/CategorySection";
import PromoBanner from "@/components/warung/PromoBanner";
import FeaturedProducts from "@/components/warung/FeaturedProducts";
import FeaturedSellers from "@/components/warung/FeaturedSellers";
import HowItWorks from "@/components/warung/HowItWorks";
import Footer from "@/components/warung/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <PromoStrip />
        <CategorySection />
        <PromoBanner />
        <FeaturedProducts />
        <FeaturedSellers />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
