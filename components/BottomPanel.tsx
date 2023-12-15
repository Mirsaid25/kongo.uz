import { SlBasket } from "react-icons/sl";

function BottomPanel() {
    return (
        <div className="absolute bottom-0 left-0 w-full bg-[gray] p-5 flex items-center justify-center gap-20 max-md:gap-10 max-sm:justify-between max-sm:gap-3">
            <p className="text-3xl">ЛГ</p>
            <button className="flex flex-col items-center">
                <SlBasket size={30} />
                <span className="">Корзинка</span>
            </button>
			<button className="flex flex-col items-center">
                <SlBasket size={30} />
                <span className="">Корзинка</span>
            </button>
			<button className="flex flex-col items-center">
                <SlBasket size={30} />
                <span className="">Корзинка</span>
            </button>
			<button className="flex flex-col items-center">
                <SlBasket size={30} />
                <span className="">Корзинка</span>
            </button>
        </div>
    );
}

export default BottomPanel;
