import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Showcase from "@/pages/Showcase";
import Background from "@/pages/Background";
import Contact from "@/pages/Contact";

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