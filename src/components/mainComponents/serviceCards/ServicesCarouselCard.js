import React from "react";
import ServicesCarouselCardCSS from "./ServicesCarouselCard.module.css";

const ServicesCarouselCard = (props) => {
	return (
		<React.Fragment>
			<section id={props.sectionId}>
				<div className={props.sectionColorClass}>
					<div
						id={props.carouselType}
						className="carousel slide homeScreenServicesCarousel"
						data-bs-ride="false"
					>
						<div className="carousel-indicators serviceCarouselIndicators">
							<button
								type="button"
								data-bs-target={`#${props.carouselType}`}
								data-bs-slide-to="0"
								className="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							{props.serviceItems
								.filter((service) => service.id > 1)
								.map((filteredService) => (
									<button
										type="button"
										data-bs-target={`#${props.carouselType}`}
										data-bs-slide-to={filteredService.id - 1}
										aria-label={`Slide ${filteredService.id}`}
									></button>
								))}
						</div>

						<div id={props.items} className="carousel-inner container-fluid carousel-items">
							<div className="carousel-item active">
								<img
									src={props.firstItemImageUrl}
									// className="d-block w-100"
									className="d-block"
									alt={props.firstItemAlt}
								/>
								<div className="carousel-caption d-none d-md-block">
									<h5>{props.firstItemTitle}</h5>
									<p>{props.firstItemSubtitle}</p>
								</div>
							</div>
							{props.serviceItems
								.filter((service) => service.id > 1)
								.map((filteredService) => (
									<div className="carousel-item">
										<img
											src={filteredService.imageUrl}
											// className="d-block w-100"
											className="d-block"
											alt={filteredService.alt}
										/>
										<div className="carousel-caption d-none d-md-block">
											<h5>{filteredService.title}</h5>
											<p>{filteredService.subtitle}</p>
										</div>
									</div>
								))}
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target={`#${props.carouselType}`}
							data-bs-slide="prev"
						>
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target={`#${props.carouselType}`}
							data-bs-slide="next"
						>
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default ServicesCarouselCard;
