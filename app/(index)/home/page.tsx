import SwiperComponent from "@/components/Swiper";


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
        <div className="container">
            <section className="mt-[7px] flex gap-5">
               <SwiperComponent/>
            </section>
        </div>
    );
}

export default Home;
