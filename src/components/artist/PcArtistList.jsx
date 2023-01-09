import { Box, Image, Text } from "@chakra-ui/react";

export default function PcArtistList() {
  return (
    <>
      <Box bgColor="blackAlpha.50" h="16vh" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="20">
          Artist
        </Text>
      </Box>

      <Box mt="4rem" display="flex" justifyContent="center">
        <Box>
          <Box display="flex" alignItem="center" mb="10">
            <Box
              w="15rem"
              h="20rem"
              mr="5"
              boxShadow="5px 5px 10px rgb(0, 0, 0, 0.6)"
            >
              <Image src="최진욱.jpg" w="100%" h="100%" alt="artist" />
            </Box>
            <Box ml="5">
              <Text fontSize="2rem" fontWeight="600">
                최진욱· Jinwook Choi
              </Text>
              <Text
                fontSize="1.2rem"
                color="green.500"
                fontStyle="oblique"
                fontWeight="600"
              >
                Saxophone
              </Text>
              <Box
                mt="4"
                h="2"
                w="20%"
                borderBottom="2px"
                borderBottomColor="green.500"
              />
              <Text mt="2">- 중앙대학교 음악대학 졸업</Text>
              <Text mt="2">- Asia Pacific Saxophone Academy 수료</Text>
              <Text mt="2">
                - Asia Pacific Saxophone Competition 국제 콩쿠르 입상
              </Text>
              <Text mt="2">- 중국 청도(칭다오) 초청 연주</Text>
              <Text mt="2">- 「The Red Tango」 예술의 전당 IBK홀 연주</Text>
              <Text mt="2">
                - 중앙대학교 윈드 오케스트라와 협연(롯데 콘서트홀)
              </Text>
              <Text mt="2">- 중앙대학교 금관앙상블과 협연</Text>
              <Text mt="2">- 경기 교사합창단과 협연</Text>
              <Text mt="2">
                - 포네클래식 홀 , 통의동 클래식 홀, 쌀롱드 무지끄 홀 독주회
              </Text>
              <Text mt="2">- 앙상블 리안홀 듀오 리사이틀</Text>
              <Text mt="2">- Dot The Line 현대 음악 페스티벌 초청 연주</Text>
              <Text mt="2">- 2018 시흥시 문화 홍보대사</Text>
              <Text mt="2">- T- broad tv 공개 방송 출연</Text>
              <Text mt="2">- KBS라디오 Classic FM 「KBS음악실」출연</Text>
              <Text mt="2">- 「Orinary」미니앨범 발매</Text>
              <Text mt="2">- 비스포크 색소폰 콰르텟 멤버</Text>
            </Box>
          </Box>


          <Box display="flex" alignItem="center" mb="20">
            <Box
              w="15rem"
              h="20rem"
              mr="5"
              boxShadow="5px 5px 10px rgb(0, 0, 0, 0.6)"
            >
              <Image src="김남훈.jpeg" w="100%" h="100%" alt="artist" />
            </Box>
            <Box ml="5">
              <Text fontSize="2rem" fontWeight="600">
                김남훈· Namhoon Kim
              </Text>
              <Text
                fontSize="1.2rem"
                color="green.500"
                fontStyle="oblique"
                fontWeight="600"
              >
                Bassoon
              </Text>
              <Box
                mt="4"
                h="2"
                w="20%"
                borderBottom="2px"
                borderBottomColor="green.500"
              />
              <Text mt="2">- 한양대학교 음악대학 졸업</Text>
              <Text mt="2">- 한국예술종합학교 전문사 과정 재학중</Text>
              <Text mt="2">- 말러리안 시리즈4 말러 6번 차석역임</Text>
              <Text mt="2">- 2021 [한음 실내악콩쿠르] 1등</Text>
              <Text mt="2">- 2021 광주시향 차석 역임</Text>
              <Text mt="2">- 2022 [평창대관령음악제 엠픽 오케스트라 아카데미] 수료</Text>
              <Text mt="2">- 광주예술고등학교 출강</Text>
            </Box>
          </Box>


          <Box display="flex" alignItem="center" mb="20">
            <Box
              w="15rem"
              h="20rem"
              mr="5"
              boxShadow="5px 5px 10px rgb(0, 0, 0, 0.6)"
            >
              <Image src="서정민.jpg" w="100%" h="100%" alt="artist" />
            </Box>
            <Box ml="5">
              <Text fontSize="2rem" fontWeight="600">
                서정민· Jeongmin Seo
              </Text>
              <Text
                fontSize="1.2rem"
                color="green.500"
                fontStyle="oblique"
                fontWeight="600"
              >
                Composer
              </Text>
              <Box
                mt="4"
                h="2"
                w="20%"
                borderBottom="2px"
                borderBottomColor="green.500"
              />
              <Text mt="2">- 중앙대학교 음악학부 졸업예정</Text>
              <Text mt="2">- 창작뮤지컬 ‘Cloud nine’ 음악감독 및 작곡</Text>
              <Text mt="2">- 2021 경북창작가곡콩쿨 본선 진출</Text>
              <Text mt="2">- 2021 제주국제관악제 작곡부문 1위</Text>
              
            </Box>
          </Box>





        </Box>
      </Box>
    </>
  );
}
