import Image from "next/image";
import Link from "next/link";

function ProductCard() {
    return (
        <Link href="#" className="flex flex-col justify-center items-center gap-3">
            <Image
                src={"/img/book3.jpg"}
                width={200}
                height={230}
                alt=""
                className="aspect-[3/4] shadow-lg"
            />
            <h3 className="font-bold text-center leading-[18px] max-sm:text-xs">
                Tomorrow, and Tomorrow, and Tomorrow
            </h3>
            <p className="text-center max-sm:text-xs">Gabrielle Zevin</p>
            {/* <button className="font-bold bg-gradient-to-br from-[#8c00fb] to-[#fcba11] text-white px-3 py-2 rounded-">70.000 sum</button> */}
        </Link>
    );
}

export default ProductCard;
