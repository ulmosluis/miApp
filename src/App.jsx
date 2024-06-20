// App.jsx

import React from 'react';
import Home from './Home';
import Services from './Services';
import About from './About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Whatsapp />
      <div className="container mx-auto mt-4">
        <Home />
        <About />
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default App;
