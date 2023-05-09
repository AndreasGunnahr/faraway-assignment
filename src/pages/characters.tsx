import {
  Divider,
  SimpleGrid,
  Input,
  InputGroup,
  Link,
  Text,
} from "@chakra-ui/react";
import { useGetStarwarsCharactersQuery } from "redux/starwars-api";

import { CharacterCard } from "components/character-card";
import { Layout } from "components/layout";
import { Pagination } from "components/pagination";
import { SkeltonCard } from "components/skeleton-card";

import { useDebounce } from "hooks/useDebounce";
import { ITEMS_PER_PAGE } from "app/variables";
import { isApiResponse } from "app/helpers";
import { useLocalStorage } from "hooks/useLocalStorage";

export const CharactersPage = () => {
  const [searchTerm, setSearchTerm] = useLocalStorage("searchTerm", "");
  const [currentPage, setCurrentPage] = useLocalStorage("currentPage", 1);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { isLoading, data, error } = useGetStarwarsCharactersQuery({
    page: currentPage,
    name: debouncedSearchTerm,
  });

  return (
    <Layout>
      <InputGroup size="lg" maxW="container.md" mb="6" display="block">
        <Text fontSize="xl" mb="1" fontWeight="semibold">
          Search for a character
        </Text>
        <Input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(() => e.target.value);
          }}
          bg="white"
          type="text"
          placeholder="Luke Skywalker etc.."
          border="1px"
          borderColor="teal.600"
          _hover={{ borderColor: "teal.500" }}
        />
      </InputGroup>
      {error ? (
        isApiResponse(error) && error.status === 404 ? (
          <Text>
            No results found for{" "}
            <b>
              <i> {debouncedSearchTerm}</i>
            </b>
          </Text>
        ) : (
          <Text>Oh no, an error occured! Please try agian!</Text>
        )
      ) : isLoading ? (
        <SimpleGrid minChildWidth="240px" gap={4}>
          {Array(ITEMS_PER_PAGE)
            .fill(0)
            .map((_, index) => (
              <SkeltonCard key={index} />
            ))}
        </SimpleGrid>
      ) : data ? (
        <>
          {data.count === 0 && (
            <Text>
              No results found for{" "}
              <b>
                <i> {debouncedSearchTerm}</i>
              </b>
            </Text>
          )}
          <SimpleGrid minChildWidth="240px" gap={4}>
            {data.results.map((character) => (
              <Link key={character.name} href={`/character/${character.name}`}>
                <CharacterCard {...character} />
              </Link>
            ))}
          </SimpleGrid>
          <Divider height={4} marginY={6} borderColor="gray.300" />
          <Pagination
            currentPage={currentPage}
            totalCount={data.count}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : null}
    </Layout>
  );
};
