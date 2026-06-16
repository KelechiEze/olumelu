import { useState } from "react";
import Preloader from "./components/Preloader";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SupportersSection from "./components/SupportersSection";
import CausesSection from "./components/CausesSection";
import ImpactSection from "./components/ImpactSection";
import HelpSection from "./components/HelpSection";
import TestimonialSection from "./components/TestimonialSection";
import JoinUsSection from "./components/JoinUsSection";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const scrollToAbout = () => {
    const aboutSectionElement = document.getElementById("about");
    if (aboutSectionElement) {
      aboutSectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-[#00BA54] selection:text-white overflow-x-hidden antialiased font-sans">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <div className="relative">
          <HeroSection onLearnMoreClick={scrollToAbout} />
          <AboutSection />
          <SupportersSection />
          <CausesSection />
          <ImpactSection />
          <HelpSection />
          <TestimonialSection />
          <JoinUsSection />
          <Footer />
        </div>
      )}
    </div>
  );
}
