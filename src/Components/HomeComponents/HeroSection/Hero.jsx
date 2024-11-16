import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import NavBar from "../NavBar";
import { loadSlim } from "@tsparticles/slim";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent"
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" }
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 }
        }
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: { enable: true, speed: 1, outModes: { default: "bounce" } },
        number: { density: { enable: true }, value: 200 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } }
      },
      detectRetina: true
    }),
    []
  );

  return (
    <div
      className="hero_section flex-1 flex flex-col min-h-screen relative"
      id="hero_section"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute top-0 left-0 w-full h-full "
      />

      {/* Overlay Content */}
      <div className="relative z-10 w-full">
        <NavBar />
        <div className="text-center text-white mt-20 flex flex-col items-center justify-center`">
          <h1 className="text-5xl font-bold font-heading text-golden heading">
            Every Bits Count
          </h1>
          <p
            className="mt-4 text-lg font-subheading subheading"
            data-aos="fade-down"
          >
            TRES Engineering the Best way to Succeed
          </p>
        </div>
        
      </div>
      <div className="absolute bottom-0  z-50 rotate-25">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgba(255,255,255,0.4)"
              fill-opacity="1"
              d="M0,32L40,42.7C80,53,160,75,240,112C320,149,400,203,480,240C560,277,640,299,720,261.3C800,224,880,128,960,90.7C1040,53,1120,75,1200,90.7C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
    </div>
  );
};

export default Hero;
