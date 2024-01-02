"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function BestSellsBooksSwiper() {
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            }}
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
                    <div className="w-full flex gap-5 max-sm:gap-2 items-center mb-16 max-lg:flex-col">
                        <Image
                            src={"/img/book2.jpg"}
                            width={300}
                            height={200}
                            alt=""
                            className="w-[300px] h-[400px] max-xl:w-[250px] max-xl:h-[300px] max-lg:hidden shadow-md"
                        />

                        <div className="flex flex-col items-start max-lg:hidden">
                            <h3 className="font-bold text-2xl max-xl:text-lg">
                                This Time Tomorrow
                            </h3>
                            <div className="flex items-center gap-5 max-xl:gap-3 mt-4 max-xl:mt-2">
                                <div className="w-[85px] h-[85px] max-xl:w-[50px] max-xl:h-[50px] bg-black rounded-full overflow-hidden"></div>
                                <p className="text-center">Gabrielle Zevin</p>
                            </div>
                            <p className="mt-6 max-xl:mt-3">
                                With her celebrated humor, insight, and heart,
                                beloved New York Times bestseller Emma Straub
                                offers her own twist on traditional time travel
                                tropes, and a different kind of love story.
                            </p>
                            <div className="flex flex-col max-xl:flex-row max-xl:items-center gap-4 mt-5 max-xl:mt-3 max-lg:mt-5 max-lg:flex-col max-lg:items-start max-sm:flex-row max-sm:items-center max-sm:mt-2">
                                <p className="text-lg max-xl:text-base max-lg:text-lg">
                                    BDT 1399$
                                </p>
                                <button className="text-lg py-3 px-8 border border-black shadow-md max-xl:text-base max-xl:py-2 max-xl:px-6">
                                    Buy Now
                                </button>
                            </div>
                        </div>

                        <div className="w-full max-lg:flex items-center gap-5 hidden">
                            <Image
                                src={"/img/book2.jpg"}
                                width={300}
                                height={200}
                                alt=""
                                className="w-[300px] h-[400px] max-xl:w-[250px] max-xl:h-[300px] max-lg:w-[150px] max-lg:h-[200px] shadow-md"
                            />
                            <div>
                                <h3 className="font-bold text-2xl max-sm:text-xl">
                                    This Time Tomorrow
                                </h3>
                                <div className="items-center gap-3 mt-2 hidden max-sm:flex">
                                    <div className="w-[50px] h-[50px] bg-black rounded-full overflow-hidden"></div>
                                    <p className="text-center">
                                        Gabrielle Zevin
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden max-lg:block">
                            <div className="flex items-center gap-3 max-sm:hidden">
                                <div className="w-[85px] h-[85px] max-xl:w-[50px] max-xl:h-[50px] bg-black rounded-full overflow-hidden"></div>
                                <p className="text-center">Gabrielle Zevin</p>
                            </div>
                            <p className="mt-5">
                                With her celebrated humor, insight, and heart,
                                beloved New York Times bestseller Emma Straub
                                offers her own twist on traditional time travel
                                tropes, and a different kind of love story.
                            </p>
                            <div className="flex flex-row items-center justify-between mt-4">
                                <p className="text-lg max-xl:text-base max-lg:text-lg">
                                    BDT 1399$
                                </p>
                                <button className="text-lg py-3 px-8 border border-black shadow-md max-xl:text-base max-xl:py-2 max-xl:px-6">
                                    Buy Now
                                </button>
                            </div>
                        </div>
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

export default BestSellsBooksSwiper;
