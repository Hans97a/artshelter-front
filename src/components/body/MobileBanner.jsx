import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MobileBanner() {
  return (
    <Box w="20rem">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1500}
      >
        <SwiperSlide>
          <Box>
            <a
              href="https://tickets.interpark.com/goods/22008731"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="공연1-m.jpg" />
            </a>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <a
              href="https://tickets.interpark.com/goods/22015331"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="공연2-m.jpg" />
            </a>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <a
              href="https://tickets.interpark.com/goods/22009482"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="공연3-m.jpg" />
            </a>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
