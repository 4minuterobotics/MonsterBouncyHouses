import React, { useState } from "react";
import IntroCarousel from "./components/mainComponents/IntroCarousel";
import HomeScreenServices from "./components/mainComponents/serviceCards/HomeScreenServices";
import Cart from "./components/headerComponents/Cart";

import VertServices from "./components/mainComponents/serviceCards/VertServices";

const Main = (props) => {
	return (
		<React.Fragment>
			<IntroCarousel />
			<HomeScreenServices
				inflatablesData={props.inflatablesData}
				toddlerFunData={props.toddlerFunData}
				gamesData={props.gamesData}
				tentsTablesChairsData={props.tentsTablesChairsData}
				concessionData={props.concessionData}
			/>

			<VertServices data={props.inflatablesData} handleClick={props.handleClick} />
		</React.Fragment>
	);
};

export default Main;
