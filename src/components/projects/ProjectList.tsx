import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { useScroll } from "react-use-gesture";
import { useSpring } from "react-spring";
import { projects } from "./ProjectListInfoAndType"

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = ((event: any, container: any) => {
    event.preventDefault()
    container.scrollLeft += event.deltaY;
  })

  useEffect(() => {
    const element = containerRef.current
    element?.addEventListener('wheel', (event) => {
      handleScroll(event, element)
    })
  }, [])

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

  return (
    <div
    ref={containerRef}
    style={{
      display: 'flex',
      overflowX: 'scroll',
      maxWidth: '100vw',
      paddingTop: '50px',
      paddingBottom: '50px',
      paddingLeft: '10vw',
      justifyContent: 'flex-start'
    }}
    {... bind()}
    >
      {projects.map((project, index) => {
        return(
        <ProjectCard key={index} {...project} style={style} />
        )
      })}
    </div>
  )
}
