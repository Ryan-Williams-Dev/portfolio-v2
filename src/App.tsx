import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import Navbar from "./components/nav/Navbar"
import About from "./pages/About"
import Index from "./pages/Index"
import Projects from "./pages/Projects"
import { NavContext, NavProvider } from './context/navProvider';

export const App = () => {

  const [activeNavLinkId, setActiveNavLinkId] = useState('');
  const navLinks = [
    {navLinkId: 'About', scrollToId: 'aboutContainer'},
    {navLinkId: 'Projects', scrollToId: 'projectsContainer'},
    {navLinkId: 'Contact', scrollToId: 'contactContainer'},
    {navLinkId: 'Home', scrollToId: 'homeContainer'},
  ]


  return(
    <ChakraProvider theme={theme}>
      <NavProvider>
        <Box textAlign="center" fontSize="xl" display='flex' flexDirection='column' alignItems='center'>
          <Index  projectLink={navLinks[1]} activeNavLinkId={activeNavLinkId} setActiveNavLinkId={setActiveNavLinkId}/>
          <Navbar activeNavLinkId={activeNavLinkId} setActiveNavLinkId={setActiveNavLinkId} navLinks={navLinks} />
          <About  />
          <Projects  />
        </Box>
      </NavProvider>
    </ChakraProvider>
)
}
  
