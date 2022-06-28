import { 
  Image,
  Box,
  Heading,
} from "@chakra-ui/react";

export default function IntroCard() {

  return(
    <Box maxWidth='50vw' >
      <Image src="images/me-main.jpg" boxSize='auto' fit='contain' borderRadius='lg' boxShadow='2xl' />
      <Heading>
        Ryan Williams
      </Heading>
      <Heading>
        Software Developer
      </Heading>
    </Box>
  )
}