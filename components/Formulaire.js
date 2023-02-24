import React from "react"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"

const Formulaire = () => {
	const [prenom, setPrenom] = useState("")
	const [nom, setNom] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()

		const data = {
			prenom: prenom,
			nom: nom,
			phone: phone,
			email: email,
			message: message,
		}

		const form = document.querySelector("#contact-form1")
		const submitButton = document.querySelector("#submit-btn1")
		const loader = document.querySelector("#loader")

		// Fonction pour vider les champs du formulaire :
		const cleanForm = () => {
			form.reset()
		}

		// Fonction pour réactiver le bouton d'envoi du formulaire :
		const isEnabled = () => {
			submitButton.removeAttribute("disabled")
			submitButton.classList.remove("disabled-btn")
			loader.classList.add("hidden")
			loader.classList.remove("block")
		}

		// Fonction pour désactiver le bouton d'envoi du formulaire :
		const isDisabled = () => {
			submitButton.setAttribute("disabled", "disabled")
			submitButton.classList.add("disabled-btn")
			loader.classList.remove("hidden")
			loader.classList.add("block")
		}

		isDisabled()

		try {
			const response = await axios.post("http://localhost:5000/form", data)

			// const response = await axios.post(
			// 	"https://nodemailer-domaine-aventurier.herokuapp.com/form",
			// 	data
			// )

			if (response.status === 200) {
				alert("Votre formulaire a bien été envoyé")
				cleanForm()
				isEnabled()
			}
		} catch (e) {
			if (e.response.data.error === "Missing parameters") {
				alert("Veuillez remplir tous les champs du formulaire")
			} else {
				alert("Une erreur est survenue")
				cleanForm()
			}

			isEnabled()
		}
	}

	return (
		<div className="relative">
			<div className="block rounded-lg  md:max-w-lg">
				<form id="contact-form1" onSubmit={(e) => handleSubmit(e)}>
					<div className="grid grid-cols-2 gap-4">
						<div className="form-group mb-6">
							<input
								type="text"
								className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-400
          bg-[#ffffff] bg-clip-padding
          border border-solid border-gray-400
          rounded
          transition
          ease-in-out
          m-0
          focus:text-black focus:bg-gray-50 focus:border-gray-600 focus:shadow-none focus:outline-none"
								id="exampleInput123"
								aria-describedby="emailHelp123"
								placeholder="Prénom"
								onChange={(e) => setPrenom(e.target.value)}
							/>
						</div>
						<div className="form-group mb-6">
							<input
								type="text"
								className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-400
          bg-[#ffffff] bg-clip-padding
          border border-solid border-gray-400
          rounded
          transition
          ease-in-out
          m-0
          focus:text-black focus:bg-gray-50 focus:border-gray-600 focus:shadow-none focus:outline-none"
								id="exampleInput124"
								aria-describedby="emailHelp124"
								placeholder="Nom"
								onChange={(e) => setNom(e.target.value)}
							/>
						</div>
					</div>

					<div className="form-group mb-6">
						<input
							type="tel"
							className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-400
        bg-[#ffffff] bg-clip-padding
        border border-solid border-gray-400
        rounded
        transition
        ease-in-out
        m-0
        focus:text-black focus:bg-gray-50 focus:border-gray-600 focus:shadow-none focus:outline-none
      "
							id="exampleTel0"
							placeholder="Téléphone"
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>

					<div className="form-group mb-6">
						<input
							type="email"
							className="form-control block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-400
       bg-[#ffffff] bg-clip-padding
       border border-solid border-gray-400
       rounded
       transition
       ease-in-out
       m-0
       focus:text-black focus:bg-gray-50 focus:border-gray-600 focus:shadow-none focus:outline-none"
							id="exampleInput8"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="form-group mb-6">
						<textarea
							className="
       form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-400
       bg-[#ffffff] bg-clip-padding
       border border-solid border-gray-400
       rounded
       transition
       ease-in-out
       m-0
       focus:text-black focus:bg-gray-50 focus:border-gray-600 focus:shadow-none focus:outline-none
     "
							id="exampleFormControlTextarea13"
							rows="3"
							placeholder="Description des travaux..."
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</div>

					<button
						id="submit-btn1"
						type="submit"
						className="
     w-full
     px-6
     py-4
     mt-5
     bg-[#ff7f00]
     text-white
     font-medium
     text-sm
     leading-tight
     uppercase
     rounded
     shadow-md
     hover:bg-[#000000] hover:shadow-lg
     focus:bg-[#000000] focus:shadow-lg focus:outline-none focus:ring-0
     active:bg-[#000000] active:shadow-lg
     transition
     duration-150
     ease-in-out btn-form"
					>
						Envoyer
					</button>
					<div className="hidden" id="loader">
						<div className="mx-auto w-96 flex justify-center">
							<ThreeDots
								id="loaderId"
								height="80"
								width="80"
								radius="9"
								color="#ff7f00"
								ariaLabel="three-dots-loading"
								wrapperStyle={{}}
								wrapperClassName=""
								visible={true}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Formulaire
