import { useState, useEffect } from "react";

export const useOnScreen = (ref: { current: Element }) => {
  const [isOnScreen, setOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting),
    {
      threshold: 0.51,
    }
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [observer, ref]); // delete empty array if encountering nav problems

  return isOnScreen;
};
