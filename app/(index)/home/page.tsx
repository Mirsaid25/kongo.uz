import BestSellsBooksSwiper from "@/components/BestSellsBooksSwiper";
import GoodreadsSwiper from "@/components/GoodreadsSwiper";
import SwiperComponent from "@/components/Swiper";

import { FaArrowRightLong } from "react-icons/fa6";

const categoryArr = [
    {
        id: 1,
        title: "Художественная литература",
    },
    {
        id: 2,
        title: "Научная литература",
    },
    {
        id: 3,
        title: "Детская литература",
    },
    {
        id: 4,
        title: "Поэзия",
    },
    {
        id: 5,
        title: "Документальная литература",
    },
    {
        id: 6,
        title: "Религиозная литература",
    },
    {
        id: 7,
        title: "Философия",
    },
    {
        id: 8,
        title: "Искусство и развлечения",
    },
    {
        id: 9,
        title: "Справочная литература",
    },
    {
        id: 10,
        title: "Путеводители",
    },
    {
        id: 11,
        title: "Деловая литература",
    },
    {
        id: 12,
        title: "Кулинария",
    },
];

function Home() {
    return (
        <>
            <div className="container">
                <section className="mt-[7px] flex gap-5">
                    <SwiperComponent />
                </section>
                <section>
                    <fieldset className="mt-[54px] flex gap-5 border-t border-t-[#FFB800] pt-5">
                        <legend className="text-center px-10 text-4xl font-bold">
                            Goodreads Choice Awards
                        </legend>
                        <GoodreadsSwiper />
                    </fieldset>
                    <div className="mt-8 flex justify-end">
                        <button className="flex items-center gap-2">
                            <p className="text-black font-bold">View All</p>
                            <FaArrowRightLong size={20} />
                        </button>
                    </div>
                </section>
            </div>
            <section className="mt-[54px] bg-[#FFF8E6] pt-[25px] pb-[70px]">
                <div className="container">
                    <h3 className="text-center text-2xl font-bold">Best selling books</h3>
                    <div className="mt-6">
                        <BestSellsBooksSwiper />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
