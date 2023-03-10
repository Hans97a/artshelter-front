import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getNoticeList } from "../../api";
import Paginator from "../Paginator";

const TableRow = (props) => {
  const [hoverCheck, setHoverCheck] = useState(false);
  const onMouseOverOrOut = () => setHoverCheck((prev) => !prev);
  return (
    <>
      <Tr
        fontSize="0.8rem"
        _hover={{ bgColor: "blackAlpha.50" }}
        onMouseOver={onMouseOverOrOut}
        onMouseOut={onMouseOverOrOut}
      >
        <Td maxW="55%">
          <Box display="flex" flex="1">
            <Box flex="1" w="1px">
              {props.pinned ? (
                <Text
                  float="left"
                  mr="0.5rem"
                  bgColor="red.500"
                  padding="2px"
                  borderTopLeftRadius="10px"
                  color="white"
                  fontSize="0.6rem"
                >
                  공지
                </Text>
              ) : (
                ""
              )}
              <Link to={{ pathname: `${props.pk}` }}>
                <Text
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  title={props.title}
                  fontWeight={hoverCheck ? "bold" : ""}
                  fontSize={hoverCheck ? "0.83rem" : ""}
                  color={hoverCheck ? "green.600" : ""}
                >
                  {props.title}
                </Text>
              </Link>
            </Box>
          </Box>
        </Td>
        <Td maxW="15%">{props.writer}</Td>
        <Td maxW="15%" textAlign="center">
          {props.date}
        </Td>
        <Td w="8%" maxW="8%" textAlign="center" pr="2rem">
          {props.visited}
        </Td>
      </Tr>
    </>
  );
};

export default function PcNotice() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [submitStr, setSubmitStr] = useState("");
  const postPerPage = 10;
  const { data } = useQuery(
    [
      "notices",
      { currentPage: currentPage, pageSize: postPerPage, q: submitStr },
    ],
    getNoticeList
  );

  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => {
    setSubmitStr(search);
    e.preventDefault();
  };
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Box bgColor="blackAlpha.50" h="16vh" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="20">
          Notice
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" mt="2rem" mb="3rem">
        <Box w="50vw" minH="55vh">
          <Box
            as="form"
            onSubmit={handleSubmit}
            display="flex"
            justifyContent="flex-end"
          >
            <InputGroup w="20%">
              <InputRightElement children={<SearchIcon color="green.400" />} />
              <Input
                focusBorderColor="green.400"
                placeholder="제목, 내용 검색"
                onChange={handleChange}
              />
            </InputGroup>
          </Box>
          <TableContainer mt="1.5rem" w="100%" borderBottom="1px solid black">
            <Table w="100%">
              <Thead bgColor="blackAlpha.100" borderTop="1px solid black">
                <Tr>
                  <Th w="55%" maxW="55%" fontSize="0.8rem" textAlign="center">
                    제목
                  </Th>
                  <Th w="15%" maxW="15%" fontSize="0.8rem">
                    작성자
                  </Th>
                  <Th w="10%" maxW="10%" fontSize="0.8rem" textAlign="center">
                    작성일
                  </Th>
                  <Th w="8%" maxW="8%" fontSize="0.8rem">
                    조회수
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.ok && data?.pinned
                  ? data.pinned.map((notice, idx) => {
                      return (
                        <TableRow
                          key={idx}
                          pk={notice.pk}
                          title={notice.title}
                          writer={notice.writer.nickname}
                          date={notice.created_at}
                          visited={notice.visited}
                          pinned={true}
                        />
                      );
                    })
                  : ""}
                {data?.ok && data?.results ? (
                  data.results.map((notice, idx) => {
                    return (
                      <TableRow
                        key={idx}
                        pk={notice.pk}
                        title={notice.title}
                        writer={notice.writer.nickname}
                        date={notice.created_at}
                        visited={notice.visited}
                      />
                    );
                  })
                ) : (
                  <Box
                    display="flex"
                    justifyContent="center"
                    mt="1rem"
                    mb="1rem"
                  >
                    결과가 없습니다.
                  </Box>
                )}
              </Tbody>
            </Table>
          </TableContainer>
          <Box display="flex" justifyContent="center" mt="2rem">
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
