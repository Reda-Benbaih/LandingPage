import React from 'react';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';


function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* 1. Affichage de la Navbar */}
      <Navbar />
      <Hero />
      
      {/* 2. Le reste de vos sections viendra s'ajouter ici par la suite */}
      <main>
        {/* <Hero /> */}
        {/* <Features /> */}
        {/* <About /> */}
      </main>
    </div>
  );
}

export default App;