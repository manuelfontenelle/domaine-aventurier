import Head from "next/head"
import Image from "next/image"
import { Inter } from "@next/font/google"
// import styles from "@/styles/Home.module.css"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import Intro from "@/components/Intro"
import RightBar from "@/components/RightBar"
import Galery from "@/components/Galery"
import ContentBlock from "@/components/ContentBlock"
import ContentBlock2 from "@/components/ContentBlock2"
import Map from "@/components/Map"
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
					Domaine Aventurier - Pourvoirie chasse et pêche dans les Hautes
					Laurentides
				</title>
				<meta
					name="description"
					content="Site renommé pour la chasse et la pêche, le Domaine Aventurier est un endroit paisible pour les vacances en famille ou entre amis."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
				<meta
					property="og:title"
					content="Domaine Aventurier - Pourvoirie chasse et pêche dans les Hautes Laurentides"
				/>
				<meta
					property="og:description "
					content="Site renommé pour la chasse et la pêche, le Domaine Aventurier est un endroit paisible pour les vacances en famille ou entre amis."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.domaineaventurier.com" />
				<meta
					property="og:image"
					content="https://www.domaineaventurier.com/og-background.jpg"
				/>
				<meta property="og:site_name" content="Domaine Aventurier" />
			</Head>
			<NavBar scroll={scroll} />
			<main>
				<p className="text-[#ffffff] absolute z-[1000]">
					{/* {t("homepage.title")} */}
				</p>

				<RightBar />
				<Intro />
				<Galery />
				<ContentBlock />
				<ContentBlock2 />
				<Map />
			</main>
			<Footer />
		</>
	)
}
