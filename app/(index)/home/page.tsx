import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const categoryArr = [
    {
        id:1,
        title:"Художественная литература"
    },
    {
        id:2,
        title:"Научная литература"
    },
    {
        id:3,
        title:"Детская литература"
    },
    {
        id:4,
        title:"Поэзия"
    },
    {
        id:5,
        title:"Документальная литература"
    },
    {
        id:6,
        title:"Религиозная литература"
    },
    {
        id:7,
        title:"Философия"
    },
    {
        id:8,
        title:"Искусство и развлечения"
    },
    {
        id:9,
        title:"Справочная литература"
    },
    {
        id:10,
        title:"Путеводители"
    },
    {
        id:11,
        title:"Деловая литература"
    },
    {
        id:12,
        title:"Кулинария"
    }
]

function Home() {
    return (
        <div className="container">
            <section className="bg-[#ffffff22] backdrop-blur-md rounded-md px-20 py-[50px] w-fit mt-6 relative max-xl:py-[50px] max-lg:py-[25px] max-lg:px-7 max-sm:py-[10px] max-sm:px-5 flex items-center justify-between ">
                <div className="flex flex-col items-start justify-start">
                    <h1 className="text-[28px] max-xl:text-2xl max-lg:text-xl max-md:text-lg font-bold">
                        КОНГО — интернет магазин книг
                    </h1>
                    <p className="text-[20px] max-xl:text-base max-lg:text-[15px]">
                        Сравнивайте цены и закажите книги!
                    </p>
                </div>
            </section>
            <section className="mt-20 flex justify-between">
                <div></div>
                <div className="bg-[#ffffff22] backdrop-blur-md rounded-md flex flex-col items-start justify-start px-20 py-[50px] max-xl:py-[50px] max-lg:py-[25px] max-lg:px-7 max-sm:py-[10px] max-sm:px-5 gap-4 max-md:gap-2">
                    <h1 className="text-[20px] max-xl:text-xl max-lg:text-lg font-bold">
                        Если не нашли свою любимую книгу
                    </h1>
                    <p className="text-[20px] max-xl:text-base max-lg:text-[15px]">
                        Нажмите кнопку внизу и отправте информацию книги
                    </p>
                </div>
            </section>
            <section className="mt-[70px]">
                <h2 className="text-3xl text-center">Выберите категории</h2>
                <div className="grid grid-cols-6 gap-3 mt-10 auto-rows-[70px]">
                    {
                        categoryArr.map(item => 
                            <div key={item.id} className="p-2 rounded-md bg-[#ffffff22] backdrop-blur-md flex items-center justify-center text-center">{item.title}</div>
                        )
                    }
                </div>
                <button className="grid-cols-4">
                    Найти
                </button>
            </section>
        </div>
    );
}

export default Home;
