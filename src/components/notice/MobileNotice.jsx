import { SearchIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getNoticeList } from "../../api";
import Paginator from "../Paginator";

export default function MobileNotice() {
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
      <Box bgColor="blackAlpha.50" h="10vh" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="10">
          Notice
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" mt="2rem" mb="3rem">
        <Box w="80vw" minH="60vh">
          <Box display="grid" w="100%" rowGap="2rem" mt="2rem">
            {data && data?.pinned
              ? data.pinned.map((notice, idx) => {
                  return (
                    <>
                      {idx !== 0 ? <Divider /> : ""}
                      <Box w="80vw" key={idx}>
                        <Link to={{ pathname: `${notice.pk}` }}>
                          <Text
                            float="left"
                            mr="0.5rem"
                            bgColor="red.500"
                            padding="2px"
                            borderTopLeftRadius="10px"
                            color="white"
                            mt="1"
                            fontSize="0.8rem"
                          >
                            공지
                          </Text>
                          <Text
                            fontSize="1.2rem"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            whiteSpace="nowrap"
                            fontWeight="bold"
                          >
                            {notice.title}
                          </Text>
                        </Link>
                        <Box display="flex" alignItems="center" mt="0.3rem">
                          <Text>작성자 : {notice.writer.nickname}</Text>
                          <Text ml="1rem">작성일 : {notice.created_at}</Text>
                          <ViewIcon ml="1rem" />
                          <Text ml="0.3rem"> {notice.visited}</Text>
                        </Box>
                      </Box>
                    </>
                  );
                })
              : ""}
            {data?.pinned ? <Divider /> : ""}
            {data && data?.results ? (
              data.results.map((notice, idx) => {
                return (
                  <>
                    {idx !== 0 ? <Divider /> : ""}
                    <Box w="80vw" key={idx}>
                      <Link to={{ pathname: `${notice.pk}` }}>
                        <Text
                          fontSize="1.2rem"
                          overflow="hidden"
                          textOverflow="ellipsis"
                          whiteSpace="nowrap"
                          fontWeight="bold"
                        >
                          {notice.title}
                        </Text>
                      </Link>
                      <Box display="flex" alignItems="center" mt="0.3rem">
                        <Text>작성자 : {notice.writer.nickname}</Text>
                        <Text ml="1rem">작성일 : {notice.created_at}</Text>
                        <ViewIcon ml="1rem" />
                        <Text ml="0.3rem"> {notice.visited}</Text>
                      </Box>
                    </Box>
                  </>
                );
              })
            ) : (
              <Box textAlign="center">결과가 없습니다.</Box>
            )}
          </Box>
          <Box
            as="form"
            onSubmit={handleSubmit}
            display="flex"
            justifyContent="center"
            mt="2rem"
          >
            <InputGroup w="70%">
              <InputRightElement children={<SearchIcon color="green.400" />} />
              <Input
                focusBorderColor="green.400"
                placeholder="제목, 내용 검색"
                onChange={handleChange}
              />
            </InputGroup>
          </Box>

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
