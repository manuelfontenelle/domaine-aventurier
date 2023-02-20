import React from "react"
import Image from "next/image"

const ImgLeft = ({ icon, introPageImg, text, titre, sousTitre }) => {
	return (
		<section className="relative md:h-[500px] flex flex-col flex-wrap">
			<div className="h-[200px] md:w-[50%] left-0 md:absolute md:h-[500px]">
				<Image
					className=" block w-full object-cover h-[100%]"
					src={introPageImg}
					alt="Pêche / nos services"
				/>
			</div>
			<div className="container relative ">
				<div className="py-10 md:left-[55%] md:absolute flex justify-center flex-col md:h-[500px]">
					<div className="flex flex-col md:flex-row justify-start items-center mb-5">
						<div className="">
							<Image
								src={icon}
								alt={titre}
								className="w-[45px] mb-2 md:mb-0 lg:w-[35px]"
							></Image>
						</div>
						<h2 className="font-bold text-xl md:ml-5 ">{titre}</h2>
						<span className="block text-sm font-normal md:ml-3 mt-1">
							{sousTitre}
						</span>
					</div>

					<div className="text-reg md:text-lg">{text}</div>
				</div>
			</div>
		</section>
	)
}

export default ImgLeft
