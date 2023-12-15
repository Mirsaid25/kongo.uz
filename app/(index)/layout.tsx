import BottomPanel from "@/components/BottomPanel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
			<main>
				{children}
			</main>
			<Footer />
		</>
	);
}