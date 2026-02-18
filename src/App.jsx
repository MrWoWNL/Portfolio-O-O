
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
import Snowfall from 'react-snowfall';


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
    <div className="relative min-h-screen bg-slate-950 text-slate-100">

      <Snowfall
        color="#014e6d"
        snowflakeCount={200}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
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

    </div>
  );


}

export default App;
