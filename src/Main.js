import React from "react";
import IntroCarousel from "./components/mainComponents/IntroCarousel";
import HomeScreenServices from "./components/mainComponents/serviceCards/HomeScreenServices";
import VerticalServicesCardCard from "./components/mainComponents/serviceCards/VerticalServicesCardCard";
import HorizontalCarouselCardCard from "./components/mainComponents/serviceCards/HorizontalCarouselCardCard";

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
			<VerticalServicesCardCard
				data={props.inflatablesData}
				// the value of data should change based on which services page gets clicked
			/>
			<HorizontalCarouselCardCard data={props.inflatablesData} />
		</React.Fragment>
	);
};

export default Main;
