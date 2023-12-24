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
            loop={true}
            navigation={{
                prevEl: ".prev",
                nextEl: ".next",
            }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className={"w-full"}
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                <SwiperSlide key={item}>
                    <div className="w-full flex gap-5 items-center mb-16">
                        <Image
                            src={"/img/book2.jpg"}
                            width={300}
                            height={200}
                            alt=""
                            className="w-[300px] h-[400px] shadow-md"
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
                            <p className="text-lg mt-5">BDT 1399/=</p>
                            <button className="text-lg py-3 px-8 border border-black mt-5 shadow-md">Buy Now</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="absolute bottom-0 flex items-center gap-5 left-1/2 z-20">
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

export default BestSellsBooksSwiper;
