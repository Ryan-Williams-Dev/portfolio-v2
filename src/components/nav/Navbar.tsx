import { 
  Box,
  Heading,
  Stack,
  } from "@chakra-ui/react"
import NavLink from "./NavLink"

export default function Navbar() {

  return(
    <Box 
      display='flex'
      height={16}
      width='100vw'
      position='sticky'
      top='0'
      justifyContent='space-between'
      alignItems='center'
      backgroundColor='gray.700'
    >

      <Stack direction='row' spacing={4} alignItems='center' ml='8'>
        <Heading alignItems='center'
          color='teal.200'
          size='md'
        >Ryan Williams</Heading>
        <NavLink route="/" label="About Me" ></NavLink>
        <NavLink route="/" label="Work" ></NavLink>
        <NavLink route="/" label="Contact Me" ></NavLink>
        <NavLink route="/" label="Misc" ></NavLink>
      </Stack>
    </Box>
  )  
}