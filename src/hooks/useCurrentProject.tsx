import { useState, useEffect } from "react";

export const useOnScreen = (element: Element) => {
  const [isOnScreen, setOnScreen] = useState(false);

  const observer = new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting),
    {
      threshold: 0.51,
    }
  );

  useEffect(() => {
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  return isOnScreen;
};
