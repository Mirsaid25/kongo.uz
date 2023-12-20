import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import Image from "next/image";

function Header() {
    return (
        <header className="container">
            <div className="pt-10 pb-5">
                <div className="flex w-full items-center justify-between gap-5">
                    <div className="flex items-center gap-6 max-sm:gap-3">
                        <h2 className="text-4xl max-md:text-2xl max-sm:text-xl font-extrabold text_gradient">
                            Book Shop
                        </h2>
                        {/* <div className="border border-[#290247] rounded-md px-4 py-3 max-lg:px-3 max-lg:py-2 max-md:px-2 max-md:py-1 flex items-center gap-3 max-sm:gap-2 cursor-pointer">
                        <p className="text-[15px] max-md:text-xs font-bold">Каталог</p>
                        <RxHamburgerMenu size={15}/>
                    </div> */}
                    </div>

                    <form className="borders-gradient max-sm:hidden w-full max-w-[500px] max-md:max-w-[400px] rounded-full flex items-center justify-between gap-2">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="bg-transparent w-full max-sm:text-sm my-3 ml-3 font-medium"
                        />

                        <button title="search" type="submit" className="mr-3">
                            <IoIosSearch
                                size={20}
                                className="max-sm:w-[15px]"
                            />
                        </button>
                    </form>
                    <div className="flex items-center gap-6">
                        <button title="liked">
                            <Image
                                src={"/icons/heart-icon.svg"}
                                width={30}
                                height={30}
                                alt=""
                            />
                        </button>
                        <button title="card">
                            <Image
                                src={"/icons/bag-shopping.svg"}
                                width={30}
                                height={30}
                                alt=""
                            />
                        </button>
                    </div>
                </div>
                <div className="justify-center mt-5 max-sm:mt-3 hidden max-sm:flex w-full">
                    <form className="borders-gradient w-full max-w-[500px] max-md:max-w-[400px] rounded-full flex items-center justify-between gap-2">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="bg-transparent w-full max-sm:text-sm my-3 ml-3 font-medium"
                        />

                        <button title="search" type="submit" className="mr-3">
                            <IoIosSearch
                                size={20}
                                className="max-sm:w-[15px]"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;
