import BottomPanel from "@/components/BottomPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GiFeather } from "react-icons/gi";

export default function IndexLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const cookieStore = cookies();
	// const theme = cookieStore.get("token");
	// if (!theme) redirect("/login");

	// const { exp } = JSON.parse(theme?.value || "");

	// if (exp < Date.now() / 1000) {
	// 	redirect("/login");
	// }



	return (
		<>
			<Header/>
			<main className="mt-20">
				{children}
			</main>
			<Footer />
			<button title="send" className="fixed bottom-10 right-10 max-sm:right-5 bg-[#ffffff22] backdrop-blur-md rounded-full p-3">
                <GiFeather size={25}/>
			</button>
		</>
	);
}