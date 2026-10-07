import { MusicProvider } from './context/MusicContext';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyVisit } from './components/WhyVisit';
import { Specialties } from './components/Specialties';
import { KpopVibes } from './components/KpopVibes';
import { TheVibe } from './components/TheVibe';
import { InteractiveMenu } from './components/InteractiveMenu';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { VisitUs } from './components/VisitUs';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

export function App() {
  return (
    <MusicProvider>
      {/* Cinematic Splash Screen Experience */}
      <SplashScreen />

      <div className="min-h-screen bg-[#FAF6ED] text-espresso-900 selection:bg-kpink selection:text-white relative">
        {/* Editorial Café Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <WhyVisit />
          <Specialties />
          <KpopVibes />
          <TheVibe />
          <InteractiveMenu />
          <Reviews />
          <Gallery />
          <VisitUs />
          <FinalCTA />
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Navigation */}
        <MobileBottomNav />
      </div>
    </MusicProvider>
  );
}

export default App;
