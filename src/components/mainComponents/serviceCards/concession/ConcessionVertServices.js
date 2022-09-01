import React, { useState } from "react";
import VertServicesCard from "../VertServicesCard";
import concessionData from "../../../../data/services/concessionData";

const ConcessionVertServices = (props) => {
	return (
		<section>
			<div className="row VerticalServiceCard">
				{/* className="row  HorizontalServiceCard"*/}
				{concessionData.map((service) => (
					<VertServicesCard key={service.id} service={service} handleClick={props.handleClick} />
				))}
			</div>
		</section>
	);
};

export default ConcessionVertServices;
