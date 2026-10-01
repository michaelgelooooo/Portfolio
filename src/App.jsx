import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout.jsx";
import Home from "@/pages/Home.jsx";
import Showcase from "@/pages/Showcase.jsx";
import Background from "@/pages/Background.jsx";
import Contact from "@/pages/Contact.jsx";

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/showcase" element={<Showcase />} />
				<Route path="/background" element={<Background />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}