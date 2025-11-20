import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Highlights } from './components/Highlights/Highlights';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { useTheme, useScrollAnimation } from './hooks';
import { colorThemes, projects, certificates, education, achievements } from './data';
import ColorBends from './components/Hero/ColorBends';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const { theme, colorTheme, toggleTheme } = useTheme();
  const { isScrolled, activeSection, scrollToSection } = useScrollAnimation();

  // Always use dark theme styling since light mode is disabled
  const colors = colorThemes[colorTheme].light;

  return (
    <div className={`min-h-screen duration-300 bg-transparent`}>
      {/* Global ColorBends background */}
      <div className="fixed inset-0 z-0">
        <ColorBends
          colors={["#FF0000", "#00FF00", "#0000FF"]}
          rotation={150}
          speed={1}
          scale={4}
          frequency={0.2}
          warpStrength={1.2}
          mouseInfluence={1}
          parallax={0.6}
          noise={0.08}
          transparent={false}
        />
      </div>
      
      <div className='flex justify-center' >
        <Navigation
          theme={theme}
          colors={colors}
          isScrolled={isScrolled}
          activeSection={activeSection}
          onToggleTheme={toggleTheme}
          onScrollToSection={scrollToSection}
        />
      </div>
      
      <div className="relative z-10">
        <div id="home-section">
          <Hero
            theme={theme}
            colors={colors}
            onScrollToSection={scrollToSection}
          />
        </div>

        <div id="about-section">
          <About
            theme={theme}
            colors={colors}
          />
        </div>

        <div id="highlights-section">
          <Highlights
            theme={theme}
            colors={colors}
            projects={projects}
            certificates={certificates}
            education={education}
            achievements={achievements}
          />
        </div>

        <div id="contact-section">
          <Contact
            theme={theme}
            colors={colors}
          />
        </div>

        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default App;