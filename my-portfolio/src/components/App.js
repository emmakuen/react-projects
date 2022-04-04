import IntroSection from "./intro/IntroSection";
import AboutSection from "./about/AboutSection";
import Navbar from "./navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroSection />
      <AboutSection />
    </div>
  );
}

export default App;
