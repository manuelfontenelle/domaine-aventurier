import React from "react"
import Image from "next/image"
import partenaire1 from "../public/logos/logo_quebequad.png"
import partenaire2 from "../public/logos/logo_fedecp.png"
import partenaire3 from "../public/logos/logo_pourvoiries.png"
import partenaire4 from "../public/logos/logo_laurentides.png"
import partenaire5 from "../public/logos/logo_fcmq.png"
const Intro = () => {
	return (
		<section className="relative min-h-screen w-full h-full  bg-intro-bg bg-cover bg-no-repeat bg-center md:bg-[center] ">
			<div className="flex justify-center  flex-col h-full gap-3 min-h-screen px-5 lg:items-center">
				<h1 className="font-OpenSans font-bold text-white text-5xl lg:text-7xl">
					Domaine Aventurier Inc
				</h1>
				<span className="font-OpenSans font-semibold text-white text-2xl lg:text-2xl">
					Pourvoirie chasse et pêche dans les Hautes Laurentides
				</span>
				<span className="mt-2 h-1.5 w-20 bg-white"></span>
			</div>
			<div className="flex justify-items-center bg-white w-full md:bottom-0 md:absolute md:h-36 ">
				<div className="container  w-full flex-wrap flex justify-between gap-5 py-5  items-center  md:flex-wrap md:justify-between ">
					<a href="https://www.fqcq.qc.ca/" target="_blank">
						<Image
							src={partenaire1}
							alt="logo_quebequad-fédération québécoise des clubs quads"
							className="w-[120px] lg:w-[230px]"
						></Image>
					</a>
					<a href="https://fedecp.com/" target="_blank">
						<Image
							src={partenaire2}
							alt="logo_fedecp-fédération québécoise des chasseurs etpêcheurs"
							className="w-[120px] lg:w-[190px]"
						></Image>
					</a>
					<a href="https://www.pourvoiries.com/" target="_blank">
						<Image
							src={partenaire3}
							alt="logo_pourvoiries-les pourvoiries du québec"
							className="w-[100px] lg:w-[160px]"
						></Image>
					</a>
					<a href="https://www.laurentides.com/" target="_blank">
						<Image
							src={partenaire4}
							alt="logo_laurentides"
							className="w-[100px] lg:w-[220px]"
						></Image>
					</a>
					<a href="https://www.fcmq.qc.ca/" target="_blank">
						<Image
							src={partenaire5}
							alt="logo_fcmq-la fédération des clubs de motoneiges du québec"
							className="w-[80px] mlg:w-[100px]"
						></Image>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Intro
