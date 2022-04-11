import Navbar from "./navbar/Navbar";
import IntroSection from "./intro/IntroSection";
import AboutSection from "./about/AboutSection";
import PortfolioList from "./portfolio/PortfolioList";
import ContactSection from "./contact/ContactSection";
import Footer from "./footer/Footer";
import * as React from "react";
import { useTheme } from "../contexts/useTheme";
import Particles from "./Particles/Particles";
function App() {
  const { theme } = useTheme();
  return (
    <div data-theme={theme} className="App">
      <Particles />
      <Navbar />
      <IntroSection />
      <AboutSection />
      <PortfolioList />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
