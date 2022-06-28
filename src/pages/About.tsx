import { Flex, Heading } from "@chakra-ui/react"
import IntroCard from "../components/introCard/IntroCard"

export default function About() {
  return (
    <Flex 
      display='flex' 
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
