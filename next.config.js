/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")

const path = require("path")

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = {
	nextConfig,

	i18n: {
		locales: i18n.locales,
		defaultLocale: i18n.defaultLocale,
	},

	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},

	images: {
		unoptimized: true,
	},
}
