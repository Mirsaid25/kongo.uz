"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

function GoodreadsSwiper() {
    return (
        <Swiper
            modules={[Pagination]}
            breakpoints={{
                0: {
                    slidesPerView: 3,
                    spaceBetween:10
                },
                550: {
                    slidesPerView: 4,
                    spaceBetween:10
                },
                // 640: {
                //     slidesPerView: 3,
                // },
                768: {
                    slidesPerView: 4,
                    spaceBetween:20
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween:30
                },
                1280: {
                    slidesPerView: 6,
                    spaceBetween:40
                },
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className={"swiper2-paginations"}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                <SwiperSlide key={item}>
                    <ProductCard />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default GoodreadsSwiper;
