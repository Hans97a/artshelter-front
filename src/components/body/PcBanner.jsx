import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";

export default function PcBanner() {
  const heightCheck = useMediaQuery({
    query: "(max-height: 768px)"
  });

  return (

    <Box w={heightCheck? "20rem": "30rem"} >
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
            <Image src="공연1-m.jpg" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src="공연2-m.jpg" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src="공연3-m.jpg" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
