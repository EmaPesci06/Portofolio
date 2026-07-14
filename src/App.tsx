import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className='min-h-screen bg-slate-50 font-sans text-slate-900 antialiased selection:bg-indigo-500/30 dark:bg-slate-950 dark:text-slate-100'>
        <Navbar />
        <Hero />
        <main>
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
