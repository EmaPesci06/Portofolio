import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AiProducts } from "./components/AiProducts";
import { Ecommerce } from "./components/Ecommerce";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className='min-h-screen overflow-x-hidden bg-paper font-sans text-ink antialiased selection:bg-cobalt/25'>
          <Navbar />
          <main className='pt-16'>
            <Hero />
            <AiProducts />
            <Ecommerce />
            <Projects />
            <Stack />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
