import { useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";


export default function useSideScrollAnimattion() {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));
  
  const clamp = (value: number, clampAt: number = 10) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };
  
  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });

  return {bind, style}
}