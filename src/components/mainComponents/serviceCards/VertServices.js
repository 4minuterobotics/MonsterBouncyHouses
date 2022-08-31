//This page can be duplicated to make a horizontal card page using the commented out code

import React, { useState } from "react";
import VertServicesCard from "./VertServicesCard";

const VertServices = (props) => {
	return (
		<section>
			<div id="VerticalServiceCard" className="row ">
				{/* id="HorizontalServiceCard" className="row " */}
				{props.data.map((service) => (
					<VertServicesCard key={service.id} service={service} handleClick={props.handleClick} />
				))}
			</div>
		</section>
	);
};

export default VertServices;
