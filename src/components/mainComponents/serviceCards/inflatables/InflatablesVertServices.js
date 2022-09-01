import React, { useState } from "react";
import VertServicesCard from "../VertServicesCard";
import inflatablesData from "../../../../data/services/inflatablesData";

const InflatablesVertServices = (props) => {
	return (
		<section>
			<div className="row VerticalServiceCard">
				{/* className="row  HorizontalServiceCard"*/}
				{inflatablesData.map((service) => (
					<VertServicesCard key={service.id} service={service} handleClick={props.handleClick} />
				))}
			</div>
		</section>
	);
};

export default InflatablesVertServices;
