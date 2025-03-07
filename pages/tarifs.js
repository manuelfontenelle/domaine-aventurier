import React from "react"

import Head from "next/head"
import Image from "next/image"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import iconChevreuil from "@/public/icones/chevreuil.png"
import iconDinde from "@/public/icones/dinde_green.png"
import iconOurs from "@/public/icones/ours_green.png"
import iconSauvagine from "@/public/icones/sauvagine_green.png"
import iconPeche from "@/public/icones/fishing_green.png"
import iconQuad from "@/public/icones/quad_green.png"
import iconChalet from "@/public/icones/bed_orange.png"
import iconCamping from "@/public/icones/camping_orange.png"
import introPageImg from "@/public/intro_tarifs.jpg"
import tarifDindonImg from "@/public/tarif_dindon.jpg"
import tarifSauvagineImg from "@/public/tarif_sauvagine.jpg"
import tarifChevreuilImg from "@/public/tarif_chevreuil.jpg"
import tarifOursImg from "@/public/tarif_ours.jpg"
import tarifPecheImg from "@/public/tarif_peche.jpg"
import tarifQuadImg from "@/public/tarif_quad.jpg"
import ImgRightTarif from "@/components/ImgRightTarif"
import ImgRightTarifWhite from "@/components/ImgRightTarifWhite"
import ImgRightTarifPeche from "@/components/ImgRightTarifPeche"
import TarifForfait2 from "@/components/TarifForfait2"
import { useEffect, useState } from "react"

const textCerf = (
	<p className="mt-2 text-md leading-6">
		<span className="font-bold uppercase">
			FORFAIT 3 NUITS + 4 JOURS DE CHASSE
		</span>
		<span className="font-bold text-[#ff7f00] block ">950$+tx / Personne</span>
		<br />
		<span className="font-bold uppercase">
			FORFAIT 5 NUITS + 6 JOURS DE CHASSE
		</span>
		<span className="font-bold text-[#ff7f00] block ">1500$+tx / Personne</span>
		<br />
		<span className="font-bold text-[#79cf00] block ">
			Accompagnateur(trice) 90$+tx / nuit
		</span>
		<br />
		*Des taxes d'hébergement sont applicables sur tout les forfaits
	</p>
)
const textDindon = (
	<p className="mt-2 text-md leading-6">
		<span className="font-bold uppercase">
			FORFAIT 3 NUITS + 3 MATINS DE CHASSE
		</span>
		<span className="font-bold text-[#ff7f00] block ">750$+tx / Personne</span>
		<br />
		<span className="font-bold text-[#79cf00] block ">
			Accompagnateur(trice) 90$+tx / nuit
		</span>
		<br />
		*Des taxes d'hébergement sont applicables sur tout les forfaits
	</p>
)
// const textSauvagine = (
// 	<p className="mt-2 text-md leading-6">
// 		<span className="font-bold uppercase">
// 			Forfait 2 nuitées + 2 matinées avec guide
// 		</span>
// 		<span className="font-bold text-[#ff7f00] block ">
// 			600.00$ +tx / Personne
// 		</span>
// 		Personne additionnelle 300$ +tx
// 		<br /> <br />
// 		Leurres, tente
// 		<br />
// 	</p>
// )
const textOurs = (
	<p className="mt-2 text-md leading-6">
		<span className="font-bold uppercase">
			FORFAIT 3 NUITS + 4 JOURS DE CHASSE
		</span>
		<span className="font-bold text-[#ff7f00] block ">950$+tx / Personne</span>
		<br />
		Sites appâtés, soignés avec cache ou tente.
		<br /> <br />
		<span className="font-bold text-[#79cf00] block ">
			Accompagnateur(trice) 90$+tx / nuit
		</span>
		<br />
		*Des taxes d'hébergement sont applicables sur tout les forfaits
	</p>
)

