import React from "react"
import Image from "next/image"
import Link from "next/link"
import Forfait from "../Forfait"
import forfait1 from "@/public/icones/chevreuil.png"
import forfait2 from "@/public/icones/dinde.png"
import forfait3 from "@/public/icones/ours.png"
import forfait4 from "@/public/icones/fishing.png"
import forfait5 from "@/public/icones/quad_black.png"
import forfait6 from "@/public/icones/sauvagine.png"

import { FaArrowRight } from "react-icons/fa"

const ContentBlockEn = () => {
	return (
		<section className="flex flex-wrap">
			<div className=" bg-left-home bg-cover bg-no-repeat bg-center h-80 w-full md:absolute md:left-0 md:h-[1350px] lg:h-[1200px] md:w-[39%] "></div>
			<div className=" container relative  md:h-[1350px] lg:h-[1200px] ">
				<div className=" xl:pr-8 md:absolute md:ml-[39%]   2xl:ml-[37%] ">
					<div className="pt-10 ">
						<h2 className="font-OpenSans font-black text-xl uppercase title title--orange">
							ABOUT US ?
						</h2>

						<p className="text-md leading-6  md:text-justify mt-7 xl:leading-7 xl:text-lg">
							Renowned for its hunting and fishing sites, Domaine Aventurier is
							a peaceful place to spend vacations with family or friends.
							<br />
							<br />
							Cottages, campgrounds, outdoor activities, beach, FQCQ trails
							(ATV) to satisfy the outdoor enthusiasts of all ages
							<br />
							<br />
							Various boat rentals, kayak, paddleboard, boat with or without
							motor and pontoon.
							<br />
							<br />
							Located in the touristic region of the Upper Laurentians in
							Quebec, close to the Outaouais region. <br />
							<br />
							You will find: grocery, convenience and hardware store, pharmacy,
							restaurants, banking services, boat launch, gas stations and
							repairs within 5 minutes from Domaine Aventurier.
						</p>

						<div className=" bg-[#ff7f00] rounded-lg p-4 text-center text-white mt-10 text-md xl:text-xl">
							See our article in the Sentier Chasse &amp; Pêche Magazine:
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
								forfaitTitle={"Turkey"}
								id="#dindon"
							/>
							<Forfait
								forfaitImg={forfait1}
								forfaitTitle={"Deer"}
								id="#chevreuil"
							/>
							<Forfait
								forfaitImg={forfait6}
								forfaitTitle={"Waterfowl"}
								id="#sauvagine"
							/>
						</div>

						<div className="flex flex-col  gap-8 md:h-[190px] md:flex-row">
							<Forfait forfaitImg={forfait3} forfaitTitle={"Bear"} id="#ours" />
							<Forfait
								forfaitImg={forfait4}
								forfaitTitle={"Fishing"}
								id="#peche"
							/>
							<Forfait
								forfaitImg={forfait5}
								forfaitTitle={"Snowmobile – ATV"}
								id="#motoneige"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContentBlockEn
