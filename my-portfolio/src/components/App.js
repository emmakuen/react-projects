import Navbar from "./navbar/Navbar";
import IntroSection from "./intro/IntroSection";
import AboutSection from "./about/AboutSection";
import PortfolioList from "./portfolio/PortfolioList";
import * as React from "react";
function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <AboutSection />
      <PortfolioList />
    </div>
  );
}

export default App;
