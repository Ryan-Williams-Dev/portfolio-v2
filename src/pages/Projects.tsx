import { Flex, Heading } from "@chakra-ui/react";

export default function Projects() {
  return (
    <Flex
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
