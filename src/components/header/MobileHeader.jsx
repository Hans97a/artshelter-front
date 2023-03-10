import {
  Button,
  Box,
  Text,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useRef } from "react";
import { Link } from "react-router-dom";

export default function MobileHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef();

  return (
    <Box position="sticky" top="0" zIndex="99" bgColor="white">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link to={{ pathname: "/" }}>
          <Box w="10rem" h="4rem" pt="0.5rem">
            <Image
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="아트쉘터 로고"
            />
          </Box>
        </Link>
        <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
          <HamburgerIcon color="black" boxSize={6} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent w="40%" maxW="40%">
            <DrawerCloseButton />
            <DrawerHeader>Art Shelter</DrawerHeader>

            <DrawerBody>
              <Link to="/about">
                <Box>
                  <Text fontWeight="bold">ABOUT</Text>
                </Box>
              </Link>
              <Link to="/artist">
                <Box mt="0.5rem">
                  <Text fontWeight="bold">ARTIST</Text>
                </Box>
              </Link>
              <Link to="/concert">
                <Box mt="0.5rem">
                  <Text fontWeight="bold">CONCERT</Text>
                </Box>
              </Link>

              <Link to="/education">
                <Box mt="0.5rem">
                  <Text fontWeight="bold">EDUCATION</Text>
                </Box>
              </Link>
              <Link to="/notice">
                <Box mt="0.5rem">
                  <Text fontWeight="bold">NOTICE</Text>
                </Box>
              </Link>
              <Link to="/contact">
                <Box mt="0.5rem">
                  <Text fontWeight="bold">CONTACT</Text>
                </Box>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
}
