import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";

export default async function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
    </>
  )
};