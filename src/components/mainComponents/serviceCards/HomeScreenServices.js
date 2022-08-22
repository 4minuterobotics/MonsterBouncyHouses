import React from "react";
import ServicesCarouselCard from "./ServicesCarouselCard";
import ServicesCarouselCardCSS from "./ServicesCarouselCard.module.css";

const HomeScreenServices = (props) => {
	return (
		<React.Fragment>
			<section>
				<div id="homeScreenServices">
					<ServicesCarouselCard
						serviceItems={props.inflatablesData}
						sectionColorClass="red-section container-fluid carouselDiv"
						sectionId="homeScreenInflatablesCarousel"
						carouselType="inflatablesCarousel"
						items="inflatablesSlideShowItems"
						firstItemImageUrl={props.inflatablesData[0].imageUrl}
						firstItemAlt={props.inflatablesData[0].alt}
						firstItemTitle={props.inflatablesData[0].title}
						firstItemSubtitle={props.inflatablesData[0].subtitle}
					/>

					<ServicesCarouselCard
						serviceItems={props.toddlerFunData}
						sectionColorClass="blue-section container-fluid carouselDiv"
						sectionId="homeScreenToddlerFunCarousel"
						carouselType="toddlerFunCarousel"
						items="toddlerFunItems"
						firstItemImageUrl={props.toddlerFunData[0].imageUrl}
						firstItemAlt={props.toddlerFunData[0].alt}
						firstItemTitle={props.toddlerFunData[0].title}
						firstItemSubtitle={props.toddlerFunData[0].subtitle}
					/>

					<ServicesCarouselCard
						serviceItems={props.gamesData}
						sectionColorClass="white-section container-fluid carouselDiv"
						sectionId="homeScreenGamesCarousel"
						carouselType="gamesCarousel"
						items="gamesItems"
						firstItemImageUrl={props.toddlerFunData[0].imageUrl}
						firstItemAlt={props.gamesData[0].alt}
						firstItemTitle={props.gamesData[0].title}
						firstItemSubtitle={props.gamesData[0].subtitle}
					/>

					<ServicesCarouselCard
						serviceItems={props.tentsTablesChairsData}
						sectionColorClass="red-section container-fluid carouselDiv"
						sectionId="homeScreenTentsTablesChairsCarousel"
						carouselType="tentsTablesChairsCarousel"
						items="tentsTablesChairsItems"
						firstItemImageUrl={props.toddlerFunData[0].imageUrl}
						firstItemAlt={props.tentsTablesChairsData[0].alt}
						firstItemTitle={props.tentsTablesChairsData[0].title}
						firstItemSubtitle={props.tentsTablesChairsData[0].subtitle}
					/>

					<ServicesCarouselCard
						serviceItems={props.concessionData}
						sectionColorClass="blue-section container-fluid carouselDiv"
						sectionId="homeScreenConcessionCarousel"
						carouselType="concessionCarousel"
						items="concessionItems"
						firstItemImageUrl={props.toddlerFunData[0].imageUrl}
						firstItemAlt={props.concessionData[0].alt}
						firstItemTitle={props.concessionData[0].title}
						firstItemSubtitle={props.concessionData[0].subtitle}
					/>
				</div>
			</section>
		</React.Fragment>
	);
};

export default HomeScreenServices;
