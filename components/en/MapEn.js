import React from "react"

const MapEn = () => {
	return (
		<section>
			<div className="w-full">
				<div className="h-[500px] lg:w-[60%] z-10 lg:absolute">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797902.4475692939!2d-75.6570906397829!3d45.896125049671525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd025bb78bc8b2f%3A0xfcbb995e2fe32142!2sDomaine%20Aventurier%20Inc.!5e0!3m2!1sfr!2sfr!4v1676136230450!5m2!1sfr!2sfr"
						width="100%"
						height="100%"
						className="border-0 "
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				<div className="container relative py-10  lg:py-0  lg:h-[500px]   ">
					<div className="lg:absolute flex justify-end  flex-col  pb-0 bg-white lg:pb-10 lg:ml-[69%]  lg:h-[500px] xl:pr-8">
						<div className="">
							<h2 className="font-OpenSans font-black text-lg uppercase title">
								Directions :
							</h2>
						</div>
						<p className="text-sm leading-5  md:text-justify mt-3 xl:leading-6 xl:text-md">
							<span className="font-bold">From Montreal:</span> Highway 15 North
							- Exit 35, Highway 50 West - Exit 174, Route 309 North to the
							village of Notre-Dame-du-Laus, take the bridge on the left
							(Poisson Blanc Reservoir), at the end of the bridge turn right on
							Chemin du Poisson Blanc to Domaine Aventurier. (2 km) <br />
							<br />
							<span className="font-bold">From Ottawa:</span> Highway 50 East,
							route 309 North to the village of Notre-Dame-du-Laus, take the
							bridge on the left (Poisson Blanc Reservoir), at the end of the
							bridge turn right on chemin du Poisson Blanc to Domaine
							Aventurier. (2 km)
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MapEn