const textPeche = (
	<p className="mt-2 text-md leading-6">
		<span className="font-bold text-[#79cf00] block ">PÊCHE À LA JOURNÉE</span>
		<span className="font-bold text-[#ff7f00] block">
			200$+tx / MAX 3 PERSONNES
		</span>
		Inclus 1 embarcation moteur et essence
		<br /> <br />
		<span className="font-bold text-[#79cf00] block ">
			"WEEK-END EN FAMILLE !"
		</span>
		FORFAIT 2 NUITS + 3 JOURS DE PÊCHE
		<span className="font-bold text-[#ff7f00] block">
			750$ +tx / DEUX(2) ADULTES, DEUX(2) ENFANTS
		</span>
		Inclus 1 embarcation moteur
		<br /> <br />
		<span className="font-bold text-[#79cf00] block ">
			"VACANCE EN FAMILLE !"
		</span>
		FORFAIT 6 NUITS + 7 JOURS DE PÊCHE
		<span className="font-bold text-[#ff7f00] block">
			1900$ +tx / DEUX(2) ADULTES, DEUX(2) ENFANTS
		</span>
		Inclus 1 embarcation moteur
		<br /> <br />
		<span className="font-bold text-[#79cf00] block ">
			"WEEK-END ENTRE AMIS !"
		</span>
		FORFAIT 2 NUITS + 3 JOURS DE PÊCHE
		<span className="font-bold text-[#ff7f00] block">
			1500$ +tx / QUATRES(4) ADULTES
		</span>
		Inclus 2 embarcations moteur
		<br /> <br />
		<span className="font-bold text-[#79cf00] block ">
			"VACANCE ENTRE AMIS !"
		</span>
		FORFAIT 6 NUITS + 7 JOURS DE PÊCHE
		<span className="font-bold text-[#ff7f00] block">
			3900$ +tx / QUATRES(4) ADULTES
		</span>
		Inclus 2 embarcations moteur
		<br /> <br />
		*Des taxes d'hébergement sont applicables sur tout les forfaits
	</p>
)

const textQuad = (
	<p className="mt-2 text-md leading-6">
		<span className="font-bold uppercase">SPÉCIAL FORFAIT "SANS BAGAGE"</span>
		<span className="font-bold text-[#ff7f00] block">
			100$+tx / Personne / Nuit
		</span>
		<br />
		Inclus literie, minimum 2 personnes
		<br />
		Débarcadère surveiller par caméra
	</p>
)

// const textForfaitVagabond = (
// 	<p className="mt-2 text-md leading-6">
// 		Comprend: Hébergement 1 nuit, literie, service de repas pré-cuisinés à la
// 		carte.
// 		<br />
// 		<span className="font-bold text-[#ff7f00] ">
// 			100$ +tx / Personne / Nuit - Semaine seulement
// 		</span>
// 	</p>
// )

// const textForfaitDebarcadaire = (
// 	<p className="mt-2 text-md leading-6">
// 		Comprend: Hébergement (2 nuits), 1 nuit à votre arrivée et 1 nuit à votre
// 		départ, literie, stationnement pour remorque, service de repas pré-cuisinés
// 		à la carte.
// 		<br />
// 		<span className="font-bold text-[#ff7f00] ">
// 			En semaine = 120$ +tx / Personne / Nuit
// 			<br />
// 			Week-end = 160$ +tx / Personne / Nuit
// 		</span>
// 	</p>
// )

// const textForfaitTouriste = (
// 	<p className="mt-2 text-md leading-6">
// 		Comprend: Hébergement minimum 3 nuits, literie, service de repas
// 		pré-cuisinés à la carte.
// 		<br />
// 		<span className="font-bold text-[#ff7f00] ">
// 			En semaine = 110$ +tx / Personne / Nuit
// 			<br />
// 			Week-end = 150$ +tx / Personne / Nuit
// 		</span>
// 	</p>
// )

// const textForfaitAventurier = (
// 	<p className="mt-2 text-md leading-6">
// 		Comprend: Hébergement 3 nuits, 2 jours de pêche blanche tout équipé, service
// 		de repas pré-cuisinés à la carte.
// 		<br />
// 		<span className="font-bold text-[#ff7f00] ">
// 			En semaine = 275$ +tx / Personne / Nuit <br />
// 			Week-end = 300$ +tx / Personne / Nuit
// 		</span>
// 	</p>
// )

