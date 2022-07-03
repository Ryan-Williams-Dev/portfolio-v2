import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { useContext } from "react";
import { NavContext } from "../context/navProvider";
import { useNav } from "../hooks/useNav";
import navLinks from "../components/nav/NavLinks";
import navClickHandler from "../helpers/navClickHandler";

export default function Index() {

  const homeRef = useNav('Home')
  const { setActiveNavLinkId } = useContext(NavContext)
  const { navLinkId, scrollToId } = navLinks[1]

  return (
    <Flex 
      ref={homeRef}
      id='homeContainer'
      direction='column' 
      justifyContent='center' 
      alignItems='center' 
      height='100vh' 
    >
      <Heading fontSize='5xl'>
        Hello, I am <Heading fontSize='5xl' as='span' color='teal.200' >Ryan Williams</Heading>.
      </Heading>
      <Heading fontSize='5xl'>
        I am a full stack developer.
      </Heading>
      <Button 
        variant='outline' 
        borderColor='teal.500' 
        mt={3} 
        _hover={{bgColor: 'teal.500'}} 
        fontSize='2xl' 
        rightIcon={<ArrowForwardIcon ml={5} />}
        p={8}
        onClick={() => navClickHandler(navLinkId, scrollToId, setActiveNavLinkId)}
      >
        <Text pb={1.5}>
          Take a look at my projects
        </Text>
      </Button>
    </Flex>
  )
}
