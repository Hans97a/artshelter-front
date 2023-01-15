import { Box, Text } from "@chakra-ui/react";
import GoogleMap from "google-map-react";
import {
  FaFacebookSquare,
  FaBloggerB,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";

const CustomMarker = ({ text }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "15px",
      height: "15px",
      backgroundColor: "red",
      border: "2px solid #fff",
      borderRadius: "100%",
      userSelect: "none",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

export default function PcContact() {
  return (
    <>
      <Box bgColor="blackAlpha.50" h="16vh" display="flex" alignItems="center">
        <Text fontSize="2rem" fontWeight="500" ml="20">
          Contact
        </Text>
      </Box>
      <Box display="flex" justifyContent="center" mt="3rem" mb="3rem">
        <Box w="30rem" h="30rem" ml="-5rem">
          <GoogleMap
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
            defaultZoom={16}
            defaultCenter={{ lat: 37.564952, lng: 126.925087 }}
          >
            <CustomMarker lat={37.564952} lng={126.925087} text="" />
          </GoogleMap>
        </Box>
        <Box ml="5rem">
          <Box>
            <Text fontWeight="bold" fontSize="1.3rem" mb="3">
              주소
            </Text>
            <Box display="flex">
              <Box h="1px" border="1px solid green" w="6rem" />
              <Box h="1px" border="1px solid gray" w="8rem" />
            </Box>
            <Text mt="5">서울 특별시 마포구 성미산로 31길 11-14</Text>
          </Box>

          <Box mt="5">
            <Text fontWeight="bold" fontSize="1.3rem" mb="3">
              전화번호
            </Text>
            <Box display="flex">
              <Box h="1px" border="1px solid green" w="6rem" />
              <Box h="1px" border="1px solid gray" w="8rem" />
            </Box>
            <Text mt="5">070-8065-0538</Text>
          </Box>
          <Box mt="5">
            <Text fontWeight="bold" fontSize="1.3rem" mb="3">
              이메일
            </Text>
            <Box display="flex">
              <Box h="1px" border="1px solid green" w="6rem" />
              <Box h="1px" border="1px solid gray" w="8rem" />
            </Box>
            <Text mt="5">art_shelter@naver.com</Text>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            columnGap="5"
            color="white"
            w="25rem"
            flexWrap="wrap"
            rowGap="4"
            mt="3rem"
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
    </>
  );
}
