import React from "react"

function Galery() {
	return (
		<section className="w-full flex  justify-center items-center flex-wrap flex-row md:flex-row">
			<div className="w-[50%] h-[230px] bg-blue-200 md:w-[25%] md:h-[400px]"></div>
			<div className="w-[50%] h-[230px] bg-green-300 md:w-[25%] md:h-[400px]"></div>
			<div className="w-[50%] h-[230px] bg-orange-200 md:w-[25%] md:h-[400px]"></div>
			<div className="w-[50%] h-[230px] bg-yellow-300 md:w-[25%] md:h-[400px]"></div>
		</section>
	)
}

export default Galery
