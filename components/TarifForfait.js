import React from "react"
import Image from "next/image"

const TarifForfait = ({ icon, titre, sousTitre }) => {
	return (
		<div className="flex flex-col justify-start items-start">
			<div className="border-l-8 border-solid border-[#ff7f00] pl-4">
				<Image
					src={icon}
					alt=""
					className="w-[55px] mb-2 md:mb-0  lg:w-[70px]"
				></Image>
				<h2 className="font-bold text-xl uppercase mt-5">{titre}</h2>
				<span className="font-bold  block text-sm">{sousTitre}</span>
			</div>

			<p className="mt-5 text-sm leading-6">
				3 nuits/4 jours de chasse pour
				<span className="font-bold text-[#ff7f00]"> 500$/pers </span>
				hébergement inclus <br />
				Forfait 1 semaine site appâté
				<span className="font-bold text-[#ff7f00] "> 1100$/pers </span>
				hébergement inclus
			</p>
		</div>
	)
}

export default TarifForfait
