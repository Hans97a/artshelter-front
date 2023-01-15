import {
  Button,
  FormControl,
  Input,
  Box,
  Text,
  SlideFade,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

export default function PcTest() {
  const { isOpen, onToggle } = useDisclosure();
  const {
    isOpen: isConcertOpen,
    onOpen: onConcertOpen,
    onClose: onConcertClose,
  } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");
  const focusRef = useRef();
  const Focus = () => {
    focusRef.current.style = "visibility: visible";
    focusRef.current.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("제출됨");
      console.log(searchValue);
    }
  };
  const onChange = (e) => {
    setSearchValue(e.target.value);
  };
  const onBlur = () => {
    onToggle();
    setTimeout(() => (focusRef.current.style = "visibility: hidden"), 500);
  };

  return (
    <Box position="sticky" top="0" zIndex="99" bgColor="white">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link to={{ pathname: "/" }}>
          <Box marginLeft="3rem" w="18rem" h="8rem">
            <Image
              src="logo.png"
              alt="아트쉘터 로고"
              w="100%"
              h="100%"
              objectFit="contain"
            />
          </Box>
        </Link>
        <Box
          display="flex"
          columnGap="1.5rem"
          alignItems="center"
          marginRight="1.3rem"
          ml="9rem"
        >
          <Link to={{ pathname: "/about" }}>
            <Text
              fontSize="1.2rem"
              fontWeight="500"
              _hover={{ color: "green" }}
            >
              ABOUT
            </Text>
          </Link>

          <Link to={{ pathname: "/concert" }}>
            <Text
              fontSize="1.2rem"
              fontWeight="500"
              _hover={{ color: "green" }}
            >
              CONCERT
            </Text>
          </Link>

          {/* <Link to={{ pathname: "/" }}>
            <Menu autoSelect={false} colorScheme="white" isOpen={isConcertOpen}>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bgColor="white"
                variant="none"
                fontSize="1.2rem"
                _hover={{ bgColor: "white" }}
                _focus={{ boxShadow: "none" }}
                _expanded={{ color: "green" }}
                onMouseEnter={(e) => {
                  e.target.style = "color: green";
                  onConcertOpen();
                }}
                onMouseLeave={(e) => {
                  e.target.style = "color: black";
                  onConcertClose();
                }}
              >
                CONCERT
              </MenuButton>

              <MenuList
                onMouseEnter={onConcertOpen}
                onMouseLeave={onConcertClose}
                variant="none"
                position="absolute"
                top="-2"
                borderRadius="0"
                borderTopWidth="2px"
                borderTopColor="green"
                minWidth="8rem"
              >
                <MenuItem
                  _hover={{ color: "green.700" }}
                  variant="goast"
                  bg="white"
                  fontWeight="500"
                >
                  2023
                </MenuItem>
                <MenuItem
                  _hover={{ color: "green.700" }}
                  variant="goast"
                  bg="white"
                  fontWeight="500"
                >
                  2022
                </MenuItem>
              </MenuList>
            </Menu>
          </Link> */}
          <Link to={{ pathname: "/education" }}>
            <Text
              fontSize="1.2rem"
              fontWeight="500"
              _hover={{ color: "green" }}
            >
              EDUCATION
            </Text>
          </Link>
          <Link>
            <Text
              fontSize="1.2rem"
              fontWeight="500"
              _hover={{ color: "green" }}
              onClick={() => alert("시스템 점검중입니다.")}
            >
              NOTICE
            </Text>
          </Link>
          <Link to="/contact">
            <Text
              fontSize="1.2rem"
              fontWeight="500"
              _hover={{ color: "green" }}
            >
              CONTACT
            </Text>
          </Link>
        </Box>
        <Box>
          <FormControl onKeyDown={onKeyDown}>
            <Box
              display="flex"
              justifyContent="right"
              marginTop="0.5rem"
              marginRight="1rem"
            >
              <InputGroup display="flex" justifyContent="right">
                <SlideFade in={isOpen}>
                  <Input
                    type="text"
                    placeholder="검색 ..."
                    w="15rem"
                    visibility="hidden"
                    onBlur={onBlur}
                    onChange={onChange}
                    ref={focusRef}
                    focusBorderColor="gray.200"
                  />
                </SlideFade>
                <InputRightElement
                  onClick={() => {
                    onToggle();
                    Focus();
                  }}
                >
                  <Button
                    type="submit"
                    variant="ghost"
                    colorScheme="white"
                    _hover={{ color: "green.200" }}
                  >
                    <SearchIcon boxSize="1rem" />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
