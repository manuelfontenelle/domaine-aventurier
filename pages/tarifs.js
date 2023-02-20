import React from "react"
import Head from "next/head"
import Image from "next/image"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import iconChevreuil from "../public/icones/chevreuil_green.png"
import iconDinde from "../public/icones/dinde_green.png"
import iconOurs from "../public/icones/ours_green.png"
import iconPeche from "../public/icones/fishing_green.png"
import iconQuad from "../public/icones/quad_green.png"
import introPageImg from "../public/intro_bg.jpg"
import TarifForfait from "@/components/TarifForfait"
import ImgRightTarif from "../components/ImgRightTarif"

const textPeche = (
	<p className="mt-5 text-md leading-6">
		2 nuits/3 jours de pêche pour
		<span className="font-bold text-[#ff7f00]"> 550$/pers </span>
		inclus hébergement, embarcation <br />
		<br />
		Forfait 1 semaine
		<span className="font-bold text-[#ff7f00] "> 1100$/pers </span>
		inclus hébergement, embarcation
	</p>
)

const textQuad = (
	<p className="mt-5 text-md leading-6">
		2 nuits/3 jours de quad pour
		<span className="font-bold text-[#ff7f00]"> 550$/pers </span>
		inclus la literie et repas pré-cuisinés
		<br />
		<br />
		Forfait 1 semaine
		<span className="font-bold text-[#ff7f00] "> 1100$/pers </span>
		inclus la literie et repas pré-cuisinés
	</p>
)

const tarifs = () => {
	return (
		<div>
			<Head>
				<title>Domaine Aventurier - Contact</title>
				<meta name="description" content="Domaine Aventurier - Contact" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar />
			<main className="min-h-screen">
				<section className="pt-20">
					<div className="h-96 relative">
						<div className="container z-10">
							<h1 className=" font-OpenSans absolute bottom-10 text-white font-black text-4xl uppercase title title--orangeBig">
								Nos Tarifs
							</h1>
						</div>

						<Image
							className=" block w-full object-cover h-[100%]"
							src={introPageImg}
							alt="intro image tarifs"
						/>
					</div>
				</section>

				<section className="container">
					<div className="mt-10 flex flex-col md:flex-row  gap-10 md:gap-24">
						<TarifForfait
							icon={iconChevreuil}
							titre={"Forfait Chasse Cerf de Virginie"}
						/>
						<TarifForfait icon={iconDinde} titre={"Forfait dindon sauvage"} />
						<TarifForfait
							icon={iconOurs}
							titre={"Forfait Ours (Printemps)"}
							sousTitre={"Arc – Arbalète – Arme à feu"}
						/>
					</div>
				</section>
				<section>
					<ImgRightTarif
						icon={iconPeche}
						introPageImg={introPageImg}
						text={textPeche}
						titre={"Forfait Pêche"}
					/>
					<ImgRightTarif
						icon={iconQuad}
						introPageImg={introPageImg}
						text={textQuad}
						titre={"Forfait Quad-Motoneige"}
					/>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default tarifs
