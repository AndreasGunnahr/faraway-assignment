import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import { CharacterDetailPage } from "./pages/character-detail";
import { CharactersPage } from "./pages/characters";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<CharactersPage />} />
      <Route path="/character/:id" element={<CharacterDetailPage />} />
    </Routes>
  </ChakraProvider>
);
