import { 
  Box,
  Heading,
  Stack,
  } from "@chakra-ui/react"
import NavLink from "./NavLink"
import { useEffect, useState } from "react";

export default function Navbar({ activeNavLinkId, setActiveNavLinkId, navLinks }: any) {


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
            activeNavLinkId={activeNavLinkId}
            setActiveNavLinkId={setActiveNavLinkId} 
            />
        )}
      </Stack>
    </Box>
  )  
}