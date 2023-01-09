import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Stack
      bgImage={
        "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7) ),url('./back.jpg')"
      }
      bgPosition="center"
      bgSize={"cover"}
      justifyContent="center"
      alignItems={"center"}
      minH="100vh"
      px={"20px"}
      py="10"
    >
      <VStack
        px="8"
        py="14"
        spacing="10"
        bgColor={"rgba(255, 255, 255, 0.6)"}
        borderRadius="2xl"
        w={["100%", "xl"]}
      >
        <Heading size="lg" fontWeight="semibold" alignSelf="flex-start">
          관리자 로그인
        </Heading>
        <Stack as="form" spacing="5" w="100%">
          <FormControl>
            <FormLabel>ID</FormLabel>
            <Input type="text" w="100%" placeholder="아이디를 입력하세요" />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>PASSWORD</FormLabel>
            <Input type="password" w="100%" placeholder="비밀번호를 입력하세요" />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <Button
          type="submit"
          colorScheme="green"
          borderRadius="xl"
          >
            Log in
          </Button>
        </Stack>
        <Text>로그인에 문제가 있거나 아이디 혹은 비밀번호를 잊으셨나요?<br/> 시스템 관리자에게 문의하세요.</Text>
      </VStack>
    </Stack>
  );
}
