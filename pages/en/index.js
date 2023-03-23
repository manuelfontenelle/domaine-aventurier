import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
// import styles from "@/styles/Home.module.css"
import NavBarEn from "@/components/en/NavBarEn"
import Footer from "@/components/Footer"
import IntroEn from "@/components/en/IntroEn"
import RightBarEn from "@/components/en/RightBarEn"
import Galery from "@/components/Galery"
import ContentBlockEn from "@/components/en/ContentBlockEn"
import ContentBlock2En from "@/components/en/ContentBlock2En"
import MapEn from "@/components/en/MapEn"
import { useEffect, useState } from "react"
const inter = Inter({ subsets: ["latin"] })

//// rajout de ce bloc sur toute les pages
// import { useTranslation } from "next-i18next"
// import { serverSideTranslations } from "next-i18next/serverSideTranslations"

// export async function getStaticProps({ locale }) {
// 	return {
// 		props: {
// 			...(await serverSideTranslations(locale, ["common", "nav"])),
// 			// Will be passed to the page component as props
// 		},
// 	}
// }
//// rajout de ce bloc sur toute les pages

export default function Home() {
	// const { t } = useTranslation("common")

	const [scroll, setScroll] = useState(false)
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50)
		})
	}, [])
	return (
		<>
			<Head>
				<title>
					Domaine Aventurier - Upper Laurentians Hunting and fishing outfitter
					Laurentides
				</title>
				<meta
					name="description"
					content="Upper Laurentians Hunting and fishing outfitter"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBarEn scroll={scroll} />
			<main>
				<p className="text-[#ffffff] absolute z-[1000]">
					{/* {t("homepage.title")} */}
				</p>
				<RightBarEn />
				<IntroEn />
				<Galery />
				<ContentBlockEn />
				<ContentBlock2En />
				<MapEn />
			</main>
			<Footer />
		</>
	)
}
