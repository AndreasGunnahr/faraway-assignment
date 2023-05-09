import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { People, Resource } from "types/starwars";

export const starwarsApi = createApi({
  reducerPath: "starwarsApi",

  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getStarwarsCharacters: builder.query<
      Resource<People[]>,
      { page: number | string; name: string }
    >({
      query: ({ page = "", name = "" }) =>
        `people/?search=${name}&page=${page}`,
    }),
    getStarwarsCharacterByName: builder.query<Resource<People[]>, string>({
      query: (name) => `people/?search=${name}`,
    }),

    /* NOTE: The following endpoints are not used in this project, but are included for reference. */
    editStarwarsCharacter: builder.mutation<
      People,
      { id: string; character: People }
    >({
      query: ({ id, character }) => ({
        url: `people/${id}/`,
        method: "PUT",
        body: character,
      }),
    }),
  }),
});

export const {
  useGetStarwarsCharactersQuery,
  useGetStarwarsCharacterByNameQuery,
} = starwarsApi;
