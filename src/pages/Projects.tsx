import { Flex, Heading } from "@chakra-ui/react";
import ProjectList from "../components/projects/ProjectList";
import { useNav } from "../hooks/useNav";

export default function Projects() {
  const projectsRef = useNav("Projects");

  return (
    <Flex
      ref={projectsRef}
      id="projectsContainer"
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      minHeight="100vh"
      pt={16}
      bgColor="gray.900"
    >
      <Heading>Projects</Heading>

      <ProjectList />
    </Flex>
  );
}
