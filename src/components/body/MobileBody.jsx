import { Box, Image } from "@chakra-ui/react";
import MobileBanner from "./MobileBanner";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function MobileBody() {
  const heightCheck = useMediaQuery({
    query: "(min-height: 768px)",
  });
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        h={heightCheck ? "60vh" : "70vh"}
        pt="8"
        bgColor="blackAlpha.50"
      >
        <MobileBanner />
      </Box>
      <Box display="flex" justifyContent="center">
        <Box display="grid" gridRowGap={5} mt="10" mb="10">
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
      </Box>
    </>
  );
}
