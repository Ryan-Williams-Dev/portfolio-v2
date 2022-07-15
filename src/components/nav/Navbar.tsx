import { 
  Box,
  Heading,
  Stack,
  } from "@chakra-ui/react"
import NavLink from "./NavLink"
import navLinks from "./NavLinks";
import { ForwardedRef, forwardRef } from "react";

const Navbar = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {

  return(
    <Box 
      ref={ref}
      display='flex'
      height={16}
      width='100vw'
      position='sticky'
      top='0'
      justifyContent='space-between'
      alignItems='center'
      backgroundColor='gray.700'
      zIndex={2}
    >

      <Stack direction='row' spacing={4} alignItems='center' ml='8'>
        <Heading alignItems='center'
          color='teal.200'
          size='md'
        >Ryan Williams</Heading>
        {navLinks?.map(
          ({navLinkId, scrollToId}: any, index) =>
            <NavLink 
            key={index}
            navLinkId={navLinkId} 
            scrollToId={scrollToId} 
            />
        )}
      </Stack>
    </Box>
  )  
})

export default Navbar