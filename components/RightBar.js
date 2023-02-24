import React from "react"
import Image from "next/image"
import Link from "next/link"
import icon1 from "../public/icones/camping.png"
import icon2 from "../public/icones/caravane.png"
import icon3 from "../public/icones/quad_black.png"
import icon4 from "../public/icones/bed.png"
import icon5 from "../public/icones/hunt.png"
import icon6 from "../public/icones/fishing.png"
import icon7 from "../public/icones/wifi_black.png"

const RightBar = () => {
	return (
		<section className="absolute z-[50] right-0 bottom-0  flex flex-row md:top-[20%] md:flex-col">
			<Link href="/tarifs">
				<div className="h-11 w-11  bg-white flex justify-center items-center lg:h-14 lg:w-14">
					<Image src={icon1} alt="" className="w-[25px] lg:w-[35px]"></Image>
				</div>
			</Link>
			<Link href="/tarifs">
				<div className="h-11 w-11 bg-white flex justify-center items-center lg:h-14 lg:w-14">
					<Image src={icon2} alt="" className="w-[25px] lg:w-[35px]"></Image>
				</div>
			</Link>
			<Link href="/tarifs">
				<div className="h-11 w-11 bg-white flex justify-center items-center lg:h-14 lg:w-14">
					<Image src={icon3} alt="" className="w-[25px] lg:w-[35px]"></Image>
				</div>
			</Link>
			<Link href="/tarifs">
				<div className="h-11 w-11 bg-white flex justify-center items-center lg:h-14 lg:w-14">
					<Image src={icon4} alt="" className="w-[25px] lg:w-[35px]"></Image>
				</div>
			</Link>
			<Link href="/tarifs">
				<div className="h-11 w-11 bg-white flex justify-center items-center lg:h-14 lg:w-14">
					<Image src={icon5} alt="" className="w-[25px] lg:w-[35px]"></Image>
				</div>
			</Link>
			<Link href="/tarifs">
				<div className="h-11 w-11 bg-white flex justify-center items-center lg:h-14 lg:w-14">
					<Image src={icon6} alt="" className="w-[25px] lg:w-[35px]"></Image>
				</div>
			</Link>
			<div className="h-11 w-11 bg-white flex justify-center items-center lg:h-14 lg:w-14">
				<Image src={icon7} alt="" className="w-[25px] lg:w-[35px]"></Image>
			</div>
		</section>
	)
}

export default RightBar
