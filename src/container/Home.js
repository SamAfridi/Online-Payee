import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import HowitWork from "./HowitWork";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Footer from "./Footer";


function Home() {
  return (
    <div>
    
        <NavBar />
        <Header />
        <HowitWork />
        <AboutUs />
        <Services />
        <ContactUs />
        <Footer />
        
      
    </div>
  );
}

export default Home;