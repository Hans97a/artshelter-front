import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./lib/ScrollToTop";
import About from "./routes/About";
import Artist from "./routes/Artist";
import Concert from "./routes/Concert";
import Contact from "./routes/Contact";
import Education from "./routes/Education";
import Login from "./routes/Login";

import MainPage from "./routes/MainPage";
import NotFound from "./routes/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  // </React.StrictMode>

  <ChakraProvider>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="artist" element={<Artist />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="education" element={<Education />} />
        <Route path="concert" element={<Concert />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);

// https://falaner.tistory.com/56  텍스트 에디터
// https://developer0809.tistory.com/94  메인화면 배너
// https://www.ensemblian.com/artist 디자인 참고
