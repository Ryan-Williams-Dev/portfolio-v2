import { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectListInfoAndType"
import useProjectScrollHandler from '../../hooks/useProjectScrollHandler'

import useSideScrollAnimattion from "../../hooks/useSideScrollAnimattion";

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { bind, style } = useSideScrollAnimattion()
  const { currentProject, handleScroll } = useProjectScrollHandler()

  const handleScrollRef = useRef(handleScroll)
  useEffect(()=>{
    handleScrollRef.current = handleScroll;
  },[handleScroll])

  useEffect(() => {
    const element = containerRef.current
    const funct = ((event: WheelEvent) => handleScrollRef.current(event, element));
    element?.addEventListener('wheel', funct)

    return () =>  element?.removeEventListener('wheel', funct)
  }, [currentProject])

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
      paddingRight: '10vw',
      gap: '20vw',
      justifyContent: 'flex-start'
    }}
    {... bind()}
    >
      {projects.map((project, index) => {
        return(
        <ProjectCard
        key={index}
        id={`project${index}`}
        {...project}
        style={style} 
        />
        )
      })}
    </div>
  )
}
