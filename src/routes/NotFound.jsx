import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <Box display="flex" justifyContent="center" alignItems="center" h="80vh">
        <Box>
          <Text color="red" fontSize="2rem" fontWeight="bold">
            404 Not Found!
          </Text>
          <Text mt="10" mb="5">
            존재하지 않는 페이지입니다.
          </Text>
          <Text mb="5">관리자에게 문의하거나 올바른 경로로 접속해 주세요.</Text>
          <Box>
            <Link to="/">
              <Button w="10rem" colorScheme="green">
                Home
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
