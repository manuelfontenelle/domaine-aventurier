import React from "react"

import Head from "next/head"
import Image from "next/image"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
// import iconChevreuil from "@/public/icones/chevreuil.png"
// import iconDinde from "@/public/icones/dinde_green.png"
// import iconOurs from "@/public/icones/ours.png"
// import iconSauvagine from "@/public/icones/sauvagine_green.png"
// import iconPeche from "@/public/icones/fishing_green.png"
// import iconQuad from "@/public/icones/quad_green.png"
// import iconChalet from "@/public/icones/bed_orange.png"
// import iconCamping from "@/public/icones/camping_orange.png"
import introPageImg from "@/public/intro_tarifs.jpg"
// import tarifDindonImg from "@/public/tarif_dindon.jpg"
// import tarifSauvagineImg from "@/public/tarif_sauvagine.jpg"
// import tarifChevreuilImg from "@/public/tarif_chevreuil.jpg"
// import tarifOursImg from "@/public/tarif_ours.jpg"
// import tarifPecheImg from "@/public/tarif_peche.jpg"
// import tarifQuadImg from "@/public/tarif_quad.jpg"
// import ImgRightTarif from "@/components/ImgRightTarif"
// import ImgRightTarifWhite from "@/components/ImgRightTarifWhite"
// import TarifForfait2 from "@/components/TarifForfait2"
import { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

const chalets = () => {
	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50)
		})

		// $(document).ready(function () {
		// 	$(".carousel").slick()

		// 	$(".carousel2").slick()

		// 	$(".carousel2").on("mousedown mouseup", function () {
		// 		$(".carousel").slick("slickGoTo", 1)
		// 	})
		// })
	}, [])

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<div>
			<Head>
				<title>Domaine Aventurier - Chalets</title>
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
				<script src="../path/to/flowbite/dist/flowbite.min.js"></script>
			</Head>
			<NavBar scroll={scroll} />
			<main className="min-h-screen">
				<section className="pt-20">
					<div className="h-96 relative">
						<div className="container z-10">
							<h1 className=" font-OpenSans absolute bottom-10 text-white font-black text-4xl uppercase title title--orangeBig">
								Nos Chalets
							</h1>
						</div>

						<Image
							className=" block w-full object-cover h-[100%]"
							src={introPageImg}
							alt="intro image chalets"
						/>
					</div>
				</section>

				<section className="font-bold text-2xl container text-center py-10">
					<h2 className="text-[#79cf00]">Nos 9 chalets :</h2>
				</section>

				<section className="mb-20">
					<Tabs className="w-[90%] centrageMaison">
						<TabList>
							<Tab>
								<Image
									className=" block object-cover "
									src={introPageImg}
									alt="intro image tarifs"
								/>
							</Tab>

							<Tab>
								<Image
									className=" block object-cover "
									src={introPageImg}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<Image
									className=" block object-cover "
									src={introPageImg}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<Image
									className=" block object-cover "
									src={introPageImg}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<Image
									className=" block object-cover "
									src={introPageImg}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<Image
									className=" block object-cover "
									src={introPageImg}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<Image
									className=" block object-cover "
									src={introPageImg}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<Image
									className=" block object-cover "
									src={introPageImg}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<Image
									className=" block object-cover "
									src={introPageImg}
									alt="intro image tarifs"
								/>
							</Tab>
						</TabList>

						<TabPanel>
							<div className="w-[100%] md:w-[70%] centrageMaison">
								<h3 className="font-bold text-xl my-5">Chalet 1</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-cover h-[100%] "
											src={introPageImg}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-cover h-[100%] "
											src={introPageImg}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<h3>3</h3>
									</div>
									<div>
										<h3>4</h3>
									</div>
									<div>
										<h3>5</h3>
									</div>
									<div>
										<h3>6</h3>
									</div>
								</Slider>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="w-[100%] md:w-[70%] centrageMaison">
								<h3 className="font-bold text-xl my-5">Chalet 2</h3>
								<Slider {...settings}>
									<div>
										<Image
											className=" block w-full object-cover h-[100%] "
											src={introPageImg}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-cover h-[100%] "
											src={introPageImg}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<h3>3</h3>
									</div>
									<div>
										<h3>4</h3>
									</div>
									<div>
										<h3>5</h3>
									</div>
									<div>
										<h3>6</h3>
									</div>
								</Slider>
							</div>
						</TabPanel>
					</Tabs>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default chalets
