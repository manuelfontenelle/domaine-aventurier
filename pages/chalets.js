import React from "react"

import Head from "next/head"
import Image from "next/image"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

import introPageImg from "@/public/intro_chalets.jpg"
import chalet1_1 from "@/public/chalets/chalet-1/chalet-1-01.jpg"
import chalet1_2 from "@/public/chalets/chalet-1/chalet-1--2.jpg"
import chalet1_3 from "@/public/chalets/chalet-1/chalet-1-03.jpg"
import chalet1_4 from "@/public/chalets/chalet-1/chalet-1-04.jpg"
import chalet1_5 from "@/public/chalets/chalet-1/IMG_8366-2.jpg"
import chalet1_6 from "@/public/chalets/chalet-1/IMG_8368-2.jpg"

import chalet2_1 from "@/public/chalets/chalet-2/IMG_6502-3.jpg"
import chalet2_2 from "@/public/chalets/chalet-2/IMG_6503-2.jpg"
import chalet2_3 from "@/public/chalets/chalet-2/IMG_6504-2.jpg"
import chalet2_4 from "@/public/chalets/chalet-2/IMG_6506-3.jpg"
import chalet2_5 from "@/public/chalets/chalet-2/IMG_6507-3.jpg"
import chalet2_6 from "@/public/chalets/chalet-2/IMG_6508-3.jpg"
import chalet2_7 from "@/public/chalets/chalet-2/IMG_6509-3.jpg"
import chalet2_8 from "@/public/chalets/chalet-2/IMG_6510-2.jpg"
import chalet2_9 from "@/public/chalets/chalet-2/IMG_6513-3.jpg"
import chalet2_10 from "@/public/chalets/chalet-2/IMG_6514-3.jpg"

import chalet3_1 from "@/public/chalets/chalet-3/IMG_6516-2.jpg"
import chalet3_2 from "@/public/chalets/chalet-3/IMG_6517-3.jpg"
import chalet3_3 from "@/public/chalets/chalet-3/IMG_6518-2.jpg"
import chalet3_4 from "@/public/chalets/chalet-3/IMG_6519-2.jpg"
import chalet3_5 from "@/public/chalets/chalet-3/IMG_6520-3.jpg"
import chalet3_6 from "@/public/chalets/chalet-3/IMG_6521-2.jpg"
import chalet3_7 from "@/public/chalets/chalet-3/IMG_6522-2.jpg"

import chalet5_1 from "@/public/chalets/chalet-5/IMG_6523-3.jpg"
import chalet5_2 from "@/public/chalets/chalet-5/IMG_6524-2.jpg"
import chalet5_3 from "@/public/chalets/chalet-5/IMG_6525-2.jpg"
import chalet5_4 from "@/public/chalets/chalet-5/IMG_6526-3.jpg"
import chalet5_5 from "@/public/chalets/chalet-5/IMG_6527-2.jpg"
import chalet5_6 from "@/public/chalets/chalet-5/IMG_6528-2.jpg"
import chalet5_7 from "@/public/chalets/chalet-5/IMG_6529-3.jpg"
import chalet5_8 from "@/public/chalets/chalet-5/IMG_6530-3.jpg"
import chalet5_9 from "@/public/chalets/chalet-5/IMG_6531-3.jpg"

import chalet6_1 from "@/public/chalets/chalet-6/IMG_1532-3.jpg"
import chalet6_2 from "@/public/chalets/chalet-6/IMG_1533-3.jpg"
import chalet6_3 from "@/public/chalets/chalet-6/IMG_1535-2.jpg"
import chalet6_4 from "@/public/chalets/chalet-6/IMG_1536-3.jpg"
import chalet6_5 from "@/public/chalets/chalet-6/IMG_1537-3.jpg"

import chalet7_1 from "@/public/chalets/chalet-7/IMG_6533-2.jpg"
import chalet7_2 from "@/public/chalets/chalet-7/IMG_6534-2.jpg"
import chalet7_3 from "@/public/chalets/chalet-7/IMG_6538-3.jpg"
import chalet7_4 from "@/public/chalets/chalet-7/IMG_6539-2.jpg"
import chalet7_5 from "@/public/chalets/chalet-7/IMG_6540-2.jpg"
import chalet7_6 from "@/public/chalets/chalet-7/IMG_6541-3.jpg"
import chalet7_7 from "@/public/chalets/chalet-7/IMG_6542-2.jpg"
import chalet7_8 from "@/public/chalets/chalet-7/IMG_6544-3.jpg"
import chalet7_9 from "@/public/chalets/chalet-7/IMG_6545-3.jpg"

