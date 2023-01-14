import { Box, Button, Divider, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

// const ConcertItem = (props) => {
//   const imgs = props.imgs;
//   return <>{imgs.map(img => console.log(img))}</>;
// };

const ConcertList = ({ title, date, place, ticket, imgsrc, end, url }) => {
  return (
    <>
      <Box w="100%" display="flex" mt="2rem" mb="10">
        <a href={url} target="_blank" rel="noreferrer">
          <Box overflow="hidden">
            <Image
              boxSize="xs"
              objectFit="contain"
              transition="all 0.5s linear"
              _hover={{ transform: "scale(1.1)", opacity: 0.6 }}
              src={imgsrc}
              alt={title}
            />
          </Box>
        </a>
        <Box ml="3rem">
          <Text mt="1rem" fontSize="2rem">
            {title}
          </Text>
          <Box mt="1.5rem">
            <Box position="relative">
              <Box
                display="block"
                w="4px"
                h="4px"
                bgColor="#898989"
                borderRadius="100%"
                position="absolute"
                top="12px"
              />
              <Text
                ml="3"
                fontSize="1.2rem"
                fontWeight="500"
                display="inline-block"
              >
                일시:
              </Text>
              <Text display="inline-block" ml="5rem" fontSize="1.2rem">
                {date}
              </Text>
            </Box>
            <Box position="relative" mt="2">
              <Box
                display="block"
                w="4px"
                h="4px"
                bgColor="#898989"
                borderRadius="100%"
                position="absolute"
                top="12px"
              />
              <Text
                ml="3"
                fontSize="1.2rem"
                fontWeight="500"
                display="inline-block"
              >
                장소:
              </Text>
              <Text display="inline-block" ml="5rem" fontSize="1.2rem">
                {place}
              </Text>
            </Box>
            <Box position="relative" mt="2">
              <Box
                display="block"
                w="4px"
                h="4px"
                bgColor="#898989"
                borderRadius="100%"
                position="absolute"
                top="12px"
              />
              <Text
                ml="3"
                fontSize="1.2rem"
                fontWeight="500"
                display="inline-block"
              >
                티켓:
              </Text>
              <Text display="inline-block" ml="5rem" fontSize="1.2rem">
                {ticket}
              </Text>
            </Box>
            <Box mt="10">
              <a href={url} target="_blank" rel="noreferrer">
                <Button rightIcon={<ArrowForwardIcon />} colorScheme="green">
                  VIEW MORE
                </Button>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
      {!end ? <Divider mt="5" /> : ""}
    </>
  );
};

export default function PcConcert() {
  return (
    <>
      <Box bgColor="blackAlpha.50" h="16vh" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="20">
          Concert
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box w="70vw" mt="3rem" mb="10">
          <ConcertList
            title="CHRISTMAS GIFT"
            date="2022년 12월 23일(금) 19시 30분"
            place="푸르지오 아트홀"
            ticket="전석 50,000원"
            imgsrc="공연2-m.jpg"
            url="https://tickets.interpark.com/goods/22015331"
          />
          <ConcertList
            title="THE TRIP"
            date="2022년 08월 06일(금) 17시"
            place="마포아트센터 플레이맥"
            ticket="전석 20,000원"
            imgsrc="공연3-m.jpg"
            url="https://tickets.interpark.com/goods/22009482"
          />
          <ConcertList
            title="THE SCENT"
            date="2022년 7월 31일(일) 18시"
            place="국립아시아문화전당 예술극장 극장2"
            ticket="R석 50,000원 / S석 30,000원 / A석 20,000원"
            imgsrc="공연1-m.jpg"
            url="https://tickets.interpark.com/goods/22008731"
            end={true}
          />
        </Box>
      </Box>
    </>
  );
}
