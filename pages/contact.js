import React from "react"
import Head from "next/head"
import Image from "next/image"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import introPageImg from "../public/intro_contact.jpg"
import Map from "@/components/Map"
import Formulaire from "@/components/Formulaire"

import icon1 from "../public/icones/pin_black.png"
import icon2 from "../public/icones/phone_black.png"
import logo from "../public/logo.png"
import { useEffect, useState } from "react"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "nav"])),
			// Will be passed to the page component as props
		},
	}
}

const contact = () => {
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
								Contact
							</h1>
						</div>

						<Image
							className=" block w-full object-cover h-[100%]"
							src={introPageImg}
							alt="intro image contact"
						/>
					</div>
				</section>

				<section className="container mb-10">
					<div className="flex flex-col md:flex-row ">
						<div className="block  my-10">
							<h3 className="mb-6 font-bold text-xl uppercase">
								Formulaire de contact :
							</h3>
							<Formulaire />
						</div>
						<div className=" py-10 bg-white md:ml-16">
							<div className=" flex flex-col justify-start items-start gap-10">
								<div className="flex flex-row justify-start items-start">
									<Image
										src={icon1}
										alt="Icon map"
										className="w-[35px] lg:w-[35px] mr-5 mt-2"
									></Image>
									<p className="font-OpenSans text-base font-bold text-[#141414] md:text-lg ">
										Domaine Aventurier
										<br />
										131 Chemin du Poisson Blanc <br />
										Notre-Dame-du-Laus, Québec J0X 2M0
									</p>
								</div>
								<div className="flex flex-row justify-end items-start">
									<Image
										src={icon2}
										alt="Icon phone"
										className="w-[35px] lg:w-[35px] mr-5 mt-2"
									></Image>
									<p className="font-OpenSans font-bold text-[#141414] text-base md:text-lg">
										819-767-2130
										<br />
										<span className="mt-1 block">
											514-518-2643
											<span className="text-sm md:ml-1 block md:inline-block">
												(Cellulaire : Appel / SMS)
											</span>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="h-14 bg-[#ff7f00]">
					<div className="bottom-4 px-5 container relative">
						<Image
							src={logo}
							alt="Logo Domaine Aventurier"
							className="w-[120px] right-8 absolute mt-[-30px] sm:mt-[-40px] sm:w-[150px] lg:w-[300px] z-20 lg:mt-[-130px]"
						></Image>
					</div>
				</section>
				<Map />
			</main>
			<Footer />
		</div>
	)
}

export default contact
