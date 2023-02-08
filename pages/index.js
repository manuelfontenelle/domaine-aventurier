import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
// import styles from "@/styles/Home.module.css"
import NavBar from "../components/NavBar"
import Intro from "../components/Intro"
import RightBar from "@/components/RightBar"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Domaine Aventurier</title>
				<meta
					name="description"
					content="Pourvoirie chasse et pêche dans les Hautes Laurentides"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<main>
				<RightBar />
				<Intro />
				{/* <div className="flex justify-items-center bg-white w-full md:bottom-0 md:absolute md:h-36"> */}
				<div className="w-full flex  justify-center items-center flex-col md:flex-row">
					<div className="w-full h-[150px] bg-slate-500 md:w-[25%] md:h-[350px]"></div>
					<div className="w-full h-[150px] bg-slate-600 md:w-[25%] md:h-[350px]"></div>
					<div className="w-full h-[150px] bg-slate-500 md:w-[25%] md:h-[350px]"></div>
					<div className="w-full h-[150px] bg-slate-600 md:w-[25%] md:h-[350px]"></div>
				</div>
				{/* </div> */}
			</main>
		</>
	)
}
