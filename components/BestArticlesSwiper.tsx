"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function BestArticlesSwiper() {
    return (
        <Swiper
            modules={[Navigation]}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            }}
            loop={true}
            navigation={{
                prevEl: ".prev",
                nextEl: ".next",
            }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                <SwiperSlide key={item}>
                    <div className="w-full flex gap-5 items-center mb-16 aspect-video">
                        <Image
                            src={"/img/endBlock.png"}
                            width={200}
                            height={400}
                            alt=""
                            className="w-full h-full"
                        />
                        <p className="absolute bottom-24 leading-[19px] left-5 right-5 text-white max-xl:text-sm max-xl:leading-[17px] max-xl:bottom-20 max-lg:leading-5 max-md:leading-4 max-sm:bottom-24 max-sm:text-sm max-[390px]:text-xs max-[390px]:bottom-20">
                            The ultimate productivity hack is saying no. Not
                            doing something will always be faster than doing it.
                            This statement reminds me of the old computer
                            programming saying, “Remember that there is no code
                            faster than no code
                        </p>
                    </div>
                </SwiperSlide>
            ))}
            <div className="absolute bottom-0 flex items-center gap-5 left-1/2 -translate-x-1/2 z-20">
                <div className="prev">
                    <Image
                        src={"/icons/arrow-gradient.svg"}
                        width={15}
                        height={20}
                        alt=""
                        className="w-[20px] rotate-180 cursor-pointer"
                    />
                </div>

                <div className="next">
                    <Image
                        src={"/icons/arrow-gradient.svg"}
                        width={15}
                        height={20}
                        alt=""
                        className="cursor-pointer w-[20px]"
                    />
                </div>
            </div>
        </Swiper>
    );
}

export default BestArticlesSwiper;
