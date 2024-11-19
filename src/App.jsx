import React, { useEffect } from "react";
import Hero from "./Components/HomeComponents/HeroSection/Hero";
import Aos from "aos";
import "aos/dist/aos.css"
import Service from "./Components/HomeComponents/ServiceSection/Service";
import CeoSection from "./Components/HomeComponents/CeoSection";
import Success from "./Components/HomeComponents/Success";
export default function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div
      className="flex flex-col"
      id="homepage"
    >
      <div>
        <Hero />
        <Service />
        <CeoSection />
        <Success />
        <App />
      </div>
    </div>
  );
}
