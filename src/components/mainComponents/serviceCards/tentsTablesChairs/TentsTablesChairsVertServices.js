import React, { useState } from "react";
import VertServicesCard from "../VertServicesCard";
import tentsTablesChairsData from "../../../../data/services/tentsTablesChairsData";

const TentsTablesChairsVertServices = (props) => {
	return (
		<section>
			<div className="row VerticalServiceCard">
				{/* className="row  HorizontalServiceCard"*/}
				{tentsTablesChairsData.map((service) => (
					<VertServicesCard key={service.id} service={service} handleClick={props.handleClick} />
				))}
			</div>
		</section>
	);
};

export default TentsTablesChairsVertServices;
