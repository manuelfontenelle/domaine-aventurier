import React from "react"
import Image from "next/image"

const ImgRightTarif = ({ icon, introPageImg, text, titre }) => {
	return (
		<section className="relative  md:h-[900px] lg:h-[750px] flex flex-col flex-wrap  bg-black">
			<div className="h-[200px] md:w-[50%] lg:w-[60%] right-0 md:absolute md:h-[900px] lg:h-[750px]">
				<Image
					className=" block w-full object-cover h-[100%]"
					src={introPageImg}
					alt="Pêche / nos services"
				/>
			</div>
			<div className="container relative ">
				<div className="py-10 md:w-[50%] lg:w-[35%] md:absolute flex justify-center flex-col md:h-[900px] lg:h-[750px]">
					<div className="flex flex-row justify-start items-center mb-1">
						<div className="">
							<Image
								src={icon}
								alt={titre}
								className="w-[45px] mb-2 md:mb-0  lg:w-[35px]"
							></Image>
						</div>
						<h2 className="font-bold text-xl ml-5 uppercase text-white">
							{titre}
						</h2>
					</div>
					<div className=" text-white pr-10">{text}</div>
				</div>
			</div>
		</section>
	)
}

export default ImgRightTarif
