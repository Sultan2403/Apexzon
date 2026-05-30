import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { DominanceSection } from "./components/sections/DominanceSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProcessSection } from "./components/sections/ProcessSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { VisionMissionSection } from "./components/sections/VisionMissionSection";

function App() {
  return (
    <div className="min-h-screen bg-app-shell text-on-surface">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ServicesSection />
        <DominanceSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
