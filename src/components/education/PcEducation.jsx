import {
  Box,
  Text,
  Card,
  CardBody,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getBlogList } from "../../api";
import Paginator from "../Paginator";

const BlogItem = ({ url, src, title, date }) => {
  return (
    <GridItem>
      <a href={url} target="_blank" rel="noreferrer">
        <Card>
          <CardBody bgColor="gray.50">
            <Image objectFit="contain" src={src} />
            <Text
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              fontWeight="bold"
            >
              {title}
            </Text>
            <Text color="gray.400">{date}</Text>
          </CardBody>
        </Card>
      </a>
    </GridItem>
  );
};

export default function PcEducation() {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;

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
      <Box bgColor="blackAlpha.50" h="16vh" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="20">
          Education
        </Text>
      </Box>
      <Grid
        templateColumns="repeat(3, 30vh)"
        gap="10"
        mt="10"
        mb="10"
        justifyContent="center"
        pb="10vh" // 에듀 데이터 부족으로 푸터 공백 발생 방지
      >
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
      </Grid>
      <Box display="flex" justifyContent="center" mb="3rem">
        <Paginator
          postPerPage={postPerPage}
          current={currentPage}
          totalPosts={data?.count}
          paginate={paginate}
          hasNext={data?.next}
          hasPrev={data?.prev}
        />
      </Box>
    </>
  );
}
