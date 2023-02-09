import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
// import styles from "@/styles/Home.module.css"
import NavBar from "../components/NavBar"
import Intro from "../components/Intro"
import RightBar from "@/components/RightBar"
import Galery from "@/components/Galery"
import ContentBlock from "@/components/ContentBlock"

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
				<Galery />
				<ContentBlock />
				<section>
					<div className="flex flex-col flex-wrap  md:flex-row">
						<div className="flex-auto  bg-slate-400 h-80"></div>
						<div className="flex-auto  bg-slate-500 h-80"></div>
					</div>
				</section>
			</main>
		</>
	)
}
