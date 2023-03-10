import { Box, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function MobileFooter() {
  return (
    <>
      <Box w="100%" h="20%" bgColor="blackAlpha.800">
        <Box>
          <Box pt="1%" ml="2rem">
            <Link to="/">
              <Text
                color="green"
                fontWeight="bold"
                fontSize="1.5rem"
                mt="0.5rem"
              >
                ART SHELTER
              </Text>
            </Link>
            <Box>
              <Box color="white" mt="0.5rem" fontSize="0.8rem">
                <Text>
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
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mt="0.5rem" pb="1rem" ml="2rem">
          <Box color="white" fontSize="0.8rem">
            <Text>Copyright © 2022 ART SHELTER. Powered by ART SHELTER</Text>
          </Box>
        </Box>
        {/* <Box display="flex" justifyContent="center">
          <Box pt="1%">
            <Text color="green" fontWeight="bold" fontSize="1.5rem" mt="0.5rem">
              ART SHELTER
            </Text>
            <Box>
              <Box color="white" mt="0.5rem" fontSize="0.8rem">
                <Text>
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
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt="0.5rem" pb="1rem">
          <Box color="white" fontSize="0.8rem">
            <Text>Copyright © 2022 ART SHELTER</Text>
            <Text>Powered by ART SHELTER</Text>
          </Box>
        </Box> */}
      </Box>
    </>
  );
}
