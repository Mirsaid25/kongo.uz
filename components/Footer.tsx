import { FaTelegramPlane, FaInstagram, FaFacebookF  } from "react-icons/fa";

function Footer() {
    return (
        <footer className="py-6 mt-[100px] bg-[#FFF5DB]">
            <div className="max-w-[1000px] max-lg:max-w-[700px] m-auto max-md:w-[90%]">
                <p className="text-2xl font-bold">KONGO</p>
                <div className="flex flex-wrap max-sm:flex-col gap-20 max-lg:gap-5 mt-4 justify-between">
                    {/* <ol>
                        <li>Каталог</li>
                        <li className="mt-3">Партнерская программа</li>
                        <li className="mt-3">Подробнее о нас</li>
                        <li className="mt-3">Контакты</li>
                    </ol> */}
                    <div>
                        <p>Остались вопросы? Напишите нам</p>
                        <a href="#" className="text-[20px] max-sm:text-lg font-bold mt-2">
                            siddikovmirsaid01@gmail.com
                        </a>
                        <p className="mt-2">
                            Мы на связи с 9:00 до 18:00 часов
                        </p>
                    </div>
                    <div className="w-fit max-md:m-auto max-sm:m-0">
                        <p>Бесплатный звонок по Узбекистану</p>
                        <a
                            href="tel:+998902277464"
                            className="text-[20px] max-sm:text-lg font-bold mt-2"
                        >
                            +998-(90)-22-77-464
                        </a>
                        <p className="mt-4">Мы в социальных сетях:</p>
                        <div className="flex items-center gap-10 mt-3"> 
							<a href="#" title="telegram"><FaTelegramPlane size={32} color="#290247" className="max-sm:w-[20px] max-sm:h-[20px]"/></a>
							<a href="#" title="instagram"><FaInstagram size={32} color="#290247" className="max-sm:w-[20px] max-sm:h-[20px]"/></a>
							<a href="#" title="facebook"><FaFacebookF size={32} color="#290247" className="max-sm:w-[20px] max-sm:h-[20px]"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
