import { Box, Text } from "@chakra-ui/react";

export const Navbar = () => (
  <Box w="100%" p={4} boxShadow="md" fontWeight="semibold">
    <Text
      maxW="container.xl"
      mx="auto"
      px="1rem"
      fontSize="lg"
      fontWeight="bold"
    >
      Demo assignment SWAPI
    </Text>
  </Box>
);
