import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CharacterImage } from "components/character-image";
import { SkeltonDetailCard } from "components/skeleton-detail-card";
import { Icons } from "components/icons";
import { Layout } from "components/layout";
import { EditModal } from "components/edit-modal";

import { useGetStarwarsCharacterByNameQuery } from "redux/starwars-api";

export const CharacterDetailPage = () => {
  const { id: name } = useParams();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, error, isLoading } = useGetStarwarsCharacterByNameQuery(name!);

  return (
    <Layout>
      <Button
        variant="link"
        color="black"
        iconSpacing={2}
        onClick={() => navigate(-1)}
      >
        <Icons.ChevronLeft />
        Back to all characters
      </Button>
      {error ? (
        <Text mt="4">Oh no, there was an error! Try agian!</Text>
      ) : isLoading ? (
        <SkeltonDetailCard />
      ) : data && data.results.length > 0 ? (
        <>
          <EditModal
            isOpen={isOpen}
            onClose={onClose}
            character={data.results[0]}
          />
          <Box
            bg="white"
            p="12"
            maxW="container.xl"
            textAlign="center"
            mt="4"
            position="relative"
          >
            <Button
              bg="teal.600"
              color="white"
              position="absolute"
              _hover={{ bg: "teal.500" }}
              top="5"
              right="5"
              onClick={onOpen}
            >
              Edit{" "}
            </Button>
            <CharacterImage gender={data.results[0].gender} />
            <Heading size="2xl" fontWeight="extrabold" mt={8}>
              {data.results[0].name}
            </Heading>
            <SimpleGrid
              columns={[1, null, 2]}
              spacing={3}
              mt={6}
              maxW="container.sm"
              mx="auto"
            >
              <HStack alignItems="center" justifyContent="center">
                <Text fontSize="lg" fontWeight="bold">
                  Date of birth:{" "}
                </Text>
                <Text fontSize="lg" fontWeight="semibold" fontStyle="italic">
                  {data.results[0].birth_year}
                </Text>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Text fontSize="lg" fontWeight="bold">
                  Numer of movies:{" "}
                </Text>
                <Text fontSize="lg" fontWeight="semibold" fontStyle="italic">
                  {data.results[0].films.length}{" "}
                  {data.results[0].films.length === 1 ? "movie" : "movies"}
                </Text>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Text fontSize="lg" fontWeight="bold">
                  Weight:{" "}
                </Text>
                <Text fontSize="lg" fontWeight="semibold" fontStyle="italic">
                  {data.results[0].mass} kg
                </Text>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Text fontSize="lg" fontWeight="bold">
                  Height:{" "}
                </Text>
                <Text fontSize="lg" fontWeight="semibold" fontStyle="italic">
                  {data.results[0].height} cm
                </Text>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Text fontSize="lg" fontWeight="bold">
                  Eye color:{" "}
                </Text>
                <Text fontSize="lg" fontWeight="semibold" fontStyle="italic">
                  {data.results[0].eye_color}
                </Text>
              </HStack>
              <HStack alignItems="center" justifyContent="center">
                <Text fontSize="lg" fontWeight="bold">
                  Hair color:{" "}
                </Text>
                <Text fontSize="lg" fontWeight="semibold" fontStyle="italic">
                  {data.results[0].hair_color}
                </Text>
              </HStack>
            </SimpleGrid>
          </Box>
        </>
      ) : (
        <Text mt="4">
          No information found about <b>{name}</b>. Go back and try another
          name!
        </Text>
      )}
    </Layout>
  );
};
