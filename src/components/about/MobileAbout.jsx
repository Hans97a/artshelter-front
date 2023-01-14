import { Box, Text } from "@chakra-ui/react";

export default function MobileAbout() {
  return (
    <>
      <Box bgColor="blackAlpha.50" h="5rem" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="5%">
          About Us
        </Text>
      </Box>

      <Box mt="10" mb="5rem" ml="7">
        <Box>
          <Text fontSize="1.5rem" fontWeight="600">
            Art Shelter
          </Text>
          <Box w="8rem" borderBottom="2px solid green" />
          <Box w="25rem">
            <Text mt="15">
              예술(art)과 휴식처(shelter)가 합쳐진 공간으로 다양한 문화 예술
              콘텐츠를 제공하며, 청년 예술가들을 선두로 편안하고 쉬운 문화 예술
              활동을 추구하는 단체입니다.
            </Text>
            <Text mt="10" fontStyle="oblique" fontWeight="600">
              “ 청년 예술인들과 함께 지역 내 자생적 문화향유 프로그램 확산 ”
            </Text>
            <Text mt="1.5rem" fontSize="0.9rem">
              대학을 졸업한 청년예술인들에게 주어진 무대는 많지 않습니다.
              청년예술인들과 함께 예술 단체의 작품 발표 기회 지원과 역량 강화를
              위한 창작 환경을 조성하고자 하며, 궁극적으로는 지역 내에서 스스로
              나아갈 수 있는 문화 예술 프로그램을 기획하고 확산시켜
              청년예술인들과 지역의 문화 예술 발전을 이루고자 합니다.
            </Text>
            <Text mt="2rem" fontStyle="oblique" fontWeight="600">
              “ 예술인들의 역량 강화 ”
            </Text>
            <Text mt="1.5rem" fontSize="0.9rem">
              공연기획, 연주, 작/편곡 등 다양한 분야의 예술인들이 서로의 분야에
              대해 알아가고 서로 상호 소통하며 다양한 기회를 만들고자 합니다. 더
              나아가 예술인들의 역량 강화를 위한 창작 환경을 조성하고 활동
              영역을 넓혀 나가길 기대하며, 예술인들이 꾸준히 도전하고 예술활동을
              지속하며 전문예술인으로 한발 더 다가갈 수 있는 기회를 제공하고자
              합니다.
            </Text>
            <Text mt="2rem" fontStyle="oblique" fontWeight="600">
              “ 클래식 공연시장의 소비자 확장 및 활성화 ”
            </Text>
            <Text mt="1.5rem" fontSize="0.9rem">
              클래식 음악의 대중화를 위해 일반적인 클래식 공연뿐만 아니라 클래식
              음악 안에서의 다양한 시도를 하고자 합니다. 향과 함께 즐기는 클래식
              공연 ‘THE SCENT’를 시작으로 클래식을 조금 더 쉽고 즐겁게 즐길 수
              있도록 노력하고 있습니다.
            </Text>
          </Box>
        </Box>
      </Box>
      {/* <Box mt="10" mb="5rem">
        <Box display="flex" justifyContent="center">
          <Box>
            <Text fontSize="1.5rem" fontWeight="600">
              Art Shelter
            </Text>
            <Box w="8rem" borderBottom="2px solid green" />
            <Box w="25rem">
              <Text  mt="15">
                예술(art)과 휴식처(shelter)가 합쳐진 공간으로 다양한 문화 예술
                콘텐츠를 제공하며, 청년 예술가들을 선두로 편안하고 쉬운 문화
                예술 활동을 추구하는 단체입니다.
              </Text>
              <Text mt="10" fontStyle="oblique" fontWeight="600">
                “ 청년 예술인들과 함께 지역 내 자생적 문화향유 프로그램 확산 ”
              </Text>
              <Text  mt="1.5rem" fontSize="0.9rem">
                대학을 졸업한 청년예술인들에게 주어진 무대는 많지 않습니다.
                청년예술인들과 함께 예술 단체의 작품 발표 기회 지원과 역량
                강화를 위한 창작 환경을 조성하고자 하며, 궁극적으로는 지역
                내에서 스스로 나아갈 수 있는 문화 예술 프로그램을 기획하고
                확산시켜 청년예술인들과 지역의 문화 예술 발전을 이루고자 합니다.
              </Text>
              <Text mt="2rem" fontStyle="oblique" fontWeight="600">
                “ 예술인들의 역량 강화 ”
              </Text>
              <Text mt="1.5rem" fontSize="0.9rem">
                공연기획, 연주, 작/편곡 등 다양한 분야의 예술인들이 서로의
                분야에 대해 알아가고 서로 상호 소통하며 다양한 기회를 만들고자
                합니다. 더 나아가 예술인들의 역량 강화를 위한 창작 환경을
                조성하고 활동 영역을 넓혀 나가길 기대하며, 예술인들이 꾸준히
                도전하고 예술활동을 지속하며 전문예술인으로 한발 더 다가갈 수
                있는 기회를 제공하고자 합니다.
              </Text>
              <Text mt="2rem" fontStyle="oblique" fontWeight="600">
                “ 클래식 공연시장의 소비자 확장 및 활성화 ”
              </Text>
              <Text mt="1.5rem" fontSize="0.9rem">
                클래식 음악의 대중화를 위해 일반적인 클래식 공연뿐만 아니라
                클래식 음악 안에서의 다양한 시도를 하고자 합니다. 향과 함께
                즐기는 클래식 공연 ‘THE SCENT’를 시작으로 클래식을 조금 더 쉽고
                즐겁게 즐길 수 있도록 노력하고 있습니다.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </>
  );
}
