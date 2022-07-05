import { Heading, Image, Text } from "@chakra-ui/react";
import { Project } from "./ProjectListInfoAndType";
import { useSpring, animated } from "react-spring";

export default function ProjectCard(props: any) {

  const { imageLocation, title, description }: Project = props
  const { style } = props;

  return (
    <animated.div
    style={{...style,
      backgroundColor: 'transparent',
      flexShrink: '0',
      height: '100%',
      width: '80vw',
      borderRadius: '10px',
      marginRight: '10vw',
    }}
    >
        <Image fit='fill' src={imageLocation} />
        <Heading>{title}</Heading>
        <Text>{description}</Text>
    </animated.div>
  )
}
