import React from "react"
import Head from "next/head"
import Image from "next/image"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import introPageImg from "../public/intro_bg.jpg"
import icon1 from "../public/icones/fishing_orange.png"
import icon2 from "../public/icones/hunt_orange.png"

const services = () => {
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

				<section className="relative  h-[500px]">
					<div className="container relative ">
						<div className="w-[45%] absolute flex justify-center flex-col h-[500px]">
							<div className="flex flex-row justify-start items-center mb-5">
								<div className="">
									<Image
										src={icon1}
										alt=""
										className="w-[25px] lg:w-[35px]"
									></Image>
								</div>
								<h2 className="font-bold text-xl ml-5 ">Pêche</h2>
							</div>
							<p className="text-lg">
								Situé sur une terre magnifique bordant la rivière du Lièvre, le
								réservoir aux sables, ainsi que l’immense réservoir du Poisson
								Blanc, d’une distance de 29 km et parsemée de 148 îles, notre
								havre de paix est également entouré de 250 lacs. <br />
								<br />
								La pêche y est en abondance et de choix (doré, brochet, truite
								grise, achigan, ouananiche, perchaude, etc.).
							</p>
						</div>
					</div>
					<div className="w-[50%] right-0 absolute h-[500px]">
						<Image
							className=" block w-full object-cover h-[100%]"
							src={introPageImg}
							alt="Pêche / nos services"
						/>
					</div>
				</section>

				<section className="relative  h-[500px]">
					<div className="container relative ">
						<div className="left-[55%] absolute flex justify-center flex-col h-[500px]">
							<div className="flex flex-row justify-start items-center mb-5">
								<div className="">
									<Image
										src={icon2}
										alt=""
										className="w-[25px] lg:w-[35px]"
									></Image>
								</div>
								<h2 className="font-bold text-xl ml-5 ">Chasse</h2>
							</div>
							<p className="text-lg">
								La très forte densité de Cerfs de Virginie dans la zone 10 Ouest
								profite considérablement aux adeptes de la chasse.
								<br />
								<br /> Les chasseurs pourront bénéficier d’un territoire
								exclusif et non exclusif (Terres de la Couronne) à proximité de
								nos services. <br />
								<br />
								Que ce soit pour la chasse à l’arc, la carabine, poudre noire ou
								bien l’arbalète nous pouvons vous offrir le service de mirador
								et d’appâts. <br />
								<br />
								Contactez-nous pour connaître les modalités & conditions.
							</p>
						</div>
					</div>
					<div className="w-[50%] left-0 absolute h-[500px]">
						<Image
							className=" block w-full object-cover h-[100%]"
							src={introPageImg}
							alt="Pêche / nos services"
						/>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default services
