"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function GoodreadsSwiper() {
    return (
        <div className="w-full max-w-[1290px] border-b border-b-[#FFB800] pb-5 ">
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={6}
                pagination={{ clickable: true }}
                onSwiper={(swiper: any) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className={"w-full  swiper2-paginations"}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => 
                    <SwiperSlide key={item}>
                        <div className="w-full flex flex-col justify-center items-center gap-3">
                            <Image
                                src={"/img/book3.jpg"}
                                width={200}
                                height={230}
                                alt=""
                                className="w-[180px] h-[240px] shadow-lg"
                            />
                            <h3 className="font-bold text-center leading-[18px]">
                                Tomorrow, and Tomorrow, and Tomorrow
                            </h3>
                            <p className="text-center">Gabrielle Zevin</p>
                            <button className="font-bold bg-gradient-to-br from-[#8c00fb] to-[#fcba11] text-white px-3 py-2 rounded-sm">75.000 sum</button>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default GoodreadsSwiper;
