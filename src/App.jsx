import React from 'react';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      
      
      <main>
        <Hero />
        <Features/>
        <About />
        <Testimonials />
        <Contact/>
        <Footer/>
        <ScrollToTop/>
      </main>
    </div>
  );
}

export default App;