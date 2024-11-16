import React, { useEffect } from "react";
import Hero from "./Components/HomeComponents/HeroSection/Hero";
import Aos from "aos";
import "aos/dist/aos.css"
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
      </div>
    </div>
  );
}
