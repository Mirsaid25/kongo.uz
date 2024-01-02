"use client";

import Image from "next/image";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Merienda } from "next/font/google";
const merienda = Merienda({
    weight: ["400", "700"],
    subsets: ["latin"],
});

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function SwiperComponent() {
    return (
        <div className="w-full flex max-lg:flex-col justify-between gap-5 max-sm:gap-3">
            <Swiper
                modules={[Pagination, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect={"fade"}
                pagination={{ clickable: true }}
                onSwiper={(swiper: any) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className={"w-[66%] max-lg:w-full swiper1-paginations bg-[#f5f5f5]"}
            >
                <SwiperSlide>
                    <div className="flex items-center gap-10 max-sm:gap-5 max-sm:pb-10 bg-[#f5f5f5]">
                        <Image
                            src={"/img/book1.jpg"}
                            width={260}
                            height={360}
                            alt=""
                            className="w-[260px] h-[360px] max-lg:h-[240px] max-lg:w-[220px] max-sm:h-[160px] max-sm:w-[110px] shadow-md"
                            loading="eager"
                        />
                        <div>
                            <h2
                                className={`${merienda.className} text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg font-bold font-[Merienda]`}
                            >
                                The Hidden Life of Trees
                            </h2>
                            <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm mt-[25px] max-sm:mt-[10px]">
                                What They Feel, How They Communicate Discoveries
                                from a Secret World
                            </p>
                            <p className="font-bold mt-[25px] max-sm:mt-[10px] max-md:text-sm max-sm:text-xs">
                                Author: Peter Wohlleben
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center gap-10 max-sm:gap-5 max-sm:pb-10 bg-[#f5f5f5]">
                        <Image
                            src={"/img/book1.jpg"}
                            width={260}
                            height={360}
                            alt=""
                            className="w-[260px] h-[360px] max-lg:h-[240px] max-lg:w-[220px] max-sm:h-[160px] max-sm:w-[110px] shadow-md"
                            loading="eager"
                        />
                        <div>
                            <h2
                                className={`${merienda.className} text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-lg font-bold font-[Merienda]`}
                            >
                                The Hidden Life of Trees
                            </h2>
                            <p className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-sm mt-[25px] max-sm:mt-[10px]">
                                What They Feel, How They Communicate Discoveries
                                from a Secret World
                            </p>
                            <p className="font-bold mt-[25px] max-sm:mt-[10px] max-md:text-sm max-sm:text-xs">
                                Author: Peter Wohlleben
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={"w-[33%] max-lg:w-full relative"}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
                    }}
                    onSwiper={(swiper: any) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                >
                    <SwiperSlide>
                        <div className="grid grid-cols-2 gap-4 max-sm:gap-2 p-1">
                            <div className="bg-[#FFF5DB] p-4 max-sm:p-3 rounded-md shadow-md flex justify-center items-center">
                                <p className="text-start">
                                    Best Crime & Mystery Books
                                </p>
                            </div>
                            <div className="bg-[#FFF5DB] p-4 max-sm:p-3 rounded-md shadow-md flex justify-center items-center">
                                <p className="text-start">
                                    Popular Kindle Notes & Highlights on
                                    Goodreads
                                </p>
                            </div>
                            <div className="bg-[#FFF5DB] py-8 max-sm:py-5 rounded-md shadow-md flex justify-center items-center col-start-1 col-end-3">
                                <p className="text-start">
                                    LISTS BOOK USER HAVE VOTED ON
                                </p>
                            </div>
                            <div className="bg-[#FFF5DB] pt-5 px-4 pb-8 rounded-md shadow-md flex justify-center items-center col-start-1 col-end-3 gap-9">
                                <div className="flex flex-col gap-3">
                                    <p className="font-bold">Quotes:</p>
                                    <Image
                                        src={"/img/portret1.svg"}
                                        width={65}
                                        height={65}
                                        alt="Portret"
                                    />
                                </div>
                                <p className="font-bold max-w-[250px]">
                                    “Be yourself; everyone else is already
                                    taken.” ― Oscar Wilde
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-2 gap-4 max-sm:gap-2 p-1">
                            <div className="bg-[#FFF5DB] p-4 max-sm:p-3 rounded-md shadow-md flex justify-center items-center">
                                <p className="text-start">
                                    Best Crime & Mystery Books
                                </p>
                            </div>
                            <div className="bg-[#FFF5DB] p-4 max-sm:p-3 rounded-md shadow-md flex justify-center items-center">
                                <p className="text-start">
                                    Popular Kindle Notes & Highlights on
                                    Goodreads
                                </p>
                            </div>
                            <div className="bg-[#FFF5DB] py-8 max-sm:py-5 rounded-md shadow-md flex justify-center items-center col-start-1 col-end-3">
                                <p className="text-start">
                                    LISTS BOOK USER HAVE VOTED ON
                                </p>
                            </div>
                            <div className="bg-[#FFF5DB] pt-5 px-4 pb-8 rounded-md shadow-md flex justify-center items-center col-start-1 col-end-3 gap-9">
                                <div className="flex flex-col gap-3">
                                    <p className="font-bold">Quotes:</p>
                                    <Image
                                        src={"/img/portret1.svg"}
                                        width={65}
                                        height={65}
                                        alt="Portret"
                                    />
                                </div>
                                <p className="font-bold max-w-[250px]">
                                    “Be yourself; everyone else is already
                                    taken.” ― Oscar Wilde
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="absolute right-3 bottom-2 max-lg:bottom-5 max-lg:right-5 flex items-center gap-5 z-10">
                        <div className="prev">
                            <Image
                                src={"/icons/arrow-gradient.svg"}
                                width={15}
                                height={20}
                                alt=""
                                className="rotate-180 max-sm:h-[15px] max-sm:w-[15px] cursor-pointer"
                            />
                        </div>

                        <div className="next">
                            <Image
                                src={"/icons/arrow-gradient.svg"}
                                width={15}
                                height={20}
                                alt=""
                                className="cursor-pointer  max-sm:h-[15px] max-sm:w-[15px]"
                            />
                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default SwiperComponent;
