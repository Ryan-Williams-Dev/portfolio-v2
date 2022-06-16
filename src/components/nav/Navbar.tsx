import { useState, useEffect } from "react";
import { 
  Box,
  useColorModeValue,
  Heading,
  Stack,
  Slide,
 } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../ColorModeSwitcher"
import NavLink from "./NavLink"

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { 
        setShow(false); 
      } else {
        setShow(true);  
      }

      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return(
    <Slide
      direction="top"
      in={show}
    >
      <Box 
        display='flex'
        height={16}
        width='100vw'
        position='fixed'
        justifyContent='space-between'
        alignItems='center'
        backgroundColor={useColorModeValue('teal.50', 'whiteAlpha.100')}
        px={4}
      >

        <Stack direction='row' spacing={4} alignItems='center'>
          <Heading alignItems='center'
            color={useColorModeValue('teal.900', 'teal.200')}
            size='md'
          >Ryan Williams</Heading>
          <NavLink route="/" label="About Me" ></NavLink>
          <NavLink route="/" label="Work" ></NavLink>
          <NavLink route="/" label="Contact Me" ></NavLink>
          <NavLink route="/" label="Misc" ></NavLink>
        </Stack>
        <ColorModeSwitcher/>
      </Box>
    </Slide>

  )  
}