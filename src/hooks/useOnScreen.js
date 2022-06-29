import { useEffect, useState } from "react";

// Reference: https://stackoverflow.com/a/65008608
function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = new window.IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  return isIntersecting;
}

export default useOnScreen;
