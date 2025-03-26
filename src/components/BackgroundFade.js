import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

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
    background: { color: "#000" },
    fullScreen: { zIndex: -1 },
    particles: {
      number: { value: 20 }, // Ultra-low count
      color: { value: "#ff5500" }, // Single color
      shape: { type: "square" },
      opacity: { value: 0.5 },
      size: { value: 3 }, // Fixed small size
      move: {
        enable: true,
        speed: 1.5,
        direction: "right", // Simple left-to-right
        outModes: "destroy" // Disappear at edges
      }
    },
    emitters: {
      direction: "right",
      rate: { delay: 0.3, quantity: 1 }, // Slow emission
      position: { x: -10, y: "random" } // Start off left edge
    }
  }), []);

  return init ? <Particles options={options} /> : null;
};

export default ParticlesBackground;