import chalet8_1 from "@/public/chalets/chalet-8/CHALET-8.jpg"
import chalet8_2 from "@/public/chalets/chalet-8/IMG_5734-3.jpg"
import chalet8_3 from "@/public/chalets/chalet-8/IMG_5735-3.jpg"
import chalet8_4 from "@/public/chalets/chalet-8/IMG_5736-2.jpg"
import chalet8_5 from "@/public/chalets/chalet-8/IMG_5737-3.jpg"
import chalet8_6 from "@/public/chalets/chalet-8/IMG_6515-2.jpg"
import chalet8_7 from "@/public/chalets/chalet-8/IMG_6535-3.jpg"

import chalet9_1 from "@/public/chalets/chalet-9/IMG_6536-3.jpg"
import chalet9_2 from "@/public/chalets/chalet-9/IMG_6537-3.jpg"
import chalet9_3 from "@/public/chalets/chalet-9/IMG_6547-2.jpg"
import chalet9_4 from "@/public/chalets/chalet-9/IMG_8364-3.jpg"
import chalet9_5 from "@/public/chalets/chalet-9/IMG_8365-3.jpg"
import chalet9_6 from "@/public/chalets/chalet-9/IMG_8366-2.jpg"
import chalet9_7 from "@/public/chalets/chalet-9/IMG_8367-3.jpg"

import sanitaire_1 from "@/public/chalets/bloc-sanitaire/BLOC-SANITAIRE.jpg"
import sanitaire_2 from "@/public/chalets/bloc-sanitaire/BLOC.jpg"
import sanitaire_3 from "@/public/chalets/bloc-sanitaire/BLOC-SANITAIRE-(2).jpg"
import sanitaire_4 from "@/public/chalets/bloc-sanitaire/FullSizeRender-7.jpg"

import activite_1 from "@/public/chalets/activite/IMG_2204.jpg"
import activite_2 from "@/public/chalets/activite/IMG_3381.jpg"
import activite_3 from "@/public/chalets/activite/IMG_3897.jpg"
import activite_4 from "@/public/chalets/activite/IMG_4445.jpg"
import activite_5 from "@/public/chalets/activite/IMG_4694.jpg"
import activite_6 from "@/public/chalets/activite/IMG_4697.jpg"
// import activite_7 from "@/public/chalets/activite/IMG_5323.JPG"
// import activite_8 from "@/public/chalets/activite/IMG_5332.JPG"
import activite_9 from "@/public/chalets/activite/IMG_5731.jpg"
import activite_10 from "@/public/chalets/activite/IMG_1030.jpg"

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
				<meta name="description" content="Domaine Aventurier - Chalets" />
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
				{/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
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
					<h2 className="text-[#79cf00]">Nos chalets :</h2>
				</section>

				<section className="mb-20 container">
					<Tabs className="centrageMaison">
						<TabList>
							<Tab>
								<span className="absolute text-white bg-[#ff7f00] px-2 py-1 bottom-[6px] right-[12px] font-bold text-sm">
									#1
								</span>
								<Image
									className=" block object-cover "
									src={chalet1_2}
									alt="intro image tarifs"
								/>
							</Tab>

							<Tab>
								<span className="absolute text-white bg-[#ff7f00] px-2 py-1 bottom-[6px] right-[12px] font-bold text-sm">
									#2
								</span>
								<Image
									className=" block object-cover "
									src={chalet2_1}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<span className="absolute text-white bg-[#ff7f00] px-2 py-1 bottom-[6px] right-[12px] font-bold text-sm">
									#3
								</span>
								<Image
									className=" block object-cover "
									src={chalet3_1}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<span className="absolute text-white bg-[#ff7f00] px-2 py-1 bottom-[6px] right-[12px] font-bold text-sm">
									#5
								</span>
								<Image
									className=" block object-cover "
									src={chalet5_1}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<span className="absolute text-white bg-[#ff7f00] px-2 py-1 bottom-[6px] right-[12px] font-bold text-sm">
									#6
								</span>
								<Image
									className=" block object-cover "
									src={chalet6_1}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<span className="absolute text-white bg-[#ff7f00] px-2 py-1 bottom-[6px] right-[12px] font-bold text-sm">
									#7
								</span>
								<Image
									className=" block object-cover "
									src={chalet7_1}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<span className="absolute text-white bg-[#ff7f00] px-2 py-1 bottom-[6px] right-[12px] font-bold text-sm">
									#8
								</span>
								<Image
									className=" block object-cover "
									src={chalet8_7}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<span className="absolute text-white bg-[#ff7f00] px-2 py-1 bottom-[6px] right-[12px] font-bold text-sm">
									#9
								</span>
								<Image
									className=" block object-cover "
									src={chalet9_1}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<Image
									className=" block object-cover "
									src={sanitaire_1}
									alt="intro image tarifs"
								/>
							</Tab>
							<Tab>
								<Image
									className=" block object-cover "
									src={activite_1}
									alt="intro image tarifs"
								/>
							</Tab>
						</TabList>

						<TabPanel>
							<div className="w-[100%] md:w-[100%] centrageMaison">
								<h3 className="font-bold text-xl my-5 text-center">Chalet 1</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet1_1}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet1_2}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet1_3}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet1_4}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet1_5}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet1_6}
											alt="intro image tarifs"
										/>
									</div>
								</Slider>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="w-[100%] md:w-[100%] centrageMaison">
								<h3 className="font-bold text-xl my-5 text-center">Chalet 2</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet2_1}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet2_2}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet2_3}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet2_4}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet2_5}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet2_6}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet2_7}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet2_8}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet2_9}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet2_10}
											alt="intro image tarifs"
										/>
									</div>
								</Slider>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="w-[100%] md:w-[100%] centrageMaison">
								<h3 className="font-bold text-xl my-5 text-center">Chalet 3</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet3_1}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet3_2}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet3_3}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet3_4}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet3_5}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet3_6}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet3_7}
											alt="intro image tarifs"
										/>
									</div>
								</Slider>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="w-[100%] md:w-[100%] centrageMaison">
								<h3 className="font-bold text-xl my-5 text-center">Chalet 5</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet5_1}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet5_2}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet5_3}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet5_4}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet5_5}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet5_6}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet5_7}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet5_8}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet5_9}
											alt="intro image tarifs"
										/>
									</div>
								</Slider>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="w-[100%] md:w-[100%] centrageMaison">
								<h3 className="font-bold text-xl my-5 text-center">Chalet 6</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet6_1}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet6_2}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet6_3}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet6_4}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet6_5}
											alt="intro image tarifs"
										/>
									</div>
								</Slider>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="w-[100%] md:w-[100%] centrageMaison">
								<h3 className="font-bold text-xl my-5 text-center">Chalet 7</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet7_1}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet7_2}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet7_3}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet7_4}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet7_5}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet7_6}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet7_7}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet7_8}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet7_9}
											alt="intro image tarifs"
										/>
									</div>
								</Slider>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="w-[100%] md:w-[100%] centrageMaison">
								<h3 className="font-bold text-xl my-5 text-center">Chalet 8</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet8_1}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet8_2}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet8_3}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet8_4}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet8_5}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet8_6}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet8_7}
											alt="intro image tarifs"
										/>
									</div>
								</Slider>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="w-[100%] md:w-[100%] centrageMaison">
								<h3 className="font-bold text-xl my-5 text-center">Chalet 9</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet9_1}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet9_2}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet9_3}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet9_4}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet9_5}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet9_6}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={chalet9_7}
											alt="intro image tarifs"
										/>
									</div>
								</Slider>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="w-[100%] md:w-[100%] centrageMaison">
								<h3 className="font-bold text-xl my-5 text-center">
									Sanitaires
								</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={sanitaire_1}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={sanitaire_2}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={sanitaire_3}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={sanitaire_4}
											alt="intro image tarifs"
										/>
									</div>
								</Slider>
							</div>
						</TabPanel>
						<TabPanel>
							<div className="w-[100%] md:w-[100%] centrageMaison">
								<h3 className="font-bold text-xl my-5 text-center">
									Activités
								</h3>
								<Slider {...settings}>
									<div>
										{/* <h3>Chalet 1</h3> */}
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={activite_1}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={activite_2}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={activite_3}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={activite_4}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={activite_5}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={activite_6}
											alt="intro image tarifs"
										/>
									</div>
									{/* <div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={activite_7}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={activite_8}
											alt="intro image tarifs"
										/>
									</div> */}
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={activite_9}
											alt="intro image tarifs"
										/>
									</div>
									<div>
										<Image
											className=" block w-full object-contain h-[500px] md:h-[700px]"
											src={activite_10}
											alt="intro image tarifs"
										/>
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
