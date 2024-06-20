import React from "react";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
// import Whatsapp from "./components/whatsapp"; 
const LandingPage = () => {
  return (
    <div>
     <Navbar />
      {/* <Whatsapp />  */}
      <Home />
      <About />
      <Services />
      <Footer /> 
    </div>
  )
}