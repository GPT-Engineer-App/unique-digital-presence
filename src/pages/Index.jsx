import { Container, VStack, Heading, Text, Link, Image, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTUwMDgwMTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        <Heading as="h1" size="xl">
          John Doe
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Software Developer | React Specialist | Open Source Contributor
        </Text>
        <VStack spacing={3}>
          <Link href="https://www.linkedin.com/in/johndoe" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/johndoe" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="gray">
              GitHub
            </Button>
          </Link>
          <Link href="mailto:johndoe@example.com">
            <Button leftIcon={<FaEnvelope />} colorScheme="red">
              Email
            </Button>
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
