import { Box, Button, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getConcertDetail } from "../../api";

export default function MobileConcertDetail() {
  const { pk } = useParams();
  const { data } = useQuery(["concert", { pk: pk }], getConcertDetail);

  return (
    <>
      {data ? (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
            minH="13vh"
            bgColor="blackAlpha.50"
          >
            <Box textAlign="center">
              <Text
                fontSize="1.5rem"
                fontWeight="600"
                wordBreak="break-all"
                ml="1rem"
                mr="1rem"
                mt="1rem"
              >
                {data.title}
              </Text>
              <a href={data.booking_url} target="_blank" rel="noreferrer">
                <Button
                  mt="0.5rem"
                  mb="1rem"
                  colorScheme="blackAlpha"
                  borderRadius={20}
                >
                  예매하기
                </Button>
              </a>
            </Box>
          </Box>
          <Box
            className="datacontent"
            display="flex"
            justifyContent="center"
            mt="3rem"
            mb="3rem"
            minH="55vh"
          >
            <Box dangerouslySetInnerHTML={{ __html: data.content }} />
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
}
