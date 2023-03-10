import { ViewIcon } from "@chakra-ui/icons";
import { Box, Button, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getNoticeDetail } from "../../api";

export default function MobileNoticeDetail() {
  const { pk } = useParams();
  const { data } = useQuery(["notice", { pk: pk }], getNoticeDetail);
  return (
    <>
      <Box display="flex" justifyContent="center" mt="1rem" minH="80vh">
        {data ? (
          <Box>
            <Text fontSize="1.2rem" fontWeight="bold" ml="1.5rem" mr="1.5rem">
              {data.result.title}
            </Text>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="100vw"
              mt="1rem"
              pt="0.5rem"
              pb="0.5rem"
              bgColor="blackAlpha.100"
            >
              <Text>
                <Box as="span" fontWeight="600" mr="0.3rem">
                  작성자 :
                </Box>
                {data.result.writer.nickname}
              </Text>
              <Text ml="1rem">
                <Box as="span" fontWeight="600" mr="0.3rem">
                  작성일 :
                </Box>
                {data.result.created_at}
              </Text>
              <ViewIcon ml="0.8rem" />
              <Text ml="0.2rem">{data.result.visited}</Text>
            </Box>
            <Box
              className="datacontent"
              display="flex"
              justifyContent="center"
              mt="2rem"
              mb="2rem"
              minH="55vh"
            >
              <Box dangerouslySetInnerHTML={{ __html: data.result.content }} />
            </Box>
            <Box display="flex" justifyContent="space-between" margin="1rem">
              {data?.prev ? (
                <Link to={{ pathname: `/notice/${data.prev.pk}` }}>
                  <Button colorScheme="green">이전글</Button>
                </Link>
              ) : (
                <Button colorScheme="green" visibility="hidden">
                  이전글
                </Button>
              )}
              <Link to={{ pathname: "/notice" }}>
                <Button colorScheme="gray">목록</Button>
              </Link>
              {data?.next ? (
                <Link to={{ pathname: `/notice/${data.next.pk}` }}>
                  <Button colorScheme="green">다음글</Button>
                </Link>
              ) : (
                <Button colorScheme="green" visibility="hidden">
                  다음글
                </Button>
              )}
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}
