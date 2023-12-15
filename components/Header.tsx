import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";

function Header() {
    return (
        <header className="container py-5">
            <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-6 max-sm:gap-3">
                    <p className="text-3xl font-bold">ЛГ</p>
                    <div className="border border-[#290247] rounded-md px-4 py-3 max-lg:px-3 max-lg:py-2 max-md:px-2 max-md:py-1 flex items-center gap-3 max-sm:gap-2 cursor-pointer">
                        <p className="text-[15px] max-md:text-xs font-bold">Каталог</p>
                        <RxHamburgerMenu size={15}/>
                    </div>
                </div>

                <form className="max-lg:hidden bg-[#E7E7E7] w-full max-w-[500px] p-3 rounded-md flex items-center justify-between gap-2">
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="bg-transparent w-full"
                    />

                    <button title="search" type="submit">
                        <IoIosSearch size={20} />
                    </button>
                </form>

                <div className="flex items-center gap-10 max-xl:gap-5 max-sm:gap-3">
                    <button className="flex flex-col items-center">
                        <CiBookmark size={24} />
                        <span className="text-xs max-lg:hidden">Избранное</span>
                    </button>
                    <button className="flex flex-col items-center">
                        <SlBasket size={24} />
                        <span className="text-xs max-lg:hidden">Корзинка</span>
                    </button>
                    <button className="flex flex-col items-center py-3 px-8  max-lg:px-5 max-lg:py-2  max-md:px-3 max-md:py-1 bg-[#290247] text-white text-[15px] max-md:text-sm rounded-md">
                        Войти
                    </button>
                </div>
            </div>
            <div className="hidden max-lg:flex justify-center mt-5 max-sm:mt-3">
                <form className="bg-[#E7E7E7] w-full max-w-[500px] max-md:max-w-[400px] py-2 px-3 max-md:py-1 max-md:px-3 rounded-md flex items-center justify-between gap-2">
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="bg-transparent w-full max-sm:text-sm"
                    />

                    <button title="search" type="submit">
                        <IoIosSearch size={20} className="max-sm:w-[15px] "/>
                    </button>
                </form>
            </div>
        </header>
    );
}

export default Header;