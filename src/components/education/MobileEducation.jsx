import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";

const Temp = ({ url, src, title }) => {
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
  return (
    <>
      <Box bgColor="blackAlpha.50" h="5rem" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="5%">
          Education
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" mt="10" mb="10">
        <Box display="grid" rowGap="10">
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
        </Box>
      </Box>
    </>
  );
}
