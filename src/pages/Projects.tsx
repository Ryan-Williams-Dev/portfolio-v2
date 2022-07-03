import { Flex, Heading } from "@chakra-ui/react";
import { useNav } from "../hooks/useNav";

export default function Projects() {

  const projectsRef = useNav('Projects')

  return (
    <Flex
      ref={projectsRef}
      id='projectsContainer'
      direction='column' 
      justifyContent='space-evenly' 
      alignItems='center' 
      height='100vh'
      pt={16}
    >
      <Heading>Projects</Heading>
      <Flex 
        justifyContent='space-between'
        width='80vw'
      >
        <Heading>Seek</Heading>
        <Heading>Scheduler</Heading>
      </Flex>
      <Flex 
        justifyContent='space-between'
        width='80vw'
      >
        <Heading>Decision Maker</Heading>
        <Heading>Jungle</Heading>
      </Flex>
    </Flex>
  )
}
