import React, { useState } from "react";
import VertServicesCard from "../VertServicesCard";
import gamesData from "../../../../data/services/gamesData";

const GamesVertServices = (props) => {
	return (
		<section>
			<div className="row VerticalServiceCard">
				{/* className="row  HorizontalServiceCard"*/}
				{gamesData.map((service) => (
					<VertServicesCard key={service.id} service={service} handleClick={props.handleClick} />
				))}
			</div>
		</section>
	);
};

export default GamesVertServices;
