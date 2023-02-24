import React from "react"
import Head from "next/head"
import Image from "next/image"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import iconChevreuil from "../public/icones/chevreuil.png"
import iconDinde from "../public/icones/dinde_green.png"
import iconOurs from "../public/icones/ours.png"
import iconSauvagine from "../public/icones/sauvagine.png"
import iconPeche from "../public/icones/fishing_green.png"
import iconQuad from "../public/icones/quad_green.png"
import iconChalet from "../public/icones/bed_orange.png"
import iconCamping from "../public/icones/camping_orange.png"
import introPageImg from "../public/intro_bg.jpg"
// import TarifForfait from "@/components/TarifForfait"
import ImgRightTarif from "../components/ImgRightTarif"
import ImgRightTarifWhite from "../components/ImgRightTarifWhite"
import TarifForfait2 from "@/components/TarifForfait2"

const textCerf = (
	<p className="mt-5 text-md leading-6">
		3 nuits/4 jours de chasse pour
		<span className="font-bold text-[#ff7f00]"> 550$/pers </span>
		hébergement inclus <br />
		<br />
		Forfait 1 semaine site appâté
		<span className="font-bold text-[#ff7f00] "> 1100$/pers </span>
		hébergement inclus
	</p>
)

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

const textForfaitVagabond = (
	<p className="mt-2 text-md leading-6">
		Comprends: hébergement 1 nuit, literies, service de repas pré-cuisinés à la
		carte
		<br />
		<span className="font-bold text-[#ff7f00] ">
			100$/nuit/pers/semaine seulement.
		</span>
	</p>
)

const textForfaitDebarcadaire = (
	<p className="mt-2 text-md leading-6">
		Comprends: hébergement (2 nuits) 1 nuit à votre arrivée et 1 nuit à votre
		départ, literies, stationnement pour remorque, service de repas pré-cuisinés
		à la carte.
		<br />
		<span className="font-bold text-[#ff7f00] ">
			En semaine 120$/nuits week-end 160$/nuits
		</span>
	</p>
)

const textForfaitTouriste = (
	<p className="mt-2 text-md leading-6">
		Comprends: hébergement minimum 3 nuits, literies, service de repas
		pré-cuisinés à la carte
		<br />
		<span className="font-bold text-[#ff7f00] ">
			En semaine 110$/ nuits weekend 150$/nuits
		</span>
	</p>
)

const textForfaitAventurier = (
	<p className="mt-2 text-md leading-6">
		Comprends: hébergement 3 nuits,2 jours de pêche blanche tout équipés, repas
		pré-cuisinés à la carte
		<br />
		<span className="font-bold text-[#ff7f00] ">
			En semaine 275$/nuits week-end 300$/ nuits
		</span>
	</p>
)

const tarifs = () => {
	return (
		<div>
			<Head>
				<title>Domaine Aventurier - Tarifs</title>
				<meta name="description" content="Domaine Aventurier - Tarifs" />
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

				{/* <section className="container">
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
				</section> */}
				<section>
					<ImgRightTarifWhite
						icon={iconChevreuil}
						introPageImg={introPageImg}
						text={textCerf}
						titre={"Forfait Chasse Cerf de Virginie"}
					/>
				</section>
				<section>
					<ImgRightTarif
						icon={iconDinde}
						introPageImg={introPageImg}
						text={textCerf}
						titre={"Forfait Dindon Sauvage"}
					/>
				</section>
				<section>
					<ImgRightTarifWhite
						icon={iconOurs}
						introPageImg={introPageImg}
						text={textCerf}
						titre={"Forfait Ours"}
					/>
				</section>
				<section>
					<ImgRightTarif
						icon={iconPeche}
						introPageImg={introPageImg}
						text={textPeche}
						titre={"Forfait Pêche"}
					/>
				</section>

				<section>
					<ImgRightTarifWhite
						icon={iconSauvagine}
						introPageImg={introPageImg}
						text={textCerf}
						titre={"Forfait Sauvagine"}
					/>
				</section>

				<section>
					<ImgRightTarif
						icon={iconQuad}
						introPageImg={introPageImg}
						text={textQuad}
						titre={"Forfait Quad-Motoneige"}
					/>
				</section>

				<section className="container my-10">
					<div className="flex flex-row justify-between items-center flex-wrap gap-10">
						<TarifForfait2
							titre={"forfait Vagabond :"}
							texte={textForfaitVagabond}
						/>
						<TarifForfait2
							titre={"Forfait débarcadère pour 2 personnes :"}
							texte={textForfaitDebarcadaire}
						/>

						<TarifForfait2
							titre={"Forfait touriste :"}
							texte={textForfaitTouriste}
						/>
						<TarifForfait2
							titre={"Forfait Aventurier pour 2 personnes :"}
							texte={textForfaitAventurier}
						/>
					</div>
				</section>

				{/* TABLEAUX */}
				<div className=" bg-slate-100 py-10">
					<section className="container mb-10">
						<div>
							<div className="flex flex-row justify-start items-center mb-5">
								<div className="">
									<Image
										src={iconChalet}
										alt=""
										className="w-[45px] mb-2 md:mb-0  lg:w-[35px]"
									></Image>
								</div>
								<h2 className="font-bold text-xl ml-5 uppercase ">Chalets</h2>
							</div>
						</div>
						<div className="overflow-scroll md:overflow-auto">
							<table className="border-collapse border border-slate-400 w-full text-left ">
								<thead className=" bg-slate-100 text-xs md:text-sm uppercase">
									<tr>
										<th className="border border-slate-300 p-2">Chalet</th>
										<th className="border border-slate-300 p-2">
											Nombre de chambres
										</th>
										<th className="border border-slate-300 p-2">Personnes</th>
										<th className="border border-slate-300 p-2">Jours</th>
										<th className="border border-slate-300 p-2">Semaine</th>
									</tr>
								</thead>
								<tbody className="text-xs md:text-sm">
									<tr>
										<td className="border border-slate-300 p-2">Chalet #1</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">180$</td>
										<td className="border border-slate-300 p-2">1000$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #1</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">180$</td>
										<td className="border border-slate-300 p-2">1000$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #1</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">180$</td>
										<td className="border border-slate-300 p-2">1000$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #1</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">180$</td>
										<td className="border border-slate-300 p-2">1000$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #1</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">180$</td>
										<td className="border border-slate-300 p-2">1000$</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>

					<section className="container mb-10">
						<div>
							<div className="flex flex-row justify-start items-center mb-5">
								<div className="">
									<Image
										src={iconCamping}
										alt=""
										className="w-[45px] mb-2 md:mb-0  lg:w-[35px]"
									></Image>
								</div>
								<h2 className="font-bold text-xl ml-5 uppercase ">Camping</h2>
							</div>
						</div>
						<div className="overflow-scroll md:overflow-auto">
							<table className="border-collapse border border-slate-400 w-full text-left ">
								<thead className=" bg-slate-100 text-xs md:text-sm uppercase">
									<tr>
										<th className="border border-slate-300 p-2"></th>
										<th className="border border-slate-300 p-2">Par jour</th>
										<th className="border border-slate-300 p-2">Par semaine</th>
										<th className="border border-slate-300 p-2">Mois</th>
										<th className="border border-slate-300 p-2">
											Saison
											<span className="text-xs ml-2">(15 Mai au 15 Oct)</span>
										</th>
									</tr>
								</thead>
								<tbody className="text-xs md:text-sm">
									<tr>
										<td className="border border-slate-300 p-2">TENTE</td>
										<td className="border border-slate-300 p-2">40$</td>
										<td className="border border-slate-300 p-2">200$</td>
										<td className="border border-slate-300 p-2">600$</td>
										<td className="border border-slate-300 p-2">2000$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											TENTE-ROULOTTE
										</td>
										<td className="border border-slate-300 p-2">60$</td>
										<td className="border border-slate-300 p-2">360$</td>
										<td className="border border-slate-300 p-2">1080$</td>
										<td className="border border-slate-300 p-2">2200$</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">ROULOTTE</td>
										<td className="border border-slate-300 p-2">60$</td>
										<td className="border border-slate-300 p-2">360$</td>
										<td className="border border-slate-300 p-2">1080$</td>
										<td className="border border-slate-300 p-2">2200$</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default tarifs