const tarifs = () => {
	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50)
		})
	}, [])
	return (
		<div>
			<Head>
				<title>Domaine Aventurier - Tarifs</title>
				<meta name="description" content="Domaine Aventurier - Tarifs" />
				<link rel="icon" href="/favicon.png" />
				<meta
					property="og:title"
					content="Domaine Aventurier - Pourvoirie chasse et pêche dans les Hautes Laurentides"
				/>
				<meta
					property="og:description "
					content="Site renommé pour la chasse et la pêche, le Domaine Aventurier est un endroit paisible pour les vacances en famille ou entre amis."
				/>
				<meta property="og:type" content="article" />
				<meta property="og:url" content="https://www.domaineaventurier.com" />
				<meta
					property="og:image"
					content="https://www.domaineaventurier.com/og-background.jpg"
				/>
				<meta property="og:site_name" content="Domaine Aventurier" />
			</Head>
			<NavBar scroll={scroll} />
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

				<section className="font-bold text-2xl container text-center py-10">
					<h2 className="text-[#79cf00]">Forfaits chasse 2025-2026-2027</h2>
				</section>

				<section id="dindon">
					<ImgRightTarif
						icon={iconDinde}
						introPageImg={tarifDindonImg}
						text={textDindon}
						titre={"Dindon Sauvage"}
					/>
				</section>
				<section id="chevreuil">
					<ImgRightTarifWhite
						icon={iconChevreuil}
						introPageImg={tarifChevreuilImg}
						text={textCerf}
						titre={"CERF DE VIRGINIE (chevreuil)"}
					/>
				</section>
				{/* <section id="sauvagine">
					<ImgRightTarif
						icon={iconSauvagine}
						introPageImg={tarifSauvagineImg}
						text={textSauvagine}
						titre={"Forfait Sauvagine"}
					/>
				</section> */}

				<section id="ours">
					<ImgRightTarif
						icon={iconOurs}
						introPageImg={tarifOursImg}
						text={textOurs}
						titre={"Forfait Ours"}
					/>
				</section>

				<section className="font-bold text-2xl container text-center py-10">
					<h2 className="text-[#79cf00]">Forfaits pêche 2025-2026-2027</h2>
				</section>
				<section id="peche">
					<ImgRightTarifPeche
						icon={iconPeche}
						introPageImg={tarifPecheImg}
						text={textPeche}
						titre={"Forfait Pêche"}
					/>
				</section>

				<section className="font-bold text-2xl container text-center py-10">
					<h2 className="text-[#79cf00]">
						Forfaits Quad-Motoneige 2025-2026-2027
					</h2>
				</section>
				<section id="motoneige">
					<ImgRightTarif
						icon={iconQuad}
						introPageImg={tarifQuadImg}
						text={textQuad}
						titre={"Quad-Motoneige"}
					/>
				</section>

				{/* <section className="container my-10">
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
				</section> */}

				{/* TABLEAUX */}
				<div className=" bg-slate-50 py-10" id="chalet">
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
								<h2 className="font-bold text-xl ml-5 uppercase ">
									Chalets
									<span className="text-sm">
										{" "}
										(Minimum 2 nuits / 2 Adultes)
									</span>
								</h2>
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
										<th className="border border-slate-300 p-2">
											PERSONNE / NUIT
										</th>
										{/* <th className="border border-slate-300 p-2">Par Semaine</th> */}
									</tr>
								</thead>
								<tbody className="text-xs md:text-sm">
									<tr>
										<td className="border border-slate-300 p-2"></td>
										<td className="border border-slate-300 p-2"></td>
										<td className="border border-slate-300 p-2"></td>
										<td className="border border-slate-300 p-2">
											Adulte 90$+tx
											<br />
											Enfant 55$+tx
											<br />
											12 ans et - gratuit
										</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #1</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">195$+tx</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #2</td>
										<td className="border border-slate-300 p-2">3</td>
										<td className="border border-slate-300 p-2">5-6</td>
										<td className="border border-slate-300 p-2">215$+tx</td>
										{/* <td className="border border-slate-300 p-2">1130$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #3</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">195$+tx</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											Chalet #4 <span> (non disponible / bureau)</span>
										</td>
										<td className="border border-slate-300 p-2">1</td>
										<td className="border border-slate-300 p-2">1-2</td>
										<td className="border border-slate-300 p-2">205$+tx</td>
										{/* <td className="border border-slate-300 p-2">1030$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #5</td>
										<td className="border border-slate-300 p-2">3</td>
										<td className="border border-slate-300 p-2">5-8</td>
										<td className="border border-slate-300 p-2">215$+tx</td>
										{/* <td className="border border-slate-300 p-2">1130$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #6</td>
										<td className="border border-slate-300 p-2">1</td>
										<td className="border border-slate-300 p-2">2-6</td>
										<td className="border border-slate-300 p-2">160$+tx</td>
										{/* <td className="border border-slate-300 p-2">1130$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #7</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-8</td>
										<td className="border border-slate-300 p-2">195$+tx</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #8</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-6</td>
										<td className="border border-slate-300 p-2">195$+tx</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Chalet #9</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-6</td>
										<td className="border border-slate-300 p-2">195$+tx</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
								</tbody>
							</table>
							{/* <span className="text-sm mt-2 block">
								<br />
								1 SEMAINE 6 NUITS 7 JOURS DE PÊCHE PERS ADDITIONNELLE 30.00$ DE
								PLUS PAR NUITS <br />
								<br />
								CHALOUPE GRATUIT LA DERNIÈRE JOURNÉE ! Maximum 3 pers par
								chaloupe <br />
								<br />
								LES ANIMAUX DE COMPAGNIES NE SONT PAS ACCEPTÉS SUR LE SITE.
							</span> */}
						</div>
					</section>

					<section className="container mb-10" id="camping">
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
							<span>QUATRES(4) SERVICES, EAU, ÉGOÛT, 30AMP, WIFI</span>
							<br /> <br />
						</div>
						<div className="overflow-scroll md:overflow-auto">
							<table className="border-collapse border border-slate-400 w-full text-left ">
								<thead className=" bg-slate-100 text-xs md:text-sm uppercase">
									<tr>
										<th className="border border-slate-300 p-2"></th>
										<th className="border border-slate-300 p-2">Par jour</th>
										{/* <th className="border border-slate-300 p-2">Par semaine</th>
										<th className="border border-slate-300 p-2">Mois</th> */}
										<th className="border border-slate-300 p-2">
											Saison
											<span className="text-xs ml-2">(15 Mai au 15 Oct)</span>
										</th>
									</tr>
								</thead>
								<tbody className="text-xs md:text-sm">
									<tr>
										<td className="border border-slate-300 p-2">TENTE</td>
										<td className="border border-slate-300 p-2">55$+tx</td>
										{/* <td className="border border-slate-300 p-2">200$+tx</td>
										<td className="border border-slate-300 p-2">600$+tx</td> */}
										<td className="border border-slate-300 p-2"></td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											TENTE-ROULOTTE
										</td>
										<td className="border border-slate-300 p-2">75$+tx</td>
										{/* <td className="border border-slate-300 p-2">360$+tx</td>
										<td className="border border-slate-300 p-2">1080$+tx</td> */}
										<td className="border border-slate-300 p-2">2600$+tx</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">ROULOTTE</td>
										<td className="border border-slate-300 p-2">75$+tx</td>
										{/* <td className="border border-slate-300 p-2">360$+tx</td>
										<td className="border border-slate-300 p-2">1080$+tx</td> */}
										<td className="border border-slate-300 p-2">2600$+tx</td>
									</tr>
								</tbody>
							</table>
							<span className="text-sm mt-2 block">
								<br />
								<ul>
									<li>
										LOCATION DE CHALOUPE AVEC HÉBERGEMENT 150$/JOURS GAZ INCLUS
									</li>
									<li>
										LOCATION DE CHALOUPE PÊCHE JOURNALIÈRE
										<b> SANS HÉBERGEMENT</b> 200$/JOURS GAZ INCLUS
									</li>
									<br />

									<li> LOCATION PONTON 500$/JOURS </li>
									<li> LOCATION DE KAYAK DE PÊCHE 70$/JOURS</li>
									<li> LOCATION PADDLE BOARD 15$/L'HEURE MINIMUN 3HRS</li>
									<li>LOCATION PLANCHE SUMO POUR JUSQU'A 6 PERSONNES 170$ </li>
									<li> LOCATION COUSSIN FLOTTANT 15$/JOURS</li>
									<li> LOCATION GILET SAUVETAGE 10$/JOURS</li>
									<li>ANIMAUX DE COMPAGNIE 15$+tx / JOUR *camping seulement</li>
									<li>SAC DE GLACE</li>
									<li>VENTE D'ESSENCE POUR EMBARCATION</li>
								</ul>
								<br />
								<b>VENTE D'APPÂTS ET LEURRES SUR PLACE :</b>
								<br />
								<b>ÉTÉ</b> : VERS, SANGSUES <br />
								<b>HIVER</b> : MÉNÉS, ASTICOTS
								<br />
							</span>
						</div>
					</section>
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default tarifs
