import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  // <React.StrictMode>
  // </React.StrictMode>

  <ChakraProvider>
      <RouterProvider router={router} />
  </ChakraProvider>
);

// https://falaner.tistory.com/56  텍스트 에디터
// https://developer0809.tistory.com/94  메인화면 배너
