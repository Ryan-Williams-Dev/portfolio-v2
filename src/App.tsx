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
import { NavProvider } from './context/navProvider';

export const App = () => {

  return(
    <ChakraProvider theme={theme}>
      <NavProvider>
        <Box textAlign="center" fontSize="xl" display='flex' flexDirection='column' alignItems='center'>
          <Index />
          <Navbar />
          <About  />
          <Projects  />
        </Box>
      </NavProvider>
    </ChakraProvider>
)
}
  
