import React from "react";

const IntroCarousel = () => {
	return (
		<React.Fragment>
			<section id="introCarousel">
				<div className="container-fluid blue-section">
					<div
						id="carouselExampleSlidesOnly"
						className="carousel slide"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner center">
							<div className="carousel-item active" data-bs-interval="1000">
								<img
									src="../images/introSlideshow/bumper suits 5.jpg"
									// className="d-block w-100 "
									className="d-block"
									alt="..."
								/>
							</div>
							<div className="carousel-item" data-bs-interval="1000">
								<img
									src="../images/introSlideshow/4424FDF1-9090-4D6B-A7DA-DD69A6D6BB13.JPG"
									className="d-block w-100"
									alt="..."
								/>
							</div>
							<div className="carousel-item" data-bs-interval="1000">
								<img src="..." className="d-block w-100" alt="..." />
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default IntroCarousel;
