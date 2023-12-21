"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function GoodreadsSwiper() {
    return (
        <div className="w-full max-w-[1290px] border-b border-b-[#FFB800] pb-5 ">
            <Swiper
                modules={[Pagination]}
                spaceBetween={25}
                slidesPerView={6}
                pagination={{ clickable: true }}
                onSwiper={(swiper: any) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className={"w-full  swiper2-paginations"}
            >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => 
                    <SwiperSlide key={item}>
                        <div className="w-full">
                            <Image
                                src={"/img/book2.png"}
                                width={190}
                                height={230}
                                alt=""
                            />
                            <h3 className="font-bold text-center leading-[18px]">
                                Tomorrow, and Tomorrow, and Tomorrow
                            </h3>
                            <p className="text-center mt-3">Gabrielle Zevin</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default GoodreadsSwiper;
