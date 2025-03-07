import React from "react"

import Head from "next/head"
import Image from "next/image"
import NavBarEn from "@/components/en/NavBarEn"
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
			3 NIGHTS + 4 DAYS HUNTING PACKAGE
		</span>
		<span className="font-bold text-[#ff7f00] block ">950$+tx / Person</span>
		<br />
		<span className="font-bold uppercase">
			5 NIGHTS + 6 DAYS HUNTING PACKAGE
		</span>
		<span className="font-bold text-[#ff7f00] block ">1500$+tx / Person</span>
		<br />
		<span className="font-bold text-[#79cf00] block ">
			Companion 90$+tx / night
		</span>
		<br />
		*Accommodation taxes apply to all packages
	</p>
)

const textDindon = (
	<p className="mt-2 text-md leading-6">
		<span className="font-bold uppercase">
			3 NIGHTS + 3 MORNING HUNTING PACKAGE
		</span>
		<span className="font-bold text-[#ff7f00] block ">750$+tx / Person</span>
		<br />
		<span className="font-bold text-[#79cf00] block ">
			Companion 90$+tx / night
		</span>
		<br />
		*Accommodation taxes apply to all packages
	</p>
)
// const textSauvagine = (
// 	<p className="mt-2 text-md leading-6">
// 		<span className="font-bold uppercase">
// 			PACKAGE 2 NIGHTS + 2 MORNINGS WITH GUIDE
// 		</span>
// 		<span className="font-bold text-[#ff7f00] block ">600.00 +tx / Person</span>
// 		Additional person 300$ +tx
// 		<br /> <br />
// 		Decoys, shelter
// 		<br />
// 	</p>
// )
const textOurs = (
	<p className="mt-2 text-md leading-6">
		<span className="font-bold uppercase">
			3 NIGHTS + 4 DAYS HUNTING PACKAGE
		</span>
		<span className="font-bold text-[#ff7f00] block ">950$+tx / Person</span>
		<br />
		Baited sites, prepared with blind or tent.
		<br /> <br />
		<span className="font-bold text-[#79cf00] block ">
			Companion 90$+tx / night
		</span>
		<br />
		*Accommodation taxes apply to all packages
	</p>
)

const textPeche = (
	<p className="mt-2 text-md leading-6">
		<span className="font-bold text-[#79cf00] block ">FISHING DAY</span>
		<span className="font-bold text-[#ff7f00] block">
			200$+tx / MAX 3 PEOPLE
		</span>
		Includes 1 motor boat and gaz
		<br /> <br />
		<span className="font-bold text-[#79cf00] block ">"FAMILY WEEKEND!"</span>2
		NIGHTS + 3 DAYS FISHING PACKAGE
		<span className="font-bold text-[#ff7f00] block">
			750 +tx / TWO(2) ADULTS, TWO(2) CHILDREN
		</span>
		Includes 1 motor boat
		<br /> <br />
		<span className="font-bold text-[#79cf00] block ">"FAMILY VACATION!"</span>6
		NIGHTS + 7 DAYS FISHING PACKAGE
		<span className="font-bold text-[#ff7f00] block">
			1900$ +tx / TWO(2) ADULTS, TWO(2) CHILDREN
		</span>
		Includes 1 motor boat
		<br /> <br />
		<span className="font-bold text-[#79cf00] block ">"FRIENDS WEEKEND!"</span>2
		NIGHTS + 3 DAYS FISHING PACKAGE
		<span className="font-bold text-[#ff7f00] block">
			1500 +tx / FOUR(4) ADULTS
		</span>
		Includes 2 motor boat
		<br /> <br />
		<span className="font-bold text-[#79cf00] block ">"FRIENDS VACATION!"</span>
		6 NIGHTS + 7 FISHING DAYS PACKAGE
		<span className="font-bold text-[#ff7f00] block">
			3900$ +tx / FOUR(4) ADULTS
		</span>
		Includes 2 motor boats
		<br /> <br />
		*Des taxes d'hébergement sont applicables sur tout les forfaits
	</p>
)

