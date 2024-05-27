import { Container, VStack, HStack, Box, Text, Heading, Button, IconButton, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGljdHVyZXxlbnwwfHx8fDE3MTY3NjMwODZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" mb={4} />
          <Heading as="h1" size="xl" mb={2}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer
          </Text>
        </Box>

        <HStack spacing={4}>
          <IconButton as={Link} href="https://github.com/johndoe" aria-label="GitHub" icon={<FaGithub />} size="lg" isRound />
          <IconButton as={Link} href="https://linkedin.com/in/johndoe" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" isRound />
          <IconButton as={Link} href="mailto:johndoe@example.com" aria-label="Email" icon={<FaEnvelope />} size="lg" isRound />
        </HStack>

        <Box textAlign="center">
          <Heading as="h2" size="md" mb={2}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.600">
            I am a passionate full stack developer with experience in building web applications using modern technologies. I love to learn and explore new tools and frameworks.
          </Text>
        </Box>

        <Box textAlign="center">
          <Heading as="h2" size="md" mb={2}>
            Projects
          </Heading>
          <VStack spacing={4}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
              <Heading as="h3" size="sm" mb={2}>
                Project One
              </Heading>
              <Text fontSize="sm" color="gray.600">
                A brief description of the project. It involves using React, Node.js, and other technologies.
              </Text>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
              <Heading as="h3" size="sm" mb={2}>
                Project Two
              </Heading>
              <Text fontSize="sm" color="gray.600">
                A brief description of the project. It involves using React, Node.js, and other technologies.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Button colorScheme="teal" size="lg">
          Contact Me
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
