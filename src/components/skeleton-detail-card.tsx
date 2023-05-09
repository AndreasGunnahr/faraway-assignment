import React from "react";
import {
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
  Box,
  Skeleton,
} from "@chakra-ui/react";

export const SkeltonDetailCard: React.FC = () => (
  <Box
    bg="white"
    p="12"
    maxW="container.xl"
    textAlign="center"
    mt="4"
    position="relative"
  >
    <Skeleton
      position="absolute"
      top="5"
      right="5"
      height="40px"
      width="60px"
      borderRadius="md"
    />
    <SkeletonCircle height="150px" width="150px" mx="auto" />
    <SkeletonText
      skeletonHeight="4"
      noOfLines={1}
      mt={6}
      maxW="container.sm"
      mx="auto"
    />
    <SimpleGrid columns={2} spacing={3} mt={6} maxW="container.sm" mx="auto">
      <SkeletonText skeletonHeight="4" noOfLines={1} />
      <SkeletonText skeletonHeight="4" noOfLines={1} />
      <SkeletonText skeletonHeight="4" noOfLines={1} />
      <SkeletonText skeletonHeight="4" noOfLines={1} />
      <SkeletonText skeletonHeight="4" noOfLines={1} />
      <SkeletonText skeletonHeight="4" noOfLines={1} />
    </SimpleGrid>
  </Box>
);
