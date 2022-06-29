import { useEffect, useState } from "react";

// Reference: https://github.com/inorganik/countUp.js/blob/master/src/countUp.ts
const easingFn = (t, b, c, d) =>
  (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;

function useCountUp({ endNumber, duration, startNumber, decimalPlaces }) {
  const [state, setState] = useState(startNumber.toFixed(decimalPlaces));
  useEffect(() => {
    let frameNumber = startNumber;
    let startTime = null;
    function callback(timestamp) {
      if (startTime == null) {
        startTime = timestamp;
      }
      const progress = timestamp - startTime;

      frameNumber = easingFn(
        progress,
        startNumber,
        endNumber - startNumber,
        duration
      );
      if (frameNumber > endNumber) {
        frameNumber = endNumber;
      }
      frameNumber = Number(frameNumber.toFixed(decimalPlaces));
      setState(frameNumber);
      if (progress < duration) {
        window.requestAnimationFrame(callback);
      } else {
        setState(endNumber.toFixed(decimalPlaces));
      }
    }
    window.requestAnimationFrame(callback);
  }, [decimalPlaces, duration, endNumber, startNumber]);

  return {
    state,
  };
}

export default useCountUp;
