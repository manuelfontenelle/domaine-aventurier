import React from "react"
import Link from "next/link"

import { ImFacebook } from "react-icons/im"
const Footer = () => {
	// useEffect(() => {
	const getYear = () => {
		return new Date().getFullYear()
	}
	// }, [])

	return (
		<footer className="bg-black  bottom-0 h-12 w-full">
			<div className="container mx-auto px-5 2xl:px-16">
				<div className=" flex justify-between items-center w-full bottom-0 h-12  ">
					<div className=" text-xs uppercase  py-1 font-semibold text-white">
						&copy; copyright {getYear()} - Domaine Aventurier
					</div>
					<Link href="/" className="">
						<span className=" text-sm   text-white hover:text-[#4267B2]">
							<ImFacebook size={18} />
						</span>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
