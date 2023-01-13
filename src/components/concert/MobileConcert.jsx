import {
  Box,
  Card,
  CardBody,
  Center,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const ConcertList = ({ url, src, title, date, place }) => {
  return (
    <>
      <Card>
        <CardBody>
          <a href={url} target="_blank" rel="noreferrer">
            <Box overflow="hidden">
              <Box
                backgroundImage={`url(${src})`}
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                src="공연1-m.jpg"
                w="xs"
                h="md"
                transition="all 0.5s linear"
                _hover={{
                  transform: "scale(1.1)",
                  opacity: 0.6,
                }}
                overflow="hidden"
              />
            </Box>
          </a>
          <Box textAlign="center" mt="3">
            <a href={url} target="_blank" rel="noreferrer">
              <Text
                fontSize="1.2rem"
                fontWeight="500"
                color="gray.600"
                _hover={{ color: "green" }}
              >
                {title}
              </Text>
            </a>
            <Text
              maxW="xs"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
              fontSize="0.9rem"
              color="gray.500"
              mt="2"
            >
              [{date}] {place}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};
// https://www.codingfactory.net/12584  이미지 확대
// http://vincero.co.kr/concert/  디자인 참고
export default function MobileConcert() {
  return (
    <>
      <Box bgColor="blackAlpha.50" h="5rem" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="5%">
          Concert
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" mt="10" mb="10">
        <Box display="grid" rowGap="10">
          <ConcertList
            src="공연2-m.jpg"
            title="CHRISTMAS GIFT"
            date="2022.07.31"
            place="푸르지오 아트홀"
            url="https://tickets.interpark.com/goods/22015331"
          />
          <ConcertList
            src="공연3-m.jpg"
            title="THE TRIP"
            date="2022.07.31"
            place="마포아트센터 플레이맥"
            url="https://tickets.interpark.com/goods/22009482"
          />
          <ConcertList
            src="공연1-m.jpg"
            title="THE SCENT"
            date="2022.07.31"
            place="국립아시아문화전당 예술극장 극장2"
            url="https://tickets.interpark.com/goods/22008731"
          />
        </Box>
      </Box>
    </>
  );
}