const textQuad = (
	<p className="mt-2 text-md leading-6">
		<span className="font-bold uppercase">SPECIAL "NO LUGGAGE" PACKAGE</span>
		<span className="font-bold text-[#ff7f00] block">
			100$+tx / Person / Night
		</span>
		<br />
		Includes bedding, minimum 2 people
		<br />
		parking under camera surveillance
	</p>
)

// const textForfaitVagabond = (
// 	<p className="mt-2 text-md leading-6">
// 		Includes: 1 night lodging, bedding, pre-cooked meal service à la carte.
// 		<br />
// 		<span className="font-bold text-[#ff7f00] ">
// 			100$ +tx / Person / Night - Week only
// 		</span>
// 	</p>
// )

// const textForfaitDebarcadaire = (
// 	<p className="mt-2 text-md leading-6">
// 		Includes: Lodging (2 nights), 1 night upon arrival and 1 night upon
// 		departure, bedding, trailer parking, pre-cooked meal service à la carte.
// 		<br />
// 		<span className="font-bold text-[#ff7f00] ">
// 			Weekdays = 120$ +tx / Person / Night
// 			<br />
// 			Weekend = 160$ +tx / Person / Night
// 		</span>
// 	</p>
// )

// const textForfaitTouriste = (
// 	<p className="mt-2 text-md leading-6">
// 		Includes: Minimum 3 nights lodging, bedding, pre-cooked meal service à la
// 		carte.
// 		<br />
// 		<span className="font-bold text-[#ff7f00] ">
// 			Weekdays = 110$ +tx / Person / Night
// 			<br />
// 			Weekend = 150$ +tx / Person / Night
// 		</span>
// 	</p>
// )

