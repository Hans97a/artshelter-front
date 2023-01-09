import {
  Box,
  Button,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function MobileArtistList() {
  return (
    <>
      <Box bgColor="blackAlpha.50" h="5rem" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="5%">
          Artist
        </Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <VStack mt="10" mb="5">
          <Box>
            <Box w="xs" pb="10" bgColor="gray.200">
              <Box display="flex" justifyContent="center">
                <Image
                  src="최진욱.jpg"
                  mt="10"
                  display="block"
                  w="2xs"
                  h="xs"
                />
              </Box>
              <Box display="flex" justifyContent="center">
                <Box>
                  <Text fontSize="1.3rem" fontWeight="600">
                    최진욱· Jinwook Choi
                  </Text>
                  <Text textAlign="center">Saxophone</Text>
                  <Box display="flex" justifyContent="center" mt="5">
                    <Popover placement="top">
                      <PopoverTrigger>
                        <Button colorScheme="green">Profile</Button>
                      </PopoverTrigger>
                      <PopoverContent w="80vw" h="40vh">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody overflowY="scroll">
                          <Box ml="5" mt="5" display="grid" rowGap="3">
                            <Text>- 중앙대학교 음악대학 졸업</Text>
                            <Text>- Asia Pacific Saxophone Academy 수료</Text>
                            <Text>
                              - Asia Pacific Saxophone Competition
                              국제 콩쿠르 입상
                            </Text>
                            <Text>- 중국 청도(칭다오) 초청 연주</Text>
                            <Text>
                              - 「The Red Tango」 예술의 전당 IBK홀 연주
                            </Text>
                            <Text>
                              - 중앙대학교 윈드 오케스트라와 협연(롯데 콘서트홀)
                            </Text>
                            <Text>- 중앙대학교 금관앙상블과 협연</Text>
                            <Text>- 경기 교사합창단과 협연</Text>
                            <Text>
                              - 포네클래식 홀 , 통의동 클래식 홀,
                              쌀롱드 무지끄 홀 독주회
                            </Text>
                            <Text>- 앙상블 리안홀 듀오 리사이틀</Text>
                            <Text>
                              - Dot The Line 현대 음악 페스티벌 초청 연주
                            </Text>
                            <Text>- 2018 시흥시 문화 홍보대사</Text>
                            <Text>- T- broad tv 공개 방송 출연</Text>
                            <Text>
                              - KBS라디오 Classic FM 「KBS음악실」출연
                            </Text>
                            <Text>- 「Orinary」미니앨범 발매</Text>
                            <Text>- 비스포크 색소폰 콰르텟 멤버</Text>
                          </Box>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* divide */}
          <Box>
            <Box w="xs" mt="5" pb="10" bgColor="gray.200">
              <Box display="flex" justifyContent="center">
                <Image
                  src="김남훈.jpeg"
                  mt="10"
                  display="block"
                  w="2xs"
                  h="xs"
                />
              </Box>
              <Box display="flex" justifyContent="center">
                <Box>
                  <Text fontSize="1.3rem" fontWeight="600">
                    김남훈· Namhoon Kim
                  </Text>
                  <Text textAlign="center">Bassoon</Text>
                  <Box display="flex" justifyContent="center" mt="5">
                    <Popover placement="top">
                      <PopoverTrigger>
                        <Button colorScheme="green">Profile</Button>
                      </PopoverTrigger>
                      <PopoverContent w="80vw" h="40vh">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody overflowY="scroll">
                          <Box ml="5" mt="5" display="grid" rowGap="3">
                            <Text>- 한양대학교 음악대학 졸업</Text>
                            <Text>- 한국예술종합학교 전문사 과정 재학중</Text>
                            <Text>- 말러리안 시리즈4 말러 6번 차석역임</Text>
                            <Text>- 2021 [한음 실내악콩쿠르] 1등</Text>
                            <Text>- 2021 광주시향 차석 역임</Text>
                            <Text>
                              - 2022 [평창대관령음악제 엠픽 오케스트라 아카데미]
                              수료
                            </Text>
                            <Text>- 광주예술고등학교 출강</Text>
                          </Box>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* divide */}
          <Box>
            <Box w="xs" mt="5" pb="10" bgColor="gray.200">
              <Box display="flex" justifyContent="center">
                <Image
                  src="서정민.jpg"
                  mt="10"
                  display="block"
                  w="2xs"
                  h="xs"
                />
              </Box>
              <Box display="flex" justifyContent="center">
                <Box>
                  <Text fontSize="1.3rem" fontWeight="600">
                    서정민· Jeongmin Seo
                  </Text>
                  <Text textAlign="center">Composer</Text>
                  <Box display="flex" justifyContent="center" mt="5">
                    <Popover placement="top">
                      <PopoverTrigger>
                        <Button colorScheme="green">Profile</Button>
                      </PopoverTrigger>
                      <PopoverContent w="80vw" h="25vh">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody overflowY="scroll">
                          <Box ml="5" mt="5" display="grid" rowGap="3">
                            <Text>- 중앙대학교 음악학부 졸업예정</Text>
                            <Text>
                              - 창작뮤지컬 ‘Cloud nine’ 음악감독 및 작곡
                            </Text>
                            <Text>- 2021 경북창작가곡콩쿨 본선 진출</Text>
                            <Text>- 2021 제주국제관악제 작곡부문 1위</Text>
                          </Box>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
