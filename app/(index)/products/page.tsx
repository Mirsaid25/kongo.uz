import ProductCard from "@/components/ProductCard";
import React from "react";

function Products() {
    return (
        <div className="">
            <section className="container relative flex pt-10 max-lg:pt-0">
                <div className="sticky top-0 left-0 w-[370px] h-fit z-10 max-lg:hidden">
                    <p>Фильтры</p>
                    <hr className="boeder border-[#110C1F] mt-[15px]" />

                    <p className="mt-6">Цена в сумах</p>
                    <div className="border border-black px-4 py-[10px] relative rounded-md mt-3">
                        <span className="font-bold">2000</span>
                        <input
                            title="range"
                            type="range"
                            min="0"
                            max="10"
                            className="absolute bottom-0 left-0 w-full h-0"
                        />
                    </div>
                    <hr className="boeder border-[#110C1F] mt-[30px]" />

                    <p className="mt-6">Подкатегория</p>
                    <div className="mt-3">
                        <label className="flex gap-2">
                            <input
                                title="check"
                                type="checkbox"
                                name=""
                                id=""
                            />
                            Юмористическое фэнтези
                        </label>
                        <label className="flex gap-2">
                            <input
                                title="check"
                                type="checkbox"
                                name=""
                                id=""
                            />
                            Любовнное фэнтези
                        </label>
                        <label className="flex gap-2">
                            <input
                                title="check"
                                type="checkbox"
                                name=""
                                id=""
                            />
                            Героическое фэнтези
                        </label>
                        <label className="flex gap-2">
                            <input
                                title="check"
                                type="checkbox"
                                name=""
                                id=""
                            />
                            Попаданцы
                        </label>
                        <label className="flex gap-2">
                            <input
                                title="check"
                                type="checkbox"
                                name=""
                                id=""
                            />
                            Городское фэнтези
                        </label>
                        <span className="text-sm cursor-pointer">
                            Показать все
                        </span>
                    </div>

                    <hr className="boeder border-[#110C1F] mt-[30px]" />

                    <p className="mt-6">Язык</p>
                    <div className="mt-3">
                        <label className="flex gap-2">
                            <input
                                title="check"
                                type="checkbox"
                                name=""
                                id=""
                            />
                            Русский
                        </label>
                        <label className="flex gap-2">
                            <input
                                title="check"
                                type="checkbox"
                                name=""
                                id=""
                            />
                            Узбекский
                        </label>
                        <label className="flex gap-2">
                            <input
                                title="check"
                                type="checkbox"
                                name=""
                                id=""
                            />
                            Английский
                        </label>
                    </div>
                </div>

                <div className="ml-10 max-lg:ml-0">
                    <div className="flex items-end justify-between">
                        <div className="">
                            <h2 className="text-3xl font-medium">Фэнтези</h2>
                            <p>Найдено 4 000 книг</p>
                        </div>
                        <select
                            title="de"
                            className="px-3 py-[10px] border border-[#FDB503] rounded-lg"
                        >
                            <option value="По популярности">
                                По популярности
                            </option>
                            <option value="edw">ewe</option>
                            <option value="edw">ewe</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-3 gap-5 mt-10">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
                            (item) => (
                                <ProductCard key={item} />
                            )
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Products;
