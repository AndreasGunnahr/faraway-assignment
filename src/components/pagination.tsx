import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Icons } from "./icons";
import { DOTS, usePagination } from "hooks/usePagination";
import { ITEMS_PER_PAGE } from "app/variables";
import { useMemo } from "react";

interface PaginationProps {
  totalCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalCount,
  setCurrentPage,
}) => {
  const siblingsCount = useBreakpointValue({ base: 0, md: 1 });

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount: siblingsCount,
    pageSize: 10,
  });

  const numberOfPages = useMemo(
    () => Math.ceil(totalCount / ITEMS_PER_PAGE),
    [totalCount]
  );

  // If there are less than 2 items in pagination range we shall not render the component
  if (paginationRange.length < 2) {
    return null;
  }

  const lastPage = paginationRange[paginationRange.length - 1];

  const nextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, numberOfPages));
  };

  const prevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const jumpPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), numberOfPages));
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Text mt={[4, 4, 0]}>
        Showing{" "}
        <b>{currentPage === 1 ? 1 : 1 + (currentPage - 1) * ITEMS_PER_PAGE} </b>
        to{" "}
        <b>
          {currentPage === 1
            ? ITEMS_PER_PAGE
            : currentPage === numberOfPages
            ? totalCount
            : 1 + currentPage * ITEMS_PER_PAGE}
        </b>{" "}
        of <b>{totalCount}</b> results
      </Text>

      <ButtonGroup spacing={1}>
        <Button
          border="1px"
          bg="white"
          borderColor="teal.600"
          _disabled={{
            bgColor: "gray.100",
            cursor: "not-allowed",
            borderColor: "gray.100",
            color: "gray.400",
          }}
          isDisabled={currentPage === 1}
          onClick={() => prevPage()}
        >
          <Icons.ChevronLeft height={20} width={20} />
        </Button>

        {paginationRange.map((pageNumber: any, index: number) => {
          return pageNumber === DOTS ? (
            <Box
              key={"dot-button-" + index + pageNumber}
              border="1px"
              borderColor="teal.600"
              paddingX={4}
              paddingBottom={2}
              borderRadius="md"
              display="flex"
              alignItems="center"
              fontWeight="black"
              bg="white"
            >
              &#8230;
            </Box>
          ) : (
            <Button
              border="1px"
              bg="white"
              borderColor="teal.600"
              key={"pagination-button-" + pageNumber}
              isActive={currentPage === pageNumber}
              _active={{ bgColor: "teal.600", textColor: "white" }}
              onClick={() => jumpPage(pageNumber)}
            >
              {pageNumber}
            </Button>
          );
        })}

        <Button
          onClick={() => nextPage()}
          border="1px"
          bg="white"
          borderColor="teal.600"
          isDisabled={currentPage === lastPage}
          _disabled={{
            bgColor: "gray.100",
            cursor: "not-allowed",
            borderColor: "gray.100",
            color: "gray.400",
          }}
        >
          <Icons.ChevronRight height={20} width={20} />
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
