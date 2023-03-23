// rafce == >  type for create react app snipper
// import useScrollPosition from "../hooks/useScrollPosition"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { ImFacebook } from "react-icons/im"

import logo from "../../public/logo.png"
// import GB from "country-flag-icons/react/3x2/GB"
// import { useTranslation } from "next-i18next"

const NavBarEn = ({ scroll }) => {
	// const { t } = useTranslation("nav")

	// detection page active pour Style Nav
	const { locale, locales } = useRouter()
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
			className={`w-full h-20  z-[100]  ease-in duration-300 bg-[#141414] shadow-xl ${
				scroll ? "fixed" : "absolute"
			}`}
			id="navbar"
		>
			{/* <h1 className="text-[#ffffff]">{locale}</h1> */}
			<div className="container flex items-center w-full h-full justify-between font-OpenSans">
				<Link href="/en">
					<Image
						src={logo}
						alt="Logo Domaine Aventurier"
						className=" mt-24 w-[130px] md:w-[150px]"
					></Image>
				</Link>

				<div>
					<ul className="hidden font-bold text-[#ffffff] md:flex">
						<Link
							href="/en"
							className={currentRoute === "/en" ? "active" : "nonActive"}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								{/* {t("nav.accueil")} */}
								Home
							</li>
						</Link>
						<Link
							href="/en/services"
							className={
								currentRoute === "/en/services" ? "active" : "nonActive"
							}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Services
							</li>
						</Link>
						<Link
							href="/en/tarifs"
							className={currentRoute === "/en/tarifs" ? "active" : "nonActive"}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Prices
							</li>
						</Link>
						<Link
							href="/en/contact"
							className={
								currentRoute === "/en/contact" ? "active" : "nonActive"
							}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Contact
							</li>
						</Link>
						<a
							target="_blank"
							href="https://www.facebook.com/groups/www.domaineaventurier"
							className=""
						>
							<li className="ml-10 text-sm py-3  text-white hover:text-[#4267B2]">
								<ImFacebook size={25} />
							</li>
						</a>
						{/* <Link href="/" className="">
							<li className="ml-10 text-sm py-4">
								<GB title="United States" className=" h-4" />
							</li>
						</Link> */}

						<li className="ml-10 text-sm py-4">
							<Link href="/" className="">
								FR
							</Link>
							|
							<Link href="/en" className="active">
								EN
							</Link>
						</li>

						{/* <li className="ml-10 text-sm py-4 flex  barreOblique">
							{locales.map((l) => (
								<Link
									key={l}
									href={currentRoute}
									locale={l}
									className="uppercase"
								>
									{l}
								</Link>
							))}
						</li> */}
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
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#ffffff] p-5 ease-in duration-300"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-300  "
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/en">
								<Image
									src={logo}
									width="125"
									alt="Logo Domaine Aventurier"
								></Image>
							</Link>
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
							<Link href="/en">
								<li className="py-4 text-md">Home</li>
							</Link>
							<Link href="/en/services">
								<li className="py-4 text-md">Services</li>
							</Link>
							<Link href="/en/tarifs">
								<li className="py-4 text-md">Prices</li>
							</Link>
							<Link href="/en/contact">
								<li className="py-4 text-md">Contact</li>
							</Link>
							<a
								target="_blank"
								href="https://www.facebook.com/groups/www.domaineaventurier"
							>
								<li className="py-4 text-md">
									<ImFacebook size={25} />
								</li>
							</a>
							<li className="py-4 text-md">
								<Link href="/" className="">
									FR
								</Link>
								|
								<Link href="/en" className="">
									EN
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBarEn
