/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				// google fonts //
				inter: ["Inter", "sans-serif"],
				OpenSans: ["Open Sans", "sans-serif"],
				// playfairDisplay: ["Playfair Display", "sans-serif"],
				// poppins: ["Poppins", "sans-serif"],
				// google fonts //
			},
			backgroundImage: {
				"intro-bg": "url('../public/intro_bg.jpg')",
			},
		},
	},
	plugin: [],

	// plugins: [require("tw-elements/dist/plugin")],
}
