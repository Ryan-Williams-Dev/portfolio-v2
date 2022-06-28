import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"


export default function Index() {
  return (
    <Flex 
      display='flex' 
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
      >
        <Text pb={1.5}>
          Take a look at my projects
        </Text>
      </Button>
    </Flex>
  )
}
