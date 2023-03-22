/** @type {import('next').NextConfig} */
import { i18n } from "./next-i18next.config"

import { join } from "path"

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: i18n.locales,
		defaultLocale: i18n.defaultLocale,
	},
}

export default {
	nextConfig,

	sassOptions: {
		includePaths: [join(__dirname, "styles")],
	},

	images: {
		unoptimized: true,
	},
}
