import "./styles/globals.css"
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
import Contact from "./pages/Contact"
import { useEffect, useRef, useState } from "react"
import useWindowDimensions from "./hooks/useWindowDimensions"

export const App = () => {

  const navBarRef = useRef<HTMLDivElement>(null)
  const { height } = useWindowDimensions()
  const [ heightSubNav, setHeightSubNav ] = useState(0)

  useEffect(() => {
    if (navBarRef.current) {
      setHeightSubNav(height - navBarRef.current?.clientHeight)
      console.log(heightSubNav)
    }
  }, [navBarRef.current])

  return(
    <ChakraProvider theme={theme}>
      <NavProvider>
        <Box textAlign="center" fontSize="xl" display='flex' flexDirection='column' alignItems='center'>
          <Index />
          <Navbar ref={navBarRef} />
          <About  heightSubNav={heightSubNav} />
          <Projects  />
          <Contact />
        </Box>
      </NavProvider>
    </ChakraProvider>
)
}
  
