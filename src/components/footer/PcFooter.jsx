import { Box, Text } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

import {
  FaFacebookSquare,
  FaBloggerB,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function PcFooter() { // 끝
  return (
    <>
      <Box w="100%" h="15%" bgColor="blackAlpha.800">
        <Box display="flex" justifyContent="center">
          <Box pt="1%">
            <Text
              color="green"
              display="block"
              fontWeight="bold"
              fontSize="2rem"
            >
              ART SHELTER
            </Text>
            <Box display="flex" alignItems="center"   >
              <Box color="white" >
                <Text w="23rem">
                  아트 쉘터{" "}
                  <Box as="span" ml="3px" mr="3px">
                    |
                  </Box>{" "}
                  사업자등록번호 : 769-99-01174{" "}
                  <Box as="span" ml="3px">
                    |
                  </Box>
                </Text>
                <Text>
                  대표 : 김지후{" "}
                  <Box as="span" ml="3px" mr="3px">
                    |
                  </Box>
                  서울 마포구 성미산로 31길 11-14
                </Text>
                <Text>TEL : 070-8065-0538</Text>
                <Text>E-MAIL : art_shelter@naver.com</Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                columnGap="5"
                color="white"
                ml="10%"
                
                w="25rem"
                flexWrap="wrap"
                rowGap="4"
              >
                <Box
                  borderRadius="50%"
                  bgColor="green.500"
                  w="2.5rem"
                  h="2.5rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <a
                    href="https://www.facebook.com/art.shelter11"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookSquare fontSize="1.3rem" />
                  </a>
                </Box>
                <Box
                  borderRadius="50%"
                  bgColor="green.500"
                  w="2.5rem"
                  h="2.5rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <a
                    href="https://blog.naver.com/art_shelter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaBloggerB fontSize="1.3rem" />
                  </a>
                </Box>
                <Box
                  borderRadius="50%"
                  bgColor="green.500"
                  w="2.5rem"
                  h="2.5rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <a
                    href="https://www.instagram.com/art.shelter_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram fontSize="1.3rem" />
                  </a>
                </Box>
                <Box
                  borderRadius="50%"
                  bgColor="green.500"
                  w="2.5rem"
                  h="2.5rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <a
                    href="https://www.youtube.com/channel/UCR7YmXDJZr9thCd10wEVilQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaYoutube fontSize="1.3rem" />
                  </a>
                </Box>
                <Box
                  borderRadius="50%"
                  bgColor="green.500"
                  w="2.5rem"
                  h="2.5rem"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <a href="mailto:﻿art_shelter@naver.com">
                    <EmailIcon fontSize="1.3rem" />
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt="2rem" pb="2rem">
          <Box color="white">
            <Text>Copyright © 2022 ART SHELTER</Text>
            <Text>Powered by ART SHELTER</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
