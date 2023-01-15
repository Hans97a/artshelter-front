import {
  Box,
  Text,
  Card,
  CardBody,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Temp = ({ url, src, title, date }) => {
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
        pb="20vh" // 에듀 데이터 부족으로 푸터 공백 발생 방지
      >
        <Temp
          url="https://blog.naver.com/art_shelter/222891441811"
          src="edu1.png"
          title="사업선정 / 문화취약지역 문화예술교육 지원사업"
          date="2022-10-4"
        />
        <Temp
          url="https://blog.naver.com/art_shelter/222887506985"
          src="edu2.png"
          title="사업선정 / 병영 문화예술 체험교육 지원사업"
          date="2022-09-29"
        />
        <Temp
          url="https://blog.naver.com/art_shelter/222887466455"
          src="edu3.jpg"
          title="사업선정 / 군장병 문화예술교육 지원사업"
          date="2022-09-29"
        />
      </Grid>
    </>
  );
}
