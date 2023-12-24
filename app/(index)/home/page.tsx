import BestArticlesSwiper from "@/components/BestArticlesSwiper";
import BestSellsBooksSwiper from "@/components/BestSellsBooksSwiper";
import GoodreadsSwiper from "@/components/GoodreadsSwiper";
import ProductCard from "@/components/ProductCard";
import SwiperComponent from "@/components/Swiper";
import Image from "next/image";

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
                    <fieldset className="w-full mt-[54px] flex gap-5 border-t border-t-[#FFB800] pt-5">
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
            <section className="mt-[54px] bg-[#FFF8E6] pt-[25px] pb-10">
                <div className="container">
                    <h3 className="text-center text-2xl font-bold">
                        Best selling books
                    </h3>
                    <div className="mt-6">
                        <BestSellsBooksSwiper />
                    </div>
                </div>
            </section>
            <section className="pt-[40px] container">
                <h3 className="text-2xl text-center">Best Book Offer % </h3>
                <div className="mt-9 flex items-center gap-16 w-fit m-auto text-lg h-10">
                    <button className="border-b-4 border-b-[#FFB800] transition duration-300">
                        All
                    </button>
                    <button className="hover:border-b-4 hover:border-b-[#FFB800] transition duration-300">
                        New Writer
                    </button>
                    <button className="hover:border-b-4 hover:border-b-[#FFB800] transition duration-300">
                        Popular Publishers
                    </button>
                    <button className="hover:border-b-4 hover:border-b-[#FFB800] transition duration-300">
                        Best Selling
                    </button>
                </div>
                <div className="mt-7 grid grid-cols-6 gap-10">
                    {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18,
                    ].map((item) => (
                        <ProductCard key={item} />
                    ))}
                </div>
            </section>
            <section className="mt-[54px] bg-[#FFF8E6] pt-[25px] pb-10 mb-16">
                <div className="container">
                    <h3 className="text-center text-2xl font-bold">
                        Best Article Of This Month
                    </h3>
                    <div className="mt-6">
                        <BestArticlesSwiper />
                    </div>
                </div>
            </section>
            <section className="container bg-[#FFF8E6] flex items-center gap-28 p-14">
                <div className="flex items-center gap-16">
                    <Image
                        src={"/icons/tg-icon.svg"}
                        width={200}
                        height={300}
                        alt=""
                        className="w-[94px] h-[94px]"
                    />
                    <h2 className="text-4xl font-bold max-w-[200px]">
                        Subscribe Our Newsletter
                    </h2>
                </div>
                <form className="w-full max-w-[525px] flex flex-col gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-transparent border-b border-black pb-5 w-full text-lg"
                    />
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="bg-transparent border-b border-black pb-5 w-full text-lg"
                    />
                    <button type="submit" className="bg-[#FFB800] px-10 py-2 w-fit text-lg drop-shadow-lg">Subscribe</button>
                </form>
            </section>
        </>
    );
}

export default Home;
