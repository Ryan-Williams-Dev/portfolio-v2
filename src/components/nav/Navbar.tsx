import { 
  Box,
  Heading,
  Stack,
  } from "@chakra-ui/react"
import NavLink from "./NavLink"
import navLinks from "./NavLinks";

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
        {navLinks?.map(
          ({navLinkId, scrollToId}: any) =>
            <NavLink 
            navLinkId={navLinkId} 
            scrollToId={scrollToId} 
            />
        )}
      </Stack>
    </Box>
  )  
}
