import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./lib/ScrollToTop";
import About from "./routes/About";
import Artist from "./routes/Artist";
import Concert from "./routes/Concert";
import ConcertDetail from "./routes/ConcertDetail";
import Contact from "./routes/Contact";
import Education from "./routes/Education";

import MainPage from "./routes/MainPage";
import NotFound from "./routes/NotFound";
import Notice from "./routes/Notice";
import NoticeDetail from "./routes/NoticeDetail";

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <QueryClientProvider client={client}>
    <ChakraProvider>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="artist" element={<Artist />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="concert" element={<Concert />} />
          <Route path="concert/:pk" element={<ConcertDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="notice" element={<Notice />} />
          <Route path="notice/:pk" element={<NoticeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </QueryClientProvider>
);
