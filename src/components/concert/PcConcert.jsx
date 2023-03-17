import { Box, Button, Divider, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useQuery } from "@tanstack/react-query";
import { getConcertList } from "../../api";
import Paginator from "../Paginator";
import { useState } from "react";
import { Link } from "react-router-dom";

const ConcertList = ({ title, date, place, ticket, imgsrc, start, pk }) => {
  return (
    <>
      {!start ? <Divider /> : ""}
      <Box w="100%" display="flex" mt="2rem" mb="10">
        <Link to={{ pathname: `${pk}` }}>
          <Box overflow="hidden">
            <Image
              boxSize="xs"
              objectFit="contain"
              transition="all 0.5s linear"
              _hover={{ transform: "scale(1.1)", opacity: 0.6 }}
              src={imgsrc}
              alt={title}
            />
          </Box>
        </Link>

        <Box ml="3rem">
          <Text mt="1rem" fontSize="2rem">
            {title}
          </Text>
          <Box mt="1.5rem">
            <Box position="relative">
              <Box
                display="block"
                w="4px"
                h="4px"
                bgColor="#898989"
                borderRadius="100%"
                position="absolute"
                top="12px"
              />
              <Text
                ml="3"
                fontSize="1.2rem"
                fontWeight="500"
                display="inline-block"
              >
                일시:
              </Text>
              <Text display="inline-block" ml="5rem" fontSize="1.2rem">
                {date}
              </Text>
            </Box>
            <Box position="relative" mt="2">
              <Box
                display="block"
                w="4px"
                h="4px"
                bgColor="#898989"
                borderRadius="100%"
                position="absolute"
                top="12px"
              />
              <Text
                ml="3"
                fontSize="1.2rem"
                fontWeight="500"
                display="inline-block"
              >
                장소:
              </Text>
              <Text display="inline-block" ml="5rem" fontSize="1.2rem">
                {place}
              </Text>
            </Box>
            <Box position="relative" mt="2">
              <Box
                display="block"
                w="4px"
                h="4px"
                bgColor="#898989"
                borderRadius="100%"
                position="absolute"
                top="12px"
              />
              <Text
                ml="3"
                fontSize="1.2rem"
                fontWeight="500"
                display="inline-block"
              >
                티켓:
              </Text>
              <Text display="inline-block" ml="5rem" fontSize="1.2rem">
                {ticket}
              </Text>
            </Box>
            <Box mt="10" display="flex">
              <Link to={{ pathname: `${pk}` }}>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme="green">
                  VIEW MORE
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default function PcConcert() {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 3;
  const { data } = useQuery(
    ["concerts", { currentPage: currentPage, pageSize: postPerPage }],
    getConcertList
  );
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Box bgColor="blackAlpha.50" h="16vh" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="20">
          Concert
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box w="70vw" mt="3rem" mb="10">
          {data
            ? data?.results.map((concert, idx) => {
                return (
                  <ConcertList
                    pk={concert.pk}
                    key={"concertItem" + concert.pk}
                    title={concert.title}
                    date={`${concert.year}년 ${concert.month}월 ${concert.day}일 ${concert.hour}시 ${concert.minute == 0? concert.minute + "분" : ""}`}
                    place={concert.place}
                    ticket={concert.ticket}
                    imgsrc={concert.cover}
                    start={idx === 0 ? true : false}
                  />
                );
              })
            : ""}

          <Box display="flex" justifyContent="center" mt="5rem">
            {data ? (
              <Paginator
                postPerPage={postPerPage}
                current={currentPage}
                totalPosts={data?.count}
                paginate={paginate}
                hasNext={data?.next}
                hasPrev={data?.prev}
              />
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