// const textForfaitAventurier = (
// 	<p className="mt-2 text-md leading-6">
// 		Includes: Lodging 3 nights, 2 days of ice fishing all equipped, pre-cooked
// 		meal service à la carte.
// 		<br />
// 		<span className="font-bold text-[#ff7f00] ">
// 			Weekdays = 275$ +tx / Person / Night
// 			<br />
// 			Weekend = 300$ +tx / Person / Night
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
				<title>Domaine Aventurier - Prices</title>
				<meta name="description" content="Domaine Aventurier - Prices" />
				<link rel="icon" href="/favicon.png" />
				<meta
					property="og:title"
					content="Domaine Aventurier - Upper Laurentians Hunting and fishing outfitter"
				/>
				<meta
					property="og:description "
					content="Renowned for its hunting and fishing sites, Domaine Aventurier is a peaceful place to spend vacations with family or friends."
				/>
				<meta property="og:type" content="article" />
				<meta property="og:url" content="https://www.domaineaventurier.com" />
				<meta
					property="og:image"
					content="https://www.domaineaventurier.com/og-background.jpg"
				/>
				<meta property="og:site_name" content="Domaine Aventurier" />
			</Head>
			<NavBarEn scroll={scroll} />
			<main className="min-h-screen">
				<section className="pt-20">
					<div className="h-96 relative">
						<div className="container z-10">
							<h1 className=" font-OpenSans absolute bottom-10 text-white font-black text-4xl uppercase title title--orangeBig">
								Our prices
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
					<h2 className="text-[#79cf00]">Hunting packages 2025-2026-2027</h2>
				</section>

				<section id="dindon">
					<ImgRightTarif
						icon={iconDinde}
						introPageImg={tarifDindonImg}
						text={textDindon}
						titre={"WILD TURKEY"}
					/>
				</section>
				<section id="chevreuil">
					<ImgRightTarifWhite
						icon={iconChevreuil}
						introPageImg={tarifChevreuilImg}
						text={textCerf}
						titre={"WHITE-TAILED DEER"}
					/>
				</section>
				{/* <section id="sauvagine">
					<ImgRightTarif
						icon={iconSauvagine}
						introPageImg={tarifSauvagineImg}
						text={textSauvagine}
						titre={"WATERFOWL PACKAGE"}
					/>
				</section> */}

				<section id="ours">
					<ImgRightTarif
						icon={iconOurs}
						introPageImg={tarifOursImg}
						text={textOurs}
						titre={"BEAR PACKAGE"}
					/>
				</section>

				<section className="font-bold text-2xl container text-center py-10">
					<h2 className="text-[#79cf00]">Fishing packages 2025-2026-2027</h2>
				</section>
				<section id="peche">
					<ImgRightTarifPeche
						icon={iconPeche}
						introPageImg={tarifPecheImg}
						text={textPeche}
						titre={"FISHING PACKAGE"}
					/>
				</section>

				<section className="font-bold text-2xl container text-center py-10">
					<h2 className="text-[#79cf00]">
						Quad-Snowmobile Packages 2025-2026-2027
					</h2>
				</section>
				<section id="motoneige">
					<ImgRightTarif
						icon={iconQuad}
						introPageImg={tarifQuadImg}
						text={textQuad}
						titre={"QUAD-SNOWMOBILE"}
					/>
				</section>

				{/* <section className="container my-10">
					<div className="flex flex-row justify-between items-center flex-wrap gap-10">
						<TarifForfait2
							titre={"VAGABOND PACKAGE :"}
							texte={textForfaitVagabond}
						/>
						<TarifForfait2
							titre={"LANDING PACKAGE FOR 2 PERSONS :"}
							texte={textForfaitDebarcadaire}
						/>

						<TarifForfait2
							titre={"TOURIST PACKAGE :"}
							texte={textForfaitTouriste}
						/>
						<TarifForfait2
							titre={"ADVENTURER PACKAGE FOR 2 PEOPLE:"}
							texte={textForfaitAventurier}
						/>
					</div>
				</section> */}

				{/* TABLEAUX */}
				<div className=" bg-slate-50 py-10">
					<section className="container mb-10" id="chalet">
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
									Cabins
									<span className="text-sm">(Minimum 2 nights / 2 adults)</span>
								</h2>
							</div>
						</div>
						<div className="overflow-scroll md:overflow-auto">
							<table className="border-collapse border border-slate-400 w-full text-left ">
								<thead className=" bg-slate-100 text-xs md:text-sm uppercase">
									<tr>
										<th className="border border-slate-300 p-2">Cabins</th>
										<th className="border border-slate-300 p-2">
											Number of rooms
										</th>
										<th className="border border-slate-300 p-2">Persons</th>
										<th className="border border-slate-300 p-2">
											PERSON / Night
										</th>
										{/* <th className="border border-slate-300 p-2">Per Week</th> */}
									</tr>
								</thead>
								<tbody className="text-xs md:text-sm">
									<tr>
										<td className="border border-slate-300 p-2"></td>
										<td className="border border-slate-300 p-2"></td>
										<td className="border border-slate-300 p-2"></td>
										<td className="border border-slate-300 p-2">
											Adult $90+tx
											<br />
											Child $55+tx
											<br />
											12 years and under free
										</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Cabin #1</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">195$+tx</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Cabin #2</td>
										<td className="border border-slate-300 p-2">3</td>
										<td className="border border-slate-300 p-2">5-6</td>
										<td className="border border-slate-300 p-2">215$+tx</td>
										{/* <td className="border border-slate-300 p-2">1130$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Cabin #3</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-4</td>
										<td className="border border-slate-300 p-2">195$+tx</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											Cabin #4 <span> (not available / office)</span>
										</td>
										<td className="border border-slate-300 p-2">1</td>
										<td className="border border-slate-300 p-2">1-2</td>
										<td className="border border-slate-300 p-2">205$+tx</td>
										{/* <td className="border border-slate-300 p-2">1030$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Cabin #5</td>
										<td className="border border-slate-300 p-2">3</td>
										<td className="border border-slate-300 p-2">5-8</td>
										<td className="border border-slate-300 p-2">215$+tx</td>
										{/* <td className="border border-slate-300 p-2">1130$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Cabin #6</td>
										<td className="border border-slate-300 p-2">1</td>
										<td className="border border-slate-300 p-2">2-6</td>
										<td className="border border-slate-300 p-2">160$+tx</td>
										{/* <td className="border border-slate-300 p-2">1130$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Cabin #7</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-8</td>
										<td className="border border-slate-300 p-2">195+tx</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Cabin #8</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-6</td>
										<td className="border border-slate-300 p-2">195$+tx</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">Cabin #9</td>
										<td className="border border-slate-300 p-2">2</td>
										<td className="border border-slate-300 p-2">2-6</td>
										<td className="border border-slate-300 p-2">195$+tx</td>
										{/* <td className="border border-slate-300 p-2">930$+tx</td> */}
									</tr>
								</tbody>
							</table>
							{/* <span className="text-sm mt-2 block">
								<br />
								1 WEEK 6 NIGHTS 7 DAYS OF FISHING ADDITIONAL PERSON 30.00$ MORE
								PER NIGHT
								<br />
								<br />
								FREE ROWBOAT ON LAST DAY! Maximum 3 people per boat
								<br />
								<br />
								PETS ARE NOT ALLOWED ON SITE.
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
							<span>FOUR(4) SERVICES, WATER, SEWER, 30AMP, WIFI</span>
							<br /> <br />
						</div>
						<div className="overflow-scroll md:overflow-auto">
							<table className="border-collapse border border-slate-400 w-full text-left ">
								<thead className=" bg-slate-100 text-xs md:text-sm uppercase">
									<tr>
										<th className="border border-slate-300 p-2"></th>
										<th className="border border-slate-300 p-2">Per Day</th>
										{/* <th className="border border-slate-300 p-2">Per Week</th>
										<th className="border border-slate-300 p-2">Month</th> */}
										<th className="border border-slate-300 p-2">
											Season
											<span className="text-xs ml-2">(May 15 to Oct 15)</span>
										</th>
									</tr>
								</thead>
								<tbody className="text-xs md:text-sm">
									<tr>
										<td className="border border-slate-300 p-2">TENT</td>
										<td className="border border-slate-300 p-2">55$+tx</td>
										{/* <td className="border border-slate-300 p-2">200$+tx</td>
										<td className="border border-slate-300 p-2">600$+tx</td> */}
										<td className="border border-slate-300 p-2">2000$+tx</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">
											TENT-TRAILER
										</td>
										<td className="border border-slate-300 p-2">75$+tx</td>
										{/* <td className="border border-slate-300 p-2">360$+tx</td>
										<td className="border border-slate-300 p-2">1080$+tx</td> */}
										<td className="border border-slate-300 p-2">2600$+tx</td>
									</tr>
									<tr>
										<td className="border border-slate-300 p-2">TRAILER</td>
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
										ROWBOAT RENTAL WITH ACCOMMODATION $150/DAY GAS INCLUDED
									</li>
									<li>
										DAILY FISHING BOAT RENTAL
										<b> WITHOUT ACCOMMODATION</b> $200/DAY GAS INCLUDED
									</li>
									<br />

									<li>PONTOON RENTAL $500/DAYS</li>
									<li>FISHING KAYAK RENTAL $70/DAY</li>
									<li>PADDLE BOARD RENTAL $15/HOUR MINIMUM 3 HRS</li>
									<li>SUMO BOARD RENTAL FOR UP TO 6 PEOPLE $170</li>
									<li>FLOATING CUSHION RENTAL $15/DAY</li>
									<li>LIFEJACKET RENTAL $10/DAY</li>
									<li>PETS 15$+TX / DAY *camping only</li>
									<li>ICE</li>
									<li>GAS FOR BOATS</li>
								</ul>
								<br />
								<b>BAIT AND LURES FOR SALE ON SITE :</b>
								<br />
								<b>SUMMER</b> : WORMS, LEECHES
								<br />
								<b>WINTER</b> : MINNOWS, MAGGOTS
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
