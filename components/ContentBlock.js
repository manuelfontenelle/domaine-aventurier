import React from "react"
import Image from "next/image"
import Link from "next/link"
import Forfait from "./Forfait"
import forfait1 from "../public/icones/chevreuil.png"
import forfait2 from "../public/icones/dinde.png"
import forfait3 from "../public/icones/ours.png"
import forfait4 from "../public/icones/fishing.png"
import forfait5 from "../public/icones/quad_black.png"
import forfait6 from "../public/icones/sauvagine.png"

import { FaArrowRight } from "react-icons/fa"

const ContentBlock = () => {
	return (
		<section className="flex flex-wrap">
			<div className=" bg-left-home bg-cover bg-no-repeat bg-center h-80 w-full md:absolute md:left-0 md:h-[1350px] lg:h-[1200px] md:w-[39%] "></div>
			<div className=" container relative  md:h-[1350px] lg:h-[1200px] ">
				<div className=" xl:pr-8 md:absolute md:ml-[39%]   2xl:ml-[37%] ">
					<div className="pt-10 ">
						<h2 className="font-OpenSans font-black text-xl uppercase title title--orange">
							Qui sommes-nous ?
						</h2>

						<p className="text-md leading-6  md:text-justify mt-7 xl:leading-7 xl:text-lg">
							Site renommé pour la chasse et la pêche, le Domaine Aventurier est
							un endroit paisible pour les vacances en famille ou entre amis.
							<br />
							<br />
							Chalets, terrains de camping, vacances plein air, plage, sentiers
							FQCQ (VTT) pour initier ou satisfaire les adeptes de plein air de
							tous âges.
							<br />
							<br />
							Location d'embarcation multiple, kayak, paddleboard, chaloupe avec
							ou sans moteur et ponton.
							<br />
							<br />
							Situé dans la région touristique des Hautes Laurentides au Québec,
							tout près de l’Outaouais. <br />
							<br />
							Vous trouverez : épicerie, dépanneurs, quincaillerie, pharmacie,
							restaurants, services bancaires, rampe de mise à l'eau, poste
							d’essence et de réparations à moins de 5 minutes du Domaine
							Aventurier.
						</p>

						<div className=" bg-[#ff7f00] rounded-lg p-4 text-center text-white mt-10 text-md xl:text-xl">
							Voyez notre reportage dans le Magazine Sentier Chasse & Pêche :
							<span className=" font-bold inline-block mt-2">
								<FaArrowRight
									size={20}
									className="inline-block mr-2 mt-[-3px]"
								/>
								<a
									target="_blank"
									href="http://www.domaineaventurier.com/wp-content/uploads/p042-046%20Destination%20aventurier.pdf"
									className=" hover:underline"
								>
									Destination Chasse et Pêche: Le Domaine Aventurier.
								</a>
							</span>
						</div>
					</div>
					<div className="pt-10">
						<h2 className="font-OpenSans font-black text-xl uppercase title title--green">
							Nos forfaits :
						</h2>
						<div className="flex  flex-col mt-10 mb-7 gap-8 md:h-[190px] md:flex-row">
							<Forfait
								forfaitImg={forfait2}
								forfaitTitle={"Dindon"}
								id="#dindon"
							/>
							<Forfait
								forfaitImg={forfait1}
								forfaitTitle={"Chevreuil"}
								id="#chevreuil"
							/>
							<Forfait
								forfaitImg={forfait6}
								forfaitTitle={"Sauvagine"}
								id="#sauvagine"
							/>
						</div>

						<div className="flex flex-col  gap-8 md:h-[190px] md:flex-row">
							<Forfait forfaitImg={forfait3} forfaitTitle={"Ours"} id="#ours" />
							<Forfait
								forfaitImg={forfait4}
								forfaitTitle={"Pêche"}
								id="#peche"
							/>
							<Forfait
								forfaitImg={forfait5}
								forfaitTitle={"Motoneige / Quad"}
								id="#motoneige"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentBlock
