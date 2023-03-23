import "../styles/scss/style.scss"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />
}

// import "../styles/scss/style.scss"
// import "../styles/globals.css"
// import { appWithTranslation } from "next-i18next"

// const App = ({ Component, pageProps }) => <Component {...pageProps} />

// export default appWithTranslation(App)
