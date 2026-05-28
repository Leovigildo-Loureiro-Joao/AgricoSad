import CarouselSection from '@/sections/home/CarouselSection';
import CTASection from '@/sections/home/CTASection';
import FeaturesSection from '@/sections/home/FeaturesSection';
import FooterSection from '@/sections/home/FooterSection';
import HeroSection from '@/sections/home/HeroSection';
import HowItWorksSection from '@/sections/home/HowItWorksSection';

function HomePage() {
  return (
    <main className="bg-white">
      <div id="home">
        <HeroSection />
      </div>
      <div id="recursos">
        <FeaturesSection />
      </div>
      <div id="como-funciona">
        <HowItWorksSection />
      </div>
      <div id="demonstracao">
        <CarouselSection />
      </div>
      <div id="contato">
        <CTASection />
      </div>
      <FooterSection />
    </main>
  );
}

export default HomePage;
