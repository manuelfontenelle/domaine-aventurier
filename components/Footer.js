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
			<div className="container ">
				<div className=" flex justify-between items-center w-full bottom-0 h-12  ">
					<div className=" text-xs uppercase  py-1 font-semibold text-white">
						&copy; copyright {getYear()} - Domaine Aventurier
					</div>
					<a
						target="_blank"
						href="https://www.facebook.com/groups/www.domaineaventurier"
						className=""
					>
						<span className=" text-sm   text-white hover:text-[#4267B2]">
							<ImFacebook size={18} />
						</span>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
