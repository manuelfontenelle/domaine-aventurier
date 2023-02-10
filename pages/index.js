import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
// import styles from "@/styles/Home.module.css"
import NavBar from "../components/NavBar"
import Intro from "../components/Intro"
import RightBar from "@/components/RightBar"
import Galery from "@/components/Galery"
import ContentBlock from "@/components/ContentBlock"
import icon1 from "../public/icones/pin.png"
import icon2 from "../public/icones/phone.png"
import logo from "../public/logo.png"

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

				<div className="gradiant">
					<section className=" flex flex-col mx-auto sm:container lg:flex-row 2xl:px-16">
						<div className="  py-10  bg-white px-5 lg:w-[50%]  ">
							<div className="md:pr-28">
								<h2 className="font-OpenSans font-black text-xl uppercase title title--orangeSmall">
									Réservez votre séjour et profitez d’une expérience inoubliable
									!
								</h2>
							</div>
							<p className="text-md leading-6  md:text-justify mt-7 xl:leading-8 xl:text-lg">
								Contactez-nous dès maintenant pour réserver votre séjour au sein
								de notre centre de pêche 4 saisons, ou pour toutes demandes
								d’informations concernant l’emplacement, la disponibilité, les
								équipements sur place, les tarifs ou toutes autres questions. Il
								nous fera plaisir de vous apporter des réponses claires et
								précises sur ce que vous trouverez sur place.
								<br />
								<br />
								Au plaisir de vous accueillir au Domaine Aventurier
							</p>
						</div>
						<div className=" py-10 bg-[#79cf00] relative px-5 lg:w-[50%] 2xl:pl-16 2xl:pr-20 ">
							<div className=" flex flex-col justify-start items-start gap-10">
								<div className="flex flex-row justify-start items-start">
									<Image
										src={icon1}
										alt=""
										className="w-[35px] lg:w-[45px] mr-3 pt-1"
									></Image>
									<p className="font-OpenSans text-base font-bold text-white md:text-xl ">
										Domaine Aventurier Inc. 131 Chemin du Poisson Blanc
										Notre-Dame-du-Laus, Québec J0X 2M0
									</p>
								</div>
								<div className="flex flex-row justify-end items-end">
									<Image
										src={icon2}
										alt=""
										className="w-[35px] lg:w-[45px] mr-3 mb-[-12px]"
									></Image>
									<p className="font-OpenSans font-bold text-white text-base md:text-xl  ">
										(514) 518-2643
									</p>
								</div>
							</div>
							<div className="bottom-4 px-5">
								<Image
									src={logo}
									alt="Logo Domaine Aventurier"
									className="w-[100px] right-0 absolute  mt-[-30px] sm:mt-[-40px] sm:w-[130px] md:w-[300px] z-20 lg:mt-[-10px] mr-5"
								></Image>
								<span className="left-0 bottom-16 h-16 lg:w-[80%] bg-white absolute"></span>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	)
}
