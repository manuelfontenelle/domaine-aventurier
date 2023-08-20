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
		container: {
			padding: "2rem",
			center: true,
		},
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
				"intro-home": "url('../public/intro_home.jpg')",
				"left-home": "url('../public/left_home.jpg')",
				gallery1: "url('../public/gallery1.jpg')",
				gallery2: "url('../public/gallery2.jpg')",
				gallery3: "url('../public/gallery3.jpg')",
				gallery4: "url('../public/gallery4.jpg')",
			},
		},
	},
	plugins: [],
	// plugins: [require("tw-elements/dist/plugin")],
}
