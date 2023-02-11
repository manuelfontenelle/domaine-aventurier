import React from "react"

function Galery() {
	return (
		<section className="w-full flex  justify-center items-center flex-col md:flex-row">
			<div className="w-full h-[150px] bg-blue-200 md:w-[25%] md:h-[350px]"></div>
			<div className="w-full h-[150px] bg-green-300 md:w-[25%] md:h-[350px]"></div>
			<div className="w-full h-[150px] bg-orange-200 md:w-[25%] md:h-[350px]"></div>
			<div className="w-full h-[150px] bg-yellow-300 md:w-[25%] md:h-[350px]"></div>
		</section>
	)
}

export default Galery
