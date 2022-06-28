import { Flex, Heading } from "@chakra-ui/react"
import IntroCard from "../components/introCard/IntroCard"

export default function About() {
  return (
    <Flex display='flex' direction='column' justifyContent='space-evenly' alignItems='center' height='100vh'>
      <Heading pt={16}>Ryan Williams - Software Developer</Heading>
      <IntroCard/>
    </Flex>
  )
}
