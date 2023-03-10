import { Box } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Paginator({
  postPerPage,
  totalPosts,
  current,
  paginate,
  hasNext,
  hasPrev,
}) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postPerPage); // current 현재 1
  let start = Math.floor((current - 1) / 5) * 5 + 1;
  let end = Math.floor((current - 1) / 5 + 1) * 5;
  if (totalPages < end) end = totalPages;
  for (let i = start; i <= end; i++) pageNumbers.push(i);

  return (
    <Box display="flex" alignItems="center">
      <Box
        as="button"
        pb="0.1rem"
        fontSize="1.2rem"
        onClick={() => paginate((prev) => prev - 1)}
        cursor={hasPrev ? "" : "default"}
        visibility={hasPrev ? "" : "hidden"}
        disabled={hasPrev ? null : true}
      >
        <ChevronLeftIcon />
      </Box>
      <Box display="flex" alignItems="center" columnGap={3} ml="1" mr="1">
        {pageNumbers.map((num) => (
          <Box key={"paginator" + num}>
            <Link to={{ search: `?page=${num}` }}>
              <Box
                as="button"
                w="1.3rem"
                h="1.6rem"
                fontSize="1.1rem"
                _hover={{ fontWeight: "500" }}
                fontWeight={current === num ? "600" : ""}
                // backgroundColor={current === num ? "green.200" : ""}
                borderRadius="50%"
                onClick={() => paginate(num)}
              >
                {num}
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
      <Box
        as="button"
        pb="0.1rem"
        fontSize="1.2rem"
        onClick={() => paginate((prev) => prev + 1)}
        cursor={hasNext ? "" : "default"}
        visibility={hasNext ? "" : "hidden"}
        disabled={hasNext ? null : true}
      >
        <ChevronRightIcon />
      </Box>
    </Box>
  );
}
