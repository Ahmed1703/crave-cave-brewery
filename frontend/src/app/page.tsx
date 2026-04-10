import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import BeerPanels from "@/components/BeerPanels";
import BrewingSection from "@/components/BrewingSection";
import ProcessSection from "@/components/ProcessSection";
import StorySection from "@/components/StorySection";
import TeamSection from "@/components/TeamSection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfoBar />
      <BeerPanels />
      <BrewingSection />
      <ProcessSection />
      <StorySection />
      <TeamSection />
      <VisitSection />
      <Footer />
    </main>
  );
}
