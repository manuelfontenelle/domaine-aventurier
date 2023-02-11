import React from "react"
import Image from "next/image"
import Link from "next/link"
import Forfait from "./Forfait"
import forfait1 from "../public/icones/chevreuil.png"
import forfait2 from "../public/icones/dinde.png"
import forfait3 from "../public/icones/ours.png"

import { FaArrowRight } from "react-icons/fa"

const ContentBlock = () => {
	return (
		<section className="flex flex-wrap mx-auto  md:container  2xl:px-16">
			<div className=" bg-slate-200 h-80 w-full md:absolute md:left-0 md:h-[1250px] lg:h-[1050px] md:w-[40%]"></div>
			<div className="px-5 xl:px-0 md:ml-[40%] md:h-[1250px] lg:h-[1050px]">
				<div className="pt-10">
					<h2 className="font-OpenSans font-black text-xl uppercase title title--orange">
						Qui sommes-nous ?
					</h2>

					<p className="text-md leading-6  md:text-justify mt-7 xl:leading-8 xl:text-lg">
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

					<div className=" bg-[#ff7f00] rounded-lg p-4 text-center text-white mt-10 text-md xl:text-xl">
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
						Nos forfaits :
					</h2>
					<div className="flex flex-col my-10 gap-5 md:h-[300px] md:flex-row">
						<Forfait forfaitImg={forfait1} forfaitTitle={"Chevreuil"} />
						<Forfait forfaitImg={forfait2} forfaitTitle={"Dindon"} />
						<Forfait forfaitImg={forfait3} forfaitTitle={"Ours"} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentBlock
