import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileDock from "@/components/layout/Dock";

export default function Layout() {
	return (
		<div className="min-h-screen flex flex-col pb-16 md:pb-0">
			<Header />

			<main className="flex-1">
				<Outlet />
			</main>

			<Footer />
			<MobileDock />
		</div>
	);
}
