import { useTheme } from "./hooks/useTheme";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Interests from "./components/Interests";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen font-body">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Interests />
        <Learning />
        <Projects />
        <Vision />
        <Contact />
      </main>
      <footer className="py-10 border-t hairline">
        <div className="container-lab flex flex-col items-center gap-4">
          <SocialLinks />
          <p className="text-xs text-ink-light/40 dark:text-ink-dark/40">
            Caleb Nyagah — built one iteration at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
