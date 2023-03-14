import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
// import styles from "@/styles/Home.module.css"
import NavBar from "../components/NavBar"
import Footer from "@/components/Footer"
import Intro from "../components/Intro"
import RightBar from "@/components/RightBar"
import Galery from "@/components/Galery"
import ContentBlock from "@/components/ContentBlock"
import ContentBlock2 from "@/components/ContentBlock2"
import Map from "@/components/Map"
import { useEffect, useState } from "react"
const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50)
		})
	}, [])
	return (
		<>
			<Head>
				<title>
					Domaine Aventurier - Pourvoirie chasse et pêche dans les Hautes
					Laurentides
				</title>
				<meta
					name="description"
					content="Pourvoirie chasse et pêche dans les Hautes Laurentides"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar scroll={scroll} />
			<main>
				<RightBar />
				<Intro />
				<Galery />
				<ContentBlock />
				<ContentBlock2 />
				<Map />
			</main>
			<Footer />
		</>
	)
}
