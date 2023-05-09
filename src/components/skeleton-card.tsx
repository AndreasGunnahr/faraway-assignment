import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

export const SkeltonCard: React.FC = () => (
  <Card maxW="md" boxShadow="lg" borderColor="teal.600" border="1px">
    <CardBody mx="auto">
      <CardHeader paddingY="0">
        <SkeletonCircle height="150px" width="150px" />
      </CardHeader>
      <SkeletonText skeletonHeight="4" noOfLines={1} mt={6} />
      <SimpleGrid columns={2} spacing={3} marginTop={6}>
        <SkeletonText skeletonHeight="4" noOfLines={1} />
        <SkeletonText skeletonHeight="4" noOfLines={1} />
        <SkeletonText skeletonHeight="4" noOfLines={1} />
        <SkeletonText skeletonHeight="4" noOfLines={1} />
      </SimpleGrid>
    </CardBody>
  </Card>
);
