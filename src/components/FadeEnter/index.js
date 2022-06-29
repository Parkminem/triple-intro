import { useEffect, useRef, useState } from "react";

import useOnScreen from "../../hooks/useOnScreen";

const FadeEnter = ({ children, startTime = 0, duration = 700 }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setMounted(true);
    }
  }, [duration, isVisible, startTime]);

  if (!mounted) {
    return (
      <div
        style={{
          opacity: 0,
          transform: `translateY(10px)`,
        }}
        ref={ref}
      />
    );
  }

  return (
    <div
      style={{
        opacity: 1,
        transform: `translateY(0%)`,
        transition: `all ${duration}ms ease-in-out ${startTime}ms`,
      }}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default FadeEnter;
