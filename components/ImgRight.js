import React from "react"
import Image from "next/image"

const ImgRight = ({ icon, introPageImg, text, titre }) => {
	return (
		<section className="relative  md:h-[500px] flex flex-col flex-wrap">
			<div className="h-[200px] md:w-[50%] right-0 md:absolute md:h-[500px]">
				<Image
					className=" block w-full object-cover h-[100%]"
					src={introPageImg}
					alt="Pêche / nos services"
				/>
			</div>
			<div className="container relative ">
				<div className="py-10 md:w-[45%] md:absolute flex justify-center flex-col md:h-[500px]">
					<div className="flex flex-col md:flex-row justify-start items-center mb-5">
						<div className="">
							<Image
								src={icon}
								alt={titre}
								className="w-[45px] mb-2 md:mb-0  lg:w-[35px]"
							></Image>
						</div>
						<h2 className="font-bold text-xl md:ml-5 ">{titre}</h2>
					</div>
					<div className="text-reg md:text-lg">{text}</div>
				</div>
			</div>
		</section>
	)
}

export default ImgRight
