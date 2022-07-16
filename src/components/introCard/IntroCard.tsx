import { Image, Box, Heading, Flex, Text } from "@chakra-ui/react";

export default function IntroCard() {
  return (
    <Box
      display="flex"
      dir="row"
      justifyContent="space-evenly"
      width="100vw"
      height="100%"
    >
      <Image src="images/me-main.jpg" height="100%" width="50%" fit="cover" />
      <Flex
        direction="column"
        justifyContent="center"
        height="100%"
        width="50vw"
        p="3"
        overflowY="scroll"
      >
        <Heading>Get to know me a little</Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius illo
          quasi reprehenderit ipsam facilis quia dolor magni praesentium,
          numquam minus, officiis dicta cumque non doloribus consequatur
          voluptates quaerat repellat adipisci.
        </Text>
      </Flex>
    </Box>
  );
}
