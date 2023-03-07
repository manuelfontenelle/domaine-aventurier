import React from "react"

function Galery() {
	return (
		<section className="w-full flex  justify-center items-center flex-wrap flex-row md:flex-row">
			<div className="w-[50%] h-[230px] bg-gallery1 bg-cover bg-no-repeat bg-center md:w-[25%] md:h-[400px]"></div>
			<div className="w-[50%] h-[230px] bg-gallery2 bg-cover bg-no-repeat bg-center md:w-[25%] md:h-[400px]"></div>
			<div className="w-[50%] h-[230px] bg-gallery3 bg-cover bg-no-repeat bg-center md:w-[25%] md:h-[400px]"></div>
			<div className="w-[50%] h-[230px] bg-gallery4 bg-cover bg-no-repeat bg-center md:w-[25%] md:h-[400px]"></div>
		</section>
	)
}

export default Galery
