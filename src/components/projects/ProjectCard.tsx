import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Project } from "./ProjectList";
import { useSpring, animated } from "react-spring";
import { styled } from "@chakra-ui/react";

export default function ProjectCard({title, imageLocation, description}: Project) {

  const style = useSpring({
    from: {
      transform: "rotateY(0deg)"
    },
    transform: "rotateY(25deg)"
  });

  return (
    <animated.div
    style={{...style,
      backgroundColor: '#2D3748',
      flexShrink: '0',
      maxWidth: '100%',
      borderRadius: '10px',
      marginLeft: '10px',
    }}
    >
      <Image src={imageLocation} />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </animated.div>
  )
}
