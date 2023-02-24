import React from "react"
import Image from "next/image"

const ImgRightTarifWhite = ({ icon, introPageImg, text, titre }) => {
	return (
		<section className="relative  md:h-[250px] flex flex-col flex-wrap  bg-white">
			<div className="h-[200px] md:w-[60%] right-0 md:absolute md:h-[250px]">
				<Image
					className=" block w-full object-cover h-[100%]"
					src={introPageImg}
					alt="Pêche / nos services"
				/>
			</div>
			<div className="container relative ">
				<div className="py-10 md:w-[35%] md:absolute flex justify-center flex-col md:h-[250px]">
					<div className="flex flex-row justify-start items-center mb-1">
						<div className="">
							<Image
								src={icon}
								alt={titre}
								className="w-[45px] mb-2 md:mb-0  lg:w-[35px]"
							></Image>
						</div>
						<h2 className="font-bold text-xl ml-5 uppercase text-black">
							{titre}
						</h2>
					</div>
					<div className=" text-black pr-10">{text}</div>
				</div>
			</div>
		</section>
	)
}

export default ImgRightTarifWhite
