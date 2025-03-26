import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React, { useEffect, useState, useMemo } from "react";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: {
      color: "#000000",
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    fpsLimit: 30, // Capped at 30fps
    particles: {
      number: {
        value: 25, // Reduced from 30
        density: {
          enable: false, // Disabled for performance
        },
      },
      color: {
        value: "#ff0777",
      },
      shape: {
        type: "square",
      },
      opacity: {
        value: {
          min: 0.3,
          max: 0.7 // More limited range
        },
      },
      size: {
        value: {
          min: 3,
          max: 5 // Slightly smaller
        },
      },
      move: {
        enable: true,
        speed: 1.5, // Slower movement
        direction: "none",
        outModes: {
          default: "bounce",
        },
        attract: {
          enable: false, // Disabled for performance
        },
      },
      collisions: {
        enable: false, // Disabled for stability
      },
      twinkle: {
        particles: {
          enable: false, // Disabled for performance
        },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: false,
        },
        onClick: {
          enable: false,
        },
        resize: {
          enable: true, // Safer resize handling
          delay: 100, // Debounce resize events
        },
      },
    },
    detectRetina: false, // Disabled for performance
    smooth: false, // Disabled for performance
  }), []);

  return init ? <Particles options={options} /> : null;
};

export default React.memo(ParticlesBackground);