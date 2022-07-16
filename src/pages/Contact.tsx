import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useNav } from "../hooks/useNav";

export default function Contact() {
  const contactRef = useNav("Contact");

  return (
    <Flex
      ref={contactRef}
      id="contactContainer"
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      width="90vw"
      height="100vh"
      pt={16}
    >
      <Flex direction="column" gap="2">
        <Heading>Contact Me</Heading>
        <Text>
          Don't hesitate to reach out to me and find out what we can build
          together
        </Text>
      </Flex>
    </Flex>
  );
}
