import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getBlogList } from "../../api";
import Paginator from "../Paginator";

const BlogItem = ({ url, src, title }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Card>
        <CardBody bgColor="gray.50" w="2xs">
          <Image w="2xs" h="2xs" objectFit="contain" src={src} />
          <Text
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            fontWeight="bold"
          >
            {title}
          </Text>
          <Text color="gray.400">2023-01-06</Text>
        </CardBody>
      </Card>
    </a>
  );
};

export default function MobileEducation() {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;
  const { data } = useQuery(
    ["edus", { currentPage: currentPage, pageSize: postPerPage }],
    getBlogList
  );
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Box bgColor="blackAlpha.50" h="5rem" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="5%">
          Education
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" mt="10" mb="10">
        <Box display="grid" rowGap="10" minH="50vh">
          {data
            ? data.results.map((edu, idx) => {
                return (
                  <BlogItem
                    key={idx}
                    url={edu.blog_url}
                    src={edu.cover}
                    title={edu.title}
                    date={edu.created_at}
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
