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
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  AccordionButton,
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
            <Image src="logo.png" alt="아트쉘터 로고" />
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

              {/* temp */}
              <Link to="/concert">
                <Box mt="0.5rem">
                  <Text fontWeight="bold">CONCERT</Text>
                </Box>
              </Link>

              {/* <Box mt="0.5rem">
                <Accordion border="none" allowToggle>
                  <AccordionItem borderStyle="hidden">
                    <AccordionButton pl="0" _hover={{ color: "green.700" }}>
                      <Text fontWeight="bold">CONCERT</Text>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link to="/">
                        <Text _hover={{ color: "green.700" }}>2023</Text>
                      </Link>
                      <Link>
                        <Text  _hover={{ color: "green.700" }}>2022</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box> */}
              <Link to="/education">
                <Box mt="0.5rem">
                  <Text fontWeight="bold">EDUCATION</Text>
                </Box>
              </Link>
              <Link to="/">
                <Box mt="0.7rem">
                  <Text fontWeight="bold">NOTICE</Text>
                </Box>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  );
}
