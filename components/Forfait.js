import React from "react"
import Image from "next/image"
import Link from "next/link"
import { RiArrowRightSLine } from "react-icons/ri"
const Forfait = ({ forfaitImg, forfaitTitle }) => {
	return (
		<div className="relative rounded-xl flex-1  bg-slate-100  ">
			<div className="flex flex-row justify-center pb-10 gap-5 items-center h-[170px] md:pb-0 md:h-[255px] md:flex-col">
				<Image
					src={forfaitImg}
					alt="forfait chevreuil"
					className="w-[70px] xl:w-[90px]"
				></Image>
				<h3 className=" text-left  text-md font-bold leading-7 xl:text-center xl:text-lg">
					Forfait
					<span className="block mt-[-6px]"> {forfaitTitle}</span>
				</h3>
			</div>

			<Link
				href="/tarifs"
				className="absolute bottom-0  w-full  flex justify-center items-center flex-row rounded-b-xl"
			>
				<span className="w-[80%] bg-[#79cf00] h-10 rounded-bl-xl text-center font-regular text-sm text-white flex justify-center items-center lg:h-12 lg:w-[80%] xl:text-lg">
					En savoir +
				</span>
				<span className="w-[20%] bg-[#ff7f00] h-10 text-center rounded-br-xl text-xl font-bold text-white flex justify-center  items-center lg:h-12 lg:w-[20%] hover:bg-[#141414]">
					<RiArrowRightSLine size={35} className="inline-block " />
				</span>
			</Link>
		</div>
	)
}

export default Forfait
