// rafce == >  type for create react app snipper
// import useScrollPosition from "../hooks/useScrollPosition"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { ImFacebook } from "react-icons/im"

import logo from "../public/logo.png"
import GB from "country-flag-icons/react/3x2/GB"

const NavBar = () => {
	// detection page active pour Style Nav
	const router = useRouter()
	const currentRoute = router.pathname

	// const scrollPosition = useScrollPosition()
	// console.log(scrollPosition)

	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<nav
			className="fixed w-full h-20  z-[100]  ease-in duration-300 bg-[#141414] shadow-xl"
			id="navbar"
		>
			<div className="container mx-auto flex items-center w-full h-full px-5 2xl:px-16 justify-between font-OpenSans">
				<Image
					src={logo}
					width="150"
					alt="Logo Domaine Aventurier"
					className=" mt-24"
				></Image>

				<div>
					<ul className="hidden font-bold text-[#ffffff] md:flex">
						<Link
							href="/"
							className={currentRoute === "/" ? "active" : "nonActive"}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Accueil
							</li>
						</Link>
						<Link
							href="/services"
							className={currentRoute === "/services" ? "active" : "nonActive"}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Services
							</li>
						</Link>
						<Link
							href="/tarifs"
							className={currentRoute === "/tarifs" ? "active" : "nonActive"}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Tarifs
							</li>
						</Link>
						<Link
							href="/career"
							className={currentRoute === "/contact" ? "active" : "nonActive"}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Contact
							</li>
						</Link>
						<Link href="/" className="">
							<li className="ml-10 text-sm py-3  text-white hover:text-[#4267B2]">
								<ImFacebook size={25} />
							</li>
						</Link>
						<Link href="/" className="">
							<li className="ml-10 text-sm py-4">
								<GB title="United States" className=" h-4" />
							</li>
						</Link>
					</ul>
					<div
						onClick={handleNav}
						className="md:hidden cursor-pointer text-white"
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffffff] p-5 ease-in duration-300"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-300"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Image
								src={logo}
								width="125"
								alt="Logo Domaine Aventurier"
							></Image>
							<div onClick={handleNav} className=" p-3 cursor-pointer">
								<AiOutlineClose size={25} />
							</div>
						</div>
						{/* <div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let's build something legendary together
							</p>
						</div> */}
					</div>
					<div className="py-4  flex-col font-OpenSans ">
						<ul className="uppercase font-bold">
							<Link href="/">
								<li className="py-4 text-md">Accueil</li>
							</Link>
							<Link href="/services">
								<li className="py-4 text-md">Services</li>
							</Link>
							<Link href="/tarifs">
								<li className="py-4 text-md">Tarifs</li>
							</Link>
							<Link href="/contact">
								<li className="py-4 text-md">Contact</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-md">
									<ImFacebook size={25} />
								</li>
							</Link>
							<Link href="/">
								<li className="py-4 text-md">
									<GB title="United States" className=" h-4" />
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
