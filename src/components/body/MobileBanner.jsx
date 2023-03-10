import { Box, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import { getBanner } from "../../api";
import { Link } from "react-router-dom";

export default function MobileBanner() {
  const { isLoading, data } = useQuery(["banner"], getBanner);
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
        {!isLoading
          ? data?.map((concert, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <Box>
                    <Link to={{ pathname: `/concert/${concert.pk}` }}>
                      <Image src={concert.cover} />
                    </Link>
                  </Box>
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>
    </Box>
  );
}
