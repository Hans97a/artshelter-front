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
        h={heightCheck ? "50vh" : "30vh"}
        ml="10rem"
        mr="10rem"
        columnGap="7"
        mt="-3rem"
        mb="3rem"
        pb="2rem"
      >
        <Link to="artist">
          <Box
            w="xs"
            h="2xs"
            __css={{ transfrom: "scale(0.5)", transition: "transform .5s;" }}
            _hover={{ transform: "scale(1.02)", transition: "transform .5s" }}
          >
            <Image
              src="artist-m.jpg"
              display="block"
              margin="auto"
              w="2xs"
              h="2xs"
              objectFit="contain"
              pt="5"
            />
          </Box>
        </Link>
        <Link to="/education">
          <Box
            w="xs"
            h="2xs"
            __css={{ transfrom: "scale(0.5)", transition: "transform .5s;" }}
            _hover={{ transform: "scale(1.02)", transition: "transform .5s" }}
          >
            <Image
              src="edu_main.jpg"
              display="block"
              margin="auto"
              w="2xs"
              h="2xs"
              objectFit="contain"
              pt="5"
            />
          </Box>
        </Link>
        <Link to="/notice">
          <Box
            w="xs"
            h="2xs"
            __css={{ transfrom: "scale(0.5)", transition: "transform .5s;" }}
            _hover={{ transform: "scale(1.02)", transition: "transform .5s" }}
            cursor="pointer"
          >
            <Image
              src="notice-m.jpg"
              display="block"
              margin="auto"
              w="2xs"
              h="2xs"
              objectFit="contain"
              pt="5"
            />
          </Box>
        </Link>
      </Box>
    </>
  );
}
