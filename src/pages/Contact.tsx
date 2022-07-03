import { Flex, Heading } from "@chakra-ui/react"
import { useNav } from "../hooks/useNav"

export default function Contact() {

  const contactRef = useNav('Contact')

  return (
    <Flex
      ref={contactRef}
      id="contactContainer"
      direction='column' 
      justifyContent='space-evenly' 
      alignItems='center' 
      width='90vw' 
      height='100vh'
      pt={16}
    >
      <Heading>Contact Me</Heading>
    </Flex>
  )
}
