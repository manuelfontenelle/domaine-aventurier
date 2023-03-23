import React from "react"
import Head from "next/head"
import Image from "next/image"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import ImgLeft from "@/components/ImgLeft"
import ImgRight from "@/components/ImgRight"
import introPageImg from "../public/intro_services.jpg"
import pecheImg from "../public/service_peche.jpg"
import chasseImg from "../public/service_chasse.jpg"
import chaletImg from "../public/service_chalet.jpg"
import campingImg from "../public/service_camping.jpg"
import vttImg from "../public/service_vtt.jpg"
import iconPeche from "../public/icones/fishing_orange.png"
import iconChasse from "../public/icones/hunt_orange.png"
import iconChalet from "../public/icones/bed_orange.png"
import iconCamping from "../public/icones/camping_orange.png"
import iconQuad from "../public/icones/quad_orange.png"
import { useEffect, useState } from "react"

const textPeche = (
	<p>
		Situé sur une terre magnifique bordant la rivière du Lièvre, le réservoir
		aux sables, ainsi que l’immense réservoir du Poisson Blanc d’une distance de
		29 km et parsemée de 148 îles, notre havre de paix est également entouré de
		250 lacs. <br />
		<br />
		La pêche y est en abondance et de choix (doré, brochet, truite grise,
		achigan, ouananiche, perchaude, etc.).
	</p>
)

const textChasse = (
	<p>
		La très forte densité de Cerfs de Virginie dans la zone 10 Ouest profite
		considérablement aux adeptes de la chasse.
		<br />
		<br /> Les chasseurs pourront bénéficier d’un territoire exclusif et non
		exclusif (Terres de la Couronne) à proximité de nos services. <br />
		<br />
		Que ce soit pour la chasse à l’arc, la carabine, la poudre noire ou bien à
		l’arbalète nous pouvons vous offrir le service de mirador et d’appâts.
		<br />
		<br />
		Contactez-nous pour connaître les modalités & les conditions.
	</p>
)

const textChalet = (
	<div>
		<p>
			Nos chalets rustiques vous charmeront avec leurs vue superbe sur la
			Rivière du Lièvre et leur prix de location peu dispendieux. Ils sont tous
			meublés et la vaisselle est incluse.
			<br />
			<br /> Vous devez apporter:
		</p>

		<ul>
			<li>- Literie </li>
			<li>- Serviettes de bain</li>
		</ul>
	</div>
)
const textCamping = (
	<p>
		Profitez de notre site pourvu d’arbres matures, pour vous offrir la
		tranquillité ainsi que les joies du plein air. <br />
		<br />
		La majorité de nos terrains comprennent l’eau, l’électricité et les égouts.
		Nous possédons également sur notre site un bloc sanitaire avec douches,
		toilettes (papier non inclus) et buanderie.
	</p>
)
const textVtt = (
	<p>
		Les aventuriers de V.T.T. pourront bénéficier de 200 km de sentiers 4
		saisons entretenus remarquablement par le club local de la municipalité
		membre de la Fédération Québécoise des Clubs Quads. <br />
		<br />
		Venez saisir les vues imprenables du sommet de la Montagne du Diable ainsi
		que les nombreux panoramas de montagnes & lacs. Il ne faut surtout pas
		manquer les merveilleuses richesses colorées que la saison d’automne nous
		procure.
	</p>
)

const services = () => {
	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50)
		})
	}, [])
	return (
		<div>
			<Head>
				<title>Domaine Aventurier - Contact</title>
				<meta name="description" content="Domaine Aventurier - Contact" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar scroll={scroll} />
			<main className="min-h-screen">
				<section className="pt-20">
					<div className="h-96 relative">
						<div className="container z-10">
							<h1 className=" font-OpenSans absolute bottom-10 text-white font-black text-4xl uppercase title title--orangeBig">
								Nos services
							</h1>
						</div>

						<Image
							className=" block w-full object-cover h-[100%]"
							src={introPageImg}
							alt="intro image contact"
						/>
					</div>
				</section>

				<ImgRight
					icon={iconPeche}
					introPageImg={pecheImg}
					text={textPeche}
					titre={"Pêche"}
				/>
				<ImgLeft
					icon={iconChasse}
					introPageImg={chasseImg}
					text={textChasse}
					titre={"Chasse"}
				/>
				<ImgRight
					icon={iconChalet}
					introPageImg={chaletImg}
					text={textChalet}
					titre={"Chalets"}
				/>
				<ImgLeft
					icon={iconCamping}
					introPageImg={campingImg}
					text={textCamping}
					titre={"Camping & Caravaning"}
					sousTitre={"(Saisonnier et Journalier)"}
				/>
				<ImgRight
					icon={iconQuad}
					introPageImg={vttImg}
					text={textVtt}
					titre={"V.T.T."}
				/>
			</main>
			<Footer />
		</div>
	)
}

export default services
