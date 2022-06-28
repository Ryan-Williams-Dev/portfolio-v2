import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import Navbar from "./components/nav/Navbar"
import About from "./pages/About"
import Index from "./pages/Index"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Index />
      <Navbar />
      <About />
    </Box>
  </ChakraProvider>
)
