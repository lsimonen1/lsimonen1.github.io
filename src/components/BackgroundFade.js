import { useEffect, useState } from "react";

export function BackgroundFade() {
  const [color1, setColor1State] = useState(151);
  const [color2, setColor2State] = useState(171);
  const [counter, setCounterState] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setColor1State((prevColor1) => {
        // Check bounds for color1 and adjust counter if necessary
        if (prevColor1 >= 250) {
            setCounterState(-1); // Set counter to negative
          } else if (prevColor1 <= 150) {
            setCounterState(1); // Set counter to positive
          }
        return prevColor1 + counter; // Update color1 based on current counter
      });

      setColor2State((prevColor1) => prevColor1 + 20); // Update color2 relatively
    }, 80);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [counter]); // Dependency array includes counter to track direction changes

  return (
<div
  style={{
    background: `linear-gradient(to bottom right, rgba(10, ${color1}, ${color1 / 2}, 0.8), rgba(${color1 / 3}, ${color2 / 1.7}, ${color2 / 1.3}, 0.8))`
  }}
></div>
  );

}

export default BackgroundFade

