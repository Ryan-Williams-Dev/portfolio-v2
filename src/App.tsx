import {
  ChakraProvider,
  Box,
  theme,
  Heading,
} from "@chakra-ui/react"
import IntroCard from "./components/introCard/IntroCard"
import Navbar from "./components/nav/Navbar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Navbar />
      <Heading>Ryan</Heading>
      <IntroCard/>
    </Box>
  </ChakraProvider>
)
