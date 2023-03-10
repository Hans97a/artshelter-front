import {
  Button,
  FormControl,
  Input,
  Box,
  Text,
  Image,
  useDisclosure,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useToast,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChatIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import FormError from "../../lib/FormError";
import { useMutation } from "@tanstack/react-query";
import { postQNA } from "../../api";

export default function PcHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const toast = useToast();
  const mutation = useMutation(postQNA, {
    onSuccess: () => {
      toast({ title: "문의 완료", status: "success", position: "bottom" });
      reset();
    },
  });
  const onValid = ({ title, type, contact, content, person }) => {
    mutation.mutate({ title, type, contact, content, person });
  };
  const inputCheck = () => {
    if (errors);
    else onClose();
  };
  return (
    <Box position="sticky" top="0" zIndex="99" bgColor="white">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Link to={{ pathname: "/" }}>
          <Box marginLeft="3rem" w="18rem" h="8rem">
            <Image
              src={process.env.PUBLIC_URL + "/logo.png"}
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
          <Link to={{ pathname: "/artist" }}>
            <Text
              fontSize="1.2rem"
              fontWeight="500"
              _hover={{ color: "green" }}
            >
              ARTIST
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

          <Link to={{ pathname: "/education" }}>
            <Text
              fontSize="1.2rem"
              fontWeight="500"
              _hover={{ color: "green" }}
            >
              EDUCATION
            </Text>
          </Link>

          <Link to={{ pathname: "/notice" }}>
            <Text
              fontSize="1.2rem"
              fontWeight="500"
              _hover={{ color: "green" }}
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
        <Box pr="5rem" ml="10rem">
          <Button
            bgColor="white"
            _hover={{ bgColor: "white" }}
            onClick={onOpen}
          >
            <ChatIcon />{" "}
          </Button>
        </Box>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay bg="blackAlpha.500" />
          <ModalContent>
            <ModalHeader>1:1 문의하기</ModalHeader>
            <ModalCloseButton />
            <Box as="form" onSubmit={handleSubmit(onValid)}>
              <ModalBody>
                <FormControl>
                  <FormLabel fontSize="sm" color="gray.600">
                    제목
                  </FormLabel>
                  <Input
                    name="title"
                    w="100%"
                    variant="flushed"
                    placeholder="문의 제목"
                    borderColor="#797979"
                    height="9"
                    fontWeight="bold"
                    {...register("title", {
                      required: "문의 제목을 입력해 주세요.",
                    })}
                  />
                  {errors.title ? (
                    <FormError errorMessage={errors.title.message} />
                  ) : null}
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm" color="gray.600" mt="1rem">
                    문의 유형
                  </FormLabel>
                  <Select
                    name="type"
                    placeholder=" "
                    {...register("type", {
                      required: "문의 유형을 선택해 주세요.",
                    })}
                  >
                    <option value="concert">공연 문의</option>
                    <option value="edu">교육 문의</option>
                    <option value="agen">대행 문의</option>
                    <option value="etc">기타</option>
                  </Select>
                  {errors.type ? (
                    <FormError errorMessage={errors.type.message} />
                  ) : null}
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm" color="gray.600" mt="1rem">
                    연락처
                  </FormLabel>
                  <Input
                    name="contact"
                    w="100%"
                    variant="flushed"
                    placeholder="답변 받으실 연락처(이메일, 휴대폰 번호 등)"
                    borderColor="#797979"
                    height="9"
                    fontWeight="bold"
                    {...register("contact", {
                      required: "연락처를 입력해 주세요.",
                    })}
                  />
                  {errors.contact ? (
                    <FormError errorMessage={errors.contact.message} />
                  ) : null}
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm" color="gray.600" mt="1rem">
                    문의자 성함
                  </FormLabel>
                  <Input
                    name="person"
                    w="100%"
                    variant="flushed"
                    placeholder="성함 혹은 기관 이름"
                    borderColor="#797979"
                    height="9"
                    fontWeight="bold"
                    {...register("person", {
                      required: "성함을 입력해 주세요.",
                    })}
                  />
                  {errors.person ? (
                    <FormError errorMessage={errors.person.message} />
                  ) : null}
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm" color="gray.600" mt="1rem">
                    문의 내용
                  </FormLabel>
                  <textarea
                    name="content"
                    style={{
                      width: "100%",
                      border: "1px solid gray",
                      height: "8rem",
                    }}
                    {...register("content", {
                      required: "문의 내용을 입력하세요.",
                    })}
                  />
                  {errors.content ? (
                    <FormError errorMessage={errors.content.message} />
                  ) : null}
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  colorScheme="green"
                  mr="1rem"
                  onClick={inputCheck}
                >
                  문의하기
                </Button>
                <Button onClick={onClose}>닫기</Button>
              </ModalFooter>
            </Box>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}
