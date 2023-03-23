import React from "react"
import Head from "next/head"
import Image from "next/image"
import NavBarEn from "@/components/en/NavBarEn"
import Footer from "@/components/Footer"
import ImgLeft from "@/components/ImgLeft"
import ImgRight from "@/components/ImgRight"
import introPageImg from "@/public/intro_services.jpg"
import pecheImg from "@/public/service_peche.jpg"
import chasseImg from "@/public/service_chasse.jpg"
import chaletImg from "@/public/service_chalet.jpg"
import campingImg from "@/public/service_camping.jpg"
import vttImg from "@/public/service_vtt.jpg"
import iconPeche from "@/public/icones/fishing_orange.png"
import iconChasse from "@/public/icones/hunt_orange.png"
import iconChalet from "@/public/icones/bed_orange.png"
import iconCamping from "@/public/icones/camping_orange.png"
import iconQuad from "@/public/icones/quad_orange.png"
import { useEffect, useState } from "react"

const textPeche = (
	<p>
		Located on a magnificent land bordering the Lièvre River, the Sables
		Reservoir, as well as the immense Poisson Blanc Reservoir, 29 km long and
		scattered with 148 islands, our haven of peace is also surrounded by 250
		lakes. <br />
		<br />
		Fishing is abundant and varied (walleye, pike, lake trout, bass, landlocked
		salmon, yellow perch, etc.).
	</p>
)

const textChasse = (
	<p>
		The heavy density of white-tailed deer in Zone 10 West is a great benefit to
		hunters.
		<br />
		<br /> They will be able to benefit from an exclusive and non-exclusive
		territory (Crown Lands) near our services.
		<br />
		<br />
		Whether it is for bows, rifle, black powder or crossbow hunting, we can
		provide you with a stand and baiting services.
		<br />
		<br />
		Contact us for terms and conditions.
	</p>
)

const textChalet = (
	<div>
		<p>
			Our rustic cottage will seduce you with their superb view on the Lièvre
			River and their low prices. They are all furnished and dishes are
			provided.
			<br />
			<br /> You have to bring:
		</p>

		<ul>
			<li>- Bedding</li>
			<li>- Bath towels</li>
		</ul>
	</div>
)
const textCamping = (
	<p>
		Take advantage of our site with mature trees, to offer you the tranquility
		and the joys of the outdoors.
		<br />
		<br />
		The majority of our land includes water, electricity and sewer. We also have
		on our site a sanitary block with showers, toilets (paper not included) and
		laundry room.
	</p>
)
const textVtt = (
	<p>
		ATV adventurers will enjoy 200 km of 4-season trails that are remarkably
		well maintained by the municipality's local club, member of the Fédération
		Québécoise des Clubs Quads. <br />
		<br />
		Come and take in the breathtaking views from the top of Devil&#39;s Mountain
		as well as the many mountain and lake panoramas. Don&#39;t miss the
		wonderful colours that the fall season brings.
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
				<title>Domaine Aventurier - Services</title>
				<meta name="description" content="Domaine Aventurier - Services" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBarEn scroll={scroll} />
			<main className="min-h-screen">
				<section className="pt-20">
					<div className="h-96 relative">
						<div className="container z-10">
							<h1 className=" font-OpenSans absolute bottom-10 text-white font-black text-4xl uppercase title title--orangeBig">
								Our services
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
					titre={"Fishing"}
				/>
				<ImgLeft
					icon={iconChasse}
					introPageImg={chasseImg}
					text={textChasse}
					titre={"Hunting"}
				/>
				<ImgRight
					icon={iconChalet}
					introPageImg={chaletImg}
					text={textChalet}
					titre={"Cabins"}
				/>
				<ImgLeft
					icon={iconCamping}
					introPageImg={campingImg}
					text={textCamping}
					titre={"Camping & Caravanning"}
					sousTitre={"(Seasonal and Daily)"}
				/>
				<ImgRight
					icon={iconQuad}
					introPageImg={vttImg}
					text={textVtt}
					titre={"ATV"}
				/>
			</main>
			<Footer />
		</div>
	)
}

export default services
