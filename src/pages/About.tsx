import { Flex, Heading, useDimensions } from "@chakra-ui/react"
import { useEffect } from "react"
import IntroCard from "../components/introCard/IntroCard"
import { useNav } from "../hooks/useNav"

export default function About(props: any) {

  const aboutRef = useNav('About')
  const { heightSubNav } = props;

  return (
    <Flex
      ref={aboutRef}
      id="aboutContainer"
      direction='column' 
      justifyContent='space-evenly' 
      alignItems='center' 
      width='100vw' 
      height={heightSubNav}
      pt={16}
    >
      <IntroCard/>
    </Flex>
  )
}
