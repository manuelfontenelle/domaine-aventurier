import React from "react"
import Image from "next/image"

const TarifForfait2 = ({ titre, texte }) => {
	return (
		<div className="md:w-[47%] ">
			<h2 className="font-bold text-xl uppercase">{titre}</h2>
			{texte}
		</div>
	)
}

export default TarifForfait2
