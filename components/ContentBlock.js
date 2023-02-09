import React from "react"
import Image from "next/image"
import Link from "next/link"
import forfait1 from "../public/icones/chevreuil.png"
import forfait2 from "../public/icones/dinde.png"
import forfait3 from "../public/icones/ours.png"
import { FaArrowRight } from "react-icons/fa"
import { RiArrowDropRightLine } from "react-icons/ri"

const ContentBlock = () => {
	return (
		<section className="flex flex-wrap mx-auto  md:container  2xl:px-16">
			<div className=" bg-slate-200 h-80 w-full md:absolute md:left-0 md:h-[140%] lg:h-[120%] md:w-[40%]"></div>
			<div className="px-5 md:px-0 md:ml-[40%]">
				<div className="pt-10">
					<h2 className="font-OpenSans font-black text-xl uppercase title title--orange">
						Qui sommes-nous ?
					</h2>

					<p className="text-lg leading-8 text-justify mt-7">
						Site renommé pour la chasse et la pêche, le Domaine Aventurier est
						un endroit paisible pour les vacances en famille ou entre amis.
						<br />
						<br />
						Chalets, terrains de camping, vacances plein air, plage, sentiers
						FQCQ (VTT) pour initier ou satisfaire les adeptes de plein air de
						tous âges.
						<br />
						<br /> Situé dans la région touristique des Hautes Laurentides du
						Québec, tout près de l’Outaouais. <br />
						<br />
						Vous trouverez : épicerie, dépanneurs, quincaillerie, pharmacie,
						restaurants, services bancaires, poste d’essence et de réparations à
						moins de 5 minutes du Domaine Aventurier.
					</p>

					<div className=" bg-[#ff7f00] rounded-lg p-4 text-center text-white mt-10 text-xl">
						Voyez notre reportage dans le Magazine Sentier Chasse & Pêche :
						<span className=" font-bold inline-block mt-2">
							<FaArrowRight size={20} className="inline-block mr-2 mt-[-3px]" />
							<a href="/" className=" hover:underline">
								Destination Chasse et Pêche: Le Domaine Aventurier.
							</a>
						</span>
					</div>
				</div>

				<div className="pt-10">
					<h2 className="font-OpenSans font-black text-xl uppercase title title--green">
						Nos forfaits
					</h2>
					<div className="flex flex-wrap mt-10 gap-5 h-[300px]">
						<div className="relative rounded-xl flex-1  bg-slate-100">
							<div className="flex flex-col justify-center  gap-5 items-center h-[245px]">
								<Image
									src={forfait1}
									alt="forfait chevreuil"
									className="w-[120px] lg:w-[110px]"
								></Image>
								<h3 className=" text-center text-xl font-bold leading-6 ">
									Forfait
									<br />
									Chevreuil
								</h3>
							</div>

							<Link
								href="/tarifs"
								className="absolute bottom-0  w-full  flex justify-center items-center flex-row rounded-b-xl"
							>
								<span className="w-[75%] bg-[#79cf00] h-14 rounded-bl-xl text-center font-bold text-white flex justify-center items-center">
									En savoir +
								</span>
								<span className="w-[25%] bg-[#ff7f00] h-14 text-center rounded-br-xl text-xl font-bold text-white flex justify-center items-center">
									<RiArrowDropRightLine
										size={55}
										className="inline-block mr-2 mt-[-3px]"
									/>
								</span>
							</Link>
						</div>
						<div className="relative rounded-xl flex-1  bg-slate-100">
							<div className="flex flex-col justify-center  gap-5 items-center h-[245px]">
								<Image
									src={forfait2}
									alt="forfait chevreuil"
									className="w-[120px] lg:w-[110px]"
								></Image>
								<h3 className=" text-center text-xl font-bold leading-6 ">
									Forfait
									<br />
									Dindon
								</h3>
							</div>

							<Link
								href="/tarifs"
								className="absolute bottom-0  w-full  flex justify-center items-center flex-row rounded-b-xl"
							>
								<span className="w-[75%] bg-[#79cf00] h-14 rounded-bl-xl text-center font-bold text-white flex justify-center items-center">
									En savoir +
								</span>
								<span className="w-[25%] bg-[#ff7f00] h-14 text-center rounded-br-xl text-xl font-bold text-white flex justify-center items-center">
									<RiArrowDropRightLine
										size={55}
										className="inline-block mr-2 mt-[-3px]"
									/>
								</span>
							</Link>
						</div>
						<div className="relative rounded-xl flex-1  bg-slate-100">
							<div className="flex flex-col justify-center  gap-5 items-center h-[245px]">
								<Image
									src={forfait3}
									alt="forfait ours"
									className="w-[120px] lg:w-[110px]"
								></Image>
								<h3 className=" text-center text-xl font-bold leading-6 ">
									Forfait
									<br />
									Ours
								</h3>
							</div>

							<Link
								href="/tarifs"
								className="absolute bottom-0  w-full  flex justify-center items-center flex-row rounded-b-xl"
							>
								<span className="w-[75%] bg-[#79cf00] h-14 rounded-bl-xl text-center font-bold text-white flex justify-center items-center">
									En savoir +
								</span>
								<span className="w-[25%] bg-[#ff7f00] h-14 text-center rounded-br-xl text-xl font-bold text-white flex justify-center items-center">
									<RiArrowDropRightLine
										size={55}
										className="inline-block mr-2 mt-[-3px]"
									/>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentBlock
