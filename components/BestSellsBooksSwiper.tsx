"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function BestSellsBooksSwiper() {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className={"w-full  swiper2-paginations"}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                <SwiperSlide key={item}>
                    <div className="w-full flex gap-5 items-center">
                        <Image
                            src={"/img/book2.png"}
                            width={300}
                            height={200}
                            alt=""
                            className="w-[320px] h-[400px]"
                        />
                        <div className="flex flex-col items-start">
                            <h3 className="font-bold text-2xl">
                                This Time Tomorrow
                            </h3>
                            <div className="flex items-center gap-5 mt-4">
                                <div className="w-[85px] h-[85px] bg-black rounded-full overflow-hidden"></div>
                                <p className="text-center mt-3">
                                    Gabrielle Zevin
                                </p>
                            </div>
                            <p className="mt-6">
                                With her celebrated humor, insight, and heart,
                                beloved New York Times bestseller Emma Straub
                                offers her own twist on traditional time travel
                                tropes, and a different kind of love story.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default BestSellsBooksSwiper;
