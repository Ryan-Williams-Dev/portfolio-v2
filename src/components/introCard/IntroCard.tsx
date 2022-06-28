import { 
  Image,
  Box,
  Heading,
  Flex,
  Text
} from "@chakra-ui/react";

export default function IntroCard() {

  return(
    <Box display='flex' dir="row" justifyContent='space-evenly' width='100vw'>
      <Image src="images/me-main.jpg" maxWidth='40vw' fit='scale-down' borderRadius='3xl' />
      <Flex direction='column' height='100%' maxWidth='40vw'>
        <Heading>
          Ryan Williams
        </Heading>
        <Heading>
          Software Developer
        </Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius illo quasi reprehenderit ipsam facilis quia dolor magni praesentium, numquam minus, officiis dicta cumque non doloribus consequatur voluptates quaerat repellat adipisci.
        </Text>
      </Flex>
    </Box>
  )
}