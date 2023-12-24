"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

function GoodreadsSwiper() {
    return (
        <div className="w-full max-w-[1200px] border-b border-b-[#FFB800] pb-5 ">
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={6}
                pagination={{ clickable: true }}
                onSwiper={(swiper: any) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className={" swiper2-paginations"}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => 
                    <SwiperSlide key={item}>
                        <ProductCard />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default GoodreadsSwiper;
