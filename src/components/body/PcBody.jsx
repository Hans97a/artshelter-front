import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import PcBanner from "./PcBanner";

export default function PcBody() {
  const heightCheck = useMediaQuery({
    query: "(max-height: 768px)",
  });

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        h="80vh"
        bgColor="blackAlpha.50"
        pt="8rem"
        pb="12rem"
      >
        <PcBanner />
        <Box ml="4rem">
          <Text fontSize="2rem" fontWeight="bold">
            Art Shelter's Concert
          </Text>
          <Link to="concert">
            <Button colorScheme="green" mt="5">
              VIEW MORE
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        h={heightCheck ? "60vh" : "40vh"}
        ml="10rem"
        mr="10rem"
        columnGap="7"
        mt="-2rem"
        mb="5rem"
      >
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
            <Text textAlign="center" mt="3" fontSize="1.2rem" fontWeight="bold">
              ARTISTS
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
            <Text textAlign="center" mt="3" fontSize="1.2rem" fontWeight="bold">
              Education
            </Text>
            <Text textAlign="center" mt="3" fontSize="1.2rem">
              <ArrowRightIcon />
            </Text>
          </Box>
        </Link>
        <Link>
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
        </Link>

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
            <Text textAlign="center" mt="3" fontSize="1.2rem" fontWeight="bold">
              Notice
            </Text>
            <Text textAlign="center" mt="3" fontSize="1.2rem">
              <ArrowRightIcon />
            </Text>
          </Box>
        </Link> */}
      </Box>
    </>
  );
}
