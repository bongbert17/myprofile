import React from 'react';

// Import Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import Section Components (All now standardized to .tsx)
import Master from './sections/Master';
import About from './sections/About';
import Skill from './sections/Skill';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

// Main application component combining all parts
const App: React.FC = () => {
  // Note: The dark mode logic is now fully managed within the Header component's Firebase useEffect.
  
  return (
    <div className="min-h-screen font-sans antialiased transition-colors duration-500">
      <Header />
      
      <main className="pt-16"> 
        {/* The pt-16 ensures content starts below the fixed header */}
        <Master />
        <About />
        <Skill />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;