import { Heading, Image, Text } from "@chakra-ui/react";
import { Project } from "./ProjectListInfoAndType";
import { animated } from "react-spring";

export default function ProjectCard(props: any) {

  const { imageLocation, title, description }: Project = props
  const { style, ref, id } = props;

  return (
    <animated.div
    ref={ref}
    id={id}
    style={{...style,
      backgroundColor: 'transparent',
      flexShrink: '0',
      height: '100%',
      width: '80vw',
      maxHeight: '80vh',
      borderRadius: '10px',
      overflow: 'none'
    }}
    >
        <Image fit='contain' maxHeight='50vh' src={imageLocation} />
        <Heading>{title}</Heading>
        <Text>{description}</Text>
    </animated.div>
  )
}
