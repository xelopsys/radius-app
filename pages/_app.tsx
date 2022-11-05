import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar/Navbar";
import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";
import { AddToCartProvider } from "../context/AddToCartContext";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{`Task(Design)`}</title>
				<meta name="description" content="Generated by xelopsys" />
			</Head>
			<header className="w-full h-max-content">
				<Navbar />
			</header>
			<main className="w-full h-[90vh] flex flex-row justify-between overflow-y-auto scrollbar-hide items-start relative">
				<Sidebar />
				<AddToCartProvider>
					<Component {...pageProps} />
				</AddToCartProvider>
			</main>
		</>
	);
}
