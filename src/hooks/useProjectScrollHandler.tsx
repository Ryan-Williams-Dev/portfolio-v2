import { useState } from "react";

const delay = 900;

export default function useProjectScrollHandler() {
  const [currentProject, setCurrentProject] = useState(0);
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = (event: WheelEvent, container: any) => {
    if (
      event.deltaY > 0 &&
      currentProject === 3 &&
      lastScroll < Date.now() - delay
    ) {
      return;
    }
    if (
      event.deltaY < 0 &&
      currentProject === 0 &&
      lastScroll < Date.now() - delay
    ) {
      return;
    }
    event.preventDefault();
    if (lastScroll >= Date.now() - delay) {
      return;
    }

    if (event.deltaY > 0 && currentProject < 3) {
      document.getElementById(`project${currentProject + 1}`)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setCurrentProject((prev) => prev + 1);
      setLastScroll(Date.now());
    }
    if (event.deltaY < 0 && currentProject > 0) {
      document.getElementById(`project${currentProject - 1}`)?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      setCurrentProject((prev) => prev - 1);
      setLastScroll(Date.now());
    }
  };

  return { handleScroll, currentProject };
}
