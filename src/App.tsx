import "./styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";
import Navbar from "./components/nav/Navbar";
import About from "./pages/About";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import { NavProvider } from "./context/navProvider";
import Contact from "./pages/Contact";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";

export const App = () => {
  const navBarRef = useRef<HTMLDivElement>(null);
  const { height } = useWindowDimensions();
  const [heightSubNav, setHeightSubNav] = useState(0);
  const [heightNav, setHeightNav] = useState(0);

  useEffect(() => {
    if (navBarRef.current) {
      setHeightSubNav(height - navBarRef.current?.clientHeight);
      setHeightNav(height - navBarRef.current?.clientHeight);
      console.log(heightSubNav);
    }
  }, [navBarRef.current, setHeightNav, height]);

  return (
    <ChakraProvider theme={theme}>
      <NavProvider>
        <Box
          textAlign="center"
          fontSize="xl"
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor='gray.800'
        >
          <Index />
          <Navbar ref={navBarRef} />
          <About heightSubNav={heightSubNav} heightNav={heightNav} />
          <Projects />
          <Contact />
        </Box>
      </NavProvider>
    </ChakraProvider>
  );
};
