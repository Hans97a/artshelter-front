import { Box, Text, Image } from "@chakra-ui/react";
import MobileBanner from "./MobileBanner";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function MobileBody() {
  const heightCheck = useMediaQuery({
    query: "(max-height: 768px)",
  });

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        h="70vh"
        pt="8"
        bgColor="blackAlpha.50"
      >
        <MobileBanner />
      </Box>
      <Box display="flex" justifyContent="center">
        <Box display="grid" gridRowGap={5} mt="10" mb="10">
          <Link to="artist">
            <Box
              bgColor="gray.200"
              w="xs"
              h="sm"
              __css={{ transfrom: "scale(0.5)", transition: "transform .5s;" }}
              _hover={{ transform: "scale(1.02)", transition: "transform .5s" }}
            >
              <Image
                src="최진욱.jpg"
                display="block"
                margin="auto"
                w="2xs"
                h="2xs"
                objectFit="contain"
                pt="5"
              />
              <Text
                textAlign="center"
                mt="3"
                fontSize="1.2rem"
                fontWeight="bold"
              >
                Artist
              </Text>
              <Text textAlign="center" mt="3" fontSize="1.2rem">
                <ArrowRightIcon />
              </Text>
            </Box>
          </Link>
          <Link to="/education">
            <Box
              bgColor="gray.200"
              w="xs"
              h="sm"
              __css={{ transfrom: "scale(0.5)", transition: "transform .5s;" }}
              _hover={{ transform: "scale(1.02)", transition: "transform .5s" }}
            >
              <Image
                src="edu.jpg"
                display="block"
                margin="auto"
                w="2xs"
                h="2xs"
                objectFit="contain"
                pt="5"
              />
              <Text
                textAlign="center"
                mt="3"
                fontSize="1.2rem"
                fontWeight="bold"
              >
                Education
              </Text>
              <Text textAlign="center" mt="3" fontSize="1.2rem">
                <ArrowRightIcon />
              </Text>
            </Box>
          </Link>
          <Box
            bgColor="gray.200"
            w="xs"
            h="sm"
            __css={{ transfrom: "scale(0.5)", transition: "transform .5s;" }}
            _hover={{ transform: "scale(1.02)", transition: "transform .5s" }}
            onClick={() => alert("시스템 점검중입니다.")}
            cursor="pointer"
          >
            <Image
              src="notice.jpg"
              display="block"
              margin="auto"
              w="2xs"
              h="2xs"
              objectFit="contain"
              pt="5"
            />
            <Text textAlign="center" mt="3" fontSize="1.2rem" fontWeight="bold">
              Notice
            </Text>
            <Text textAlign="center" mt="3" fontSize="1.2rem">
              <ArrowRightIcon />
            </Text>
          </Box>
          {/* <Link to="artist">
            <Box
              bgColor="gray.200"
              w="xs"
              h="sm"
              __css={{ transfrom: "scale(0.5)", transition: "transform .5s;" }}
              _hover={{ transform: "scale(1.02)", transition: "transform .5s" }}
            >
              <Image
                src="최진욱.jpg"
                display="block"
                margin="auto"
                w="2xs"
                h="2xs"
                objectFit="contain"
                pt="5"
              />
              <Text
                textAlign="center"
                mt="3"
                fontSize="1.2rem"
                fontWeight="bold"
              >
                ARTISTS
              </Text>
              <Text textAlign="center" mt="3" fontSize="1.2rem">
                <ArrowRightIcon />
              </Text>
            </Box>
          </Link> */}
        </Box>
      </Box>
    </>
  );
}
