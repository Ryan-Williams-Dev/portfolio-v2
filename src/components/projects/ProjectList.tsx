import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectListInfoAndType"

import useSideScrollAnimattion from "../../hooks/useSideScrollAnimattion";

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null)

  const listRefs = useRef([]) 

  const handleScroll = ((event: WheelEvent, container: any) => {
    event.preventDefault()
    // container.scrollLeft += event.deltaY;
    if(event.deltaY > 0) {
      
    }
  })

  useEffect(() => {
    const element = containerRef.current
    element?.addEventListener('wheel', (event) => {
      handleScroll(event, element)
    })
  }, [])

  const { bind, style } = useSideScrollAnimattion()

  return (
    <div
    ref={containerRef}
    style={{
      display: 'flex',
      overflowX: 'scroll',
      maxWidth: '100vw',
      paddingTop: '75px',
      paddingBottom: '75px',
      paddingLeft: '10vw',
      justifyContent: 'flex-start'
    }}
    {... bind()}
    >
      {projects.map((project, index) => {
        return(
        <ProjectCard ref={listRefs.current[index]} key={index} {...project} style={style} />
        )
      })}
    </div>
  )
}
