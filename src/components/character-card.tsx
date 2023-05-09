import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { People } from "types/starwars";
import { Icons } from "./icons";
import { CharacterImage } from "./character-image";

export const CharacterCard: React.FC<People> = ({
  name,
  gender,
  birth_year,
  height,
  mass,
  films,
}) => {
  return (
    <Card
      maxW="md"
      boxShadow="lg"
      borderColor="teal.600"
      border="1px"
      transition="all .3s ease-in-out"
      _hover={{ transform: "scale(1.03)" }}
    >
      <CardBody mx="auto" borderColor="teal.600">
        <CardHeader paddingY="0">
          <CharacterImage gender={gender} />
        </CardHeader>
        <Heading size="md" fontWeight="bold" mt={6} textAlign="center">
          {name}
        </Heading>
        <SimpleGrid columns={2} spacing={3} mt={6}>
          <HStack alignItems="center">
            <Icons.Cake height="20" width="20" />
            <Text fontSize="sm" fontWeight="semibold">
              {birth_year}
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Icons.Film height="15" width="15" />
            <Text fontSize="sm" fontWeight="semibold">
              {films.length} {films.length === 1 ? "movie" : "movies"}
            </Text>
          </HStack>

          <HStack alignItems="center">
            <Icons.Scale height="20" width="20" />
            <Text fontSize="sm" fontWeight="semibold">
              {mass} kg
            </Text>
          </HStack>
          <HStack alignItems="center">
            <Icons.Ruler height="20" width="20" />
            <Text fontSize="sm" fontWeight="semibold">
              {height} cm
            </Text>
          </HStack>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};
