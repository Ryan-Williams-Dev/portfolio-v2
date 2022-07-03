import { Flex, Heading } from "@chakra-ui/react"
import IntroCard from "../components/introCard/IntroCard"
import { useNav } from "../hooks/useNav"

export default function About() {

  const aboutRef = useNav('About')

  return (
    <Flex
      ref={aboutRef}
      id="aboutContainer"
      direction='column' 
      justifyContent='space-evenly' 
      alignItems='center' 
      width='90vw' 
      height='100vh'
      pt={16}
    >
      <Heading pt={16}>About Me</Heading>
      <IntroCard/>
    </Flex>
  )
}
