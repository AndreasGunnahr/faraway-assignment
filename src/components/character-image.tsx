import { Image, Box } from "@chakra-ui/react";
import { People } from "types/starwars";
import { Icons } from "./icons";
import React from "react";

interface CharacterImageProps {
  gender: People["gender"];
}

export const CharacterImage: React.FC<CharacterImageProps> = ({ gender }) => {
  if (gender !== "female" && gender !== "male")
    return (
      <Box
        bg="#EBEBEB"
        borderRadius="100%"
        display="inline-flex"
        flexShrink={0}
        alignItems="center"
        justifyItems="center"
        height="150px"
        width="150px"
        mx="auto"
      >
        <Icons.HelpCircle width="100%" height="75" />
      </Box>
    );

  return (
    <Image
      src={`/avatars/${gender}.png`}
      borderRadius="lg"
      height="150"
      mx="auto"
      width="100"
    />
  );
};
