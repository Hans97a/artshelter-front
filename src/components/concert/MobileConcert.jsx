import { Box, Card, CardBody, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getConcertList } from "../../api";
import Paginator from "../Paginator";

const ConcertList = ({ pk, src, title, date, place }) => {
  return (
    <>
      <Card>
        <CardBody>
          <Link to={{ pathname: `/concert/${pk}` }}>
            <Box overflow="hidden">
              <Box
                backgroundImage={`url(${src})`}
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                src="공연1-m.jpg"
                w="xs"
                h="md"
                transition="all 0.5s linear"
                _hover={{
                  transform: "scale(1.1)",
                  opacity: 0.6,
                }}
                overflow="hidden"
              />
            </Box>
          </Link>

          <Box textAlign="center" mt="3">
            <Link to={{ pathname: `/concert/${pk}` }}>
              <Text
                fontSize="1.2rem"
                fontWeight="500"
                color="gray.600"
                _hover={{ color: "green" }}
              >
                {title}
              </Text>
            </Link>
            <Text
              maxW="xs"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              fontSize="0.9rem"
              color="gray.500"
              mt="2"
            >
              [{date}] {place}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};
export default function MobileConcert() {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;
  const { data } = useQuery(
    [
      "concerts",
      {
        currentPage: currentPage,
        pageSize: postPerPage,
      },
    ],
    getConcertList
  );
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Box bgColor="blackAlpha.50" h="5rem" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="5%">
          Concert
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" mt="10" mb="10">
        <Box display="grid" rowGap="10">
          {data
            ? data.results.map((concert, idx) => {
                return (
                  <ConcertList
                    src={concert.cover}
                    key={idx}
                    title={concert.title}
                    date={`${concert.year}.${concert.month}.${concert.day}`}
                    place={concert.place}
                    pk={concert.pk}
                  />
                );
              })
            : ""}
          <Box display="flex" justifyContent="center">
            <Paginator
              postPerPage={postPerPage}
              current={currentPage}
              totalPosts={data?.count}
              paginate={paginate}
              hasNext={data?.next}
              hasPrev={data?.prev}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
