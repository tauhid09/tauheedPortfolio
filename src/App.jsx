import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Highlights } from './components/Highlights/Highlights';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { useTheme, useScrollAnimation } from './hooks';
import { colorThemes, projects, certificates } from './data';
import LiquidEther from './components/Hero/LiquidEnter';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const { theme, colorTheme, toggleTheme } = useTheme();
  const { isScrolled, activeSection, scrollToSection } = useScrollAnimation();

  const colors = colorThemes[colorTheme].light;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'
      }`}>
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
      <div>
        <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
          <LiquidEther
            theme={theme}
            colors={
              theme === 'dark'
                ? ['#FFFFFF', '#87FCFF', '#87FCFF'] // dark theme colors
                : ['#c7c5c5', '#c7c5c5', '#c7c5c5'] // light theme colors
            }
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.7}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div>
          <Hero
            theme={theme}
            colors={colors}
            onScrollToSection={scrollToSection}
          />
        </div>
      </div>

      <About
        theme={theme}
        colors={colors}
      />

      <Highlights
        theme={theme}
        colors={colors}
        projects={projects}
        certificates={certificates}
      />

      <Contact
        theme={theme}
        colors={colors}
      />

      <Footer theme={theme} />
    </div>
  );
}

export default App;
