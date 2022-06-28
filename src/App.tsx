import {
  ChakraProvider,
  Box,
  theme,
  calc,
} from "@chakra-ui/react"
import Navbar from "./components/nav/Navbar"
import About from "./pages/About"
import Index from "./pages/Index"
import Projects from "./pages/Projects"

export const App = () => {

  
  return(
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" display='flex' flexDirection='column' alignItems='center'>
        <Index />
        <Navbar />
        <About />
        <Projects />
      </Box>
    </ChakraProvider>
)
}
  
