import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="container">
            <div className="pt-10 pb-5">
                <div className="flex w-full items-center justify-between gap-5">
                    <div className="flex items-center gap-6 max-md:gap-3">
                        <h2 className="text-5xl max-lg:text-3xl max-md:text-2xl font-extrabold text_gradient">
                            <Link href={"/"}>KONGO</Link>
                        </h2>
                        {/* <div className="border border-[#290247] rounded-md px-4 py-3 max-lg:px-3 max-lg:py-2 max-lg:px-2 max-lg:py-1 flex items-center gap-3 max-md:gap-2 cursor-pointer">
                        <p className="text-[15px] max-lg:text-xs font-bold">Каталог</p>
                        <RxHamburgerMenu size={15}/>
                    </div> */}
                    </div>

                    <form className="borders-gradient max-md:hidden w-full max-w-[500px] max-lg:max-w-[400px] rounded-full flex items-center justify-between gap-2">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="bg-transparent w-full max-md:text-sm my-3 ml-3 font-medium"
                        />

                        <button title="search" type="submit" className="mr-3">
                            <IoIosSearch
                                size={20}
                                className="max-md:w-[15px]"
                            />
                        </button>
                    </form>

                    <div className="flex items-center gap-6 max-md:gap-4">
                        <button title="liked">
                            <Image
                                src={"/icons/heart-icon.svg"}
                                width={30}
                                height={30}
                                alt=""
                                className="max-md:w-[20px] max-md:h-[20px]"
                            />
                        </button>
                        <button title="card">
                            <Image
                                src={"/icons/bag-shopping.svg"}
                                width={30}
                                height={30}
                                alt=""
                                className="max-md:w-[20px] max-md:h-[20px]"
                            />
                        </button>
                        <div className="w-[52px] h-[52px] max-md:w-[30px] max-md:h-[30px] rounded-full borders-gradient"></div>
                    </div>
                </div>
                <div className="justify-center mt-2 hidden max-md:flex w-full">
                    <form className="borders-gradient w-full max-w-[500px] max-lg:max-w-[400px] max-sm:max-w-none max-sm:w-[70%] rounded-full flex items-center justify-between gap-2">
                        <input
                            type="text"
                            placeholder="Поиск"
                            className="bg-transparent w-full max-md:text-sm my-1 mx-3 font-medium text-sm"
                        />

                        <button title="search" type="submit" className="mr-3">
                            <IoIosSearch
                                size={20}
                                className="max-md:w-[15px]"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;
