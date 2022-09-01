import React, { useState } from "react";
import VertServicesCard from "../VertServicesCard";
import toddlerFunData from "../../../../data/services/toddlerFunData";

const ToddlerFunVertServices = (props) => {
	return (
		<section>
			<div className="row VerticalServiceCard">
				{/* className="row  HorizontalServiceCard"*/}
				{toddlerFunData.map((service) => (
					<VertServicesCard key={service.id} service={service} handleClick={props.handleClick} />
				))}
			</div>
		</section>
	);
};

export default ToddlerFunVertServices;
