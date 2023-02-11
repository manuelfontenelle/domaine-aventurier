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
				<ContentBlock2 />
				<section className="flex flex-col lg:flex-row h-auto relative">
					<div className="lg:w-[60%] h-[500px] lg:absolute">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797902.4475692939!2d-75.6570906397829!3d45.896125049671525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd025bb78bc8b2f%3A0xfcbb995e2fe32142!2sDomaine%20Aventurier%20Inc.!5e0!3m2!1sfr!2sfr!4v1676136230450!5m2!1sfr!2sfr"
							width="100%"
							height="100%"
							className="border-0"
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
					<div className="md:container mx-auto  py-10 px-5 lg:py-0 2xl:px-16 ">
						<div className="flex justify-end items-start flex-col pb-0 bg-white  lg:pb-10 lg:ml-[68%] lg:h-[500px]">
							<div className="">
								<h2 className="font-OpenSans font-black text-xl uppercase title">
									Directions :
								</h2>
							</div>
							<p className="text-sm leading-5  md:text-justify mt-3 xl:leading-6 xl:text-md">
								<span className="font-bold">De Montréal:</span> Autoroute 15
								Nord – sortie 35, autoroute 50 Ouest – sortie 174, route 309
								Nord jusqu’au village de Notre-Dame-du-Laus, prendre le pont à
								gauche (réservoir Poisson Blanc), au bout du pont tourner à
								droite sur le chemin du Poisson Blanc jusqu’au Domaine
								Aventurier Inc. (2km) <br />
								<br />
								<span className="font-bold">D’Ottawa:</span> Autoroute 50 Est,
								route 309 Nord jusqu’au village de Notre-Dame-du-Laus, prendre
								le pont à gauche (réservoir Poisson Blanc), au bout du pont
								tourner à droite sur le chemin du Poisson Blanc jusqu’au Domaine
								Aventurier Inc. (2km)
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
