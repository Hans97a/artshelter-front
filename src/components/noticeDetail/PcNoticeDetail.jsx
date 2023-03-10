import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getNoticeDetail } from "../../api";

export default function PcNoticeDetail() {
  const { pk } = useParams();
  const { data } = useQuery(["concert", { pk: pk }], getNoticeDetail);
  return (
    <>
      {data ? (
        <>
          <Box display="flex" justifyContent="center" mt="5rem" mb="5rem">
            <Box w="60vw" minH="20vh">
              <Box mb="0.7rem">
                <Text ml="1rem" fontSize="1.25rem" fontWeight="bold">
                  {data.result.title}
                </Text>
              </Box>
              <Box
                h="3rem"
                display="flex"
                alignItems="center"
                bgColor="#f1f1f1"
                borderTop="1px solid #dfdfdf"
                borderBottom="1px solid #dfdfdf"
              >
                <Box display="flex" alignItems="center" ml="1rem">
                  <Text fontWeight="bold">작성자</Text>
                  <Text ml="1.5rem">{data.result.writer.nickname}</Text>
                </Box>
                <Box display="flex" alignItems="center" ml="2rem">
                  <Text fontWeight="bold">작성일</Text>
                  <Text ml="1.5rem">{data.result.created_at}</Text>
                </Box>
                <Box display="flex" alignItems="center" ml="2rem">
                  <Text fontWeight="bold">조회</Text>
                  <Text ml="1.5rem">{data.result.visited}</Text>
                </Box>
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                margin="1rem 1rem 0 1rem"
              >
                <Box w="50%">
                  <Box
                    w="100%"
                    display="flex"
                    flex="1"
                    alignItems="center"
                    mb="0.5rem"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    <ChevronUpIcon />
                    <Text ml="0.5rem" fontSize="0.8rem">
                      [이전 글]
                    </Text>
                    {data.prev ? (
                      <Link to={{ pathname: `/notice/${data.prev.pk}` }}>
                        <Box
                          textOverflow="ellipsis"
                          whiteSpace="nowrap"
                          overflow="hidden"
                        >
                          <Text ml="1rem">{data.prev.title}</Text>
                        </Box>
                      </Link>
                    ) : (
                      <Text ml="1rem" color="gray.400">
                        이전 게시물이 없습니다.
                      </Text>
                    )}
                  </Box>
                  <Divider />
                  <Box display="flex" alignItems="center" mt="0.5rem">
                    <ChevronDownIcon />
                    <Text ml="0.5rem" fontSize="0.8rem">
                      [다음 글]
                    </Text>
                    {data.next ? (
                      <Link to={{ pathname: `/notice/${data.next.pk}` }}>
                        <Text ml="1rem">{data.next.title}</Text>
                      </Link>
                    ) : (
                      <Text ml="1rem" color="gray.400">
                        다음 게시물이 없습니다.
                      </Text>
                    )}
                  </Box>
                </Box>
                <Link to={{ pathname: "/notice" }}>
                  <Button colorScheme="telegram">목록</Button>
                </Link>
              </Box>

              <Box ml="1rem" mr="1rem">
                <Box
                  mt="1rem"
                  minH="40vh"
                  dangerouslySetInnerHTML={{ __html: data.result.content }}
                />
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        ""
      )}
    </>
  );
}
