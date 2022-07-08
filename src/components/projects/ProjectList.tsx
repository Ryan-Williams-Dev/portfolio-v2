import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectListInfoAndType"

import useSideScrollAnimattion from "../../hooks/useSideScrollAnimattion";

export default function ProjectList() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { bind, style } = useSideScrollAnimattion()
  const [currentProject, setCurrentProject] = useState(0)

  const listRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleScroll = ((event: WheelEvent, container: any) => {
    event.preventDefault()

    if (event.deltaY > 0 && currentProject < 3) {
      document.getElementById(`project${currentProject + 1}`)?.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"})
      setCurrentProject(currentProject + 1)
      console.log('curr proj ', currentProject)
    }
    if (event.deltaY < 0 && currentProject > 0) {
      document.getElementById(`project${currentProject - 1}`)?.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"})
      setCurrentProject(currentProject - 1)
      console.log('curr proj ', currentProject)
    }
    
  })

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
        ref={(ref: HTMLDivElement) => listRefs.current[index] = ref} 
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
