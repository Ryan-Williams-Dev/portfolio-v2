import { Heading, Image, Text } from "@chakra-ui/react";
import { Project } from "./ProjectListInfoAndType";
import { animated } from "react-spring";
import { useRef } from "react";

export default function ProjectCard(props: any) {
  const { imageLocation, title, description }: Project = props;
  const { style, id } = props;

  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <animated.div
      id={id}
      style={{
        ...style,
        backgroundColor: "transparent",
        flexShrink: "0",
        height: "100%",
        width: "80vw",
        maxHeight: "80vh",
        borderRadius: "10px",
        overflow: "none",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: "15vh"
      }}
    >
      <Image fit="contain" maxHeight="50vh" src={imageLocation} ref={imageRef} />
      <Heading>{title}</Heading>
      <Text maxW={imageRef?.current?.clientWidth} >{description}</Text>
    </animated.div>
  );
}
