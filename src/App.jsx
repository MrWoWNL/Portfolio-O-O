
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import portfolioData from './data/portfolioData';
import { useEffect } from 'react';


function App() {
  // Set page metadata
  useEffect(() => {
    document.title = portfolioData.seo.title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', portfolioData.seo.description);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', portfolioData.seo.keywords);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
