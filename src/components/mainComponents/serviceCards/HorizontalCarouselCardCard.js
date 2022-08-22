import React from "react";

const HorizontalCarouselCardCard = (props) => {
	return (
		<div id="HorizontalServiceCard" className="row ">
			{props.data.map(createCard)}{" "}
		</div>
	);
};

function createCard(data) {
	return (
		<div className="container-fluid">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={data.imageUrl} className="img-fluid rounded-start" alt={data.alt} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{data.title}</h5>
							<p className="card-text">{data.subtitle}</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item price-text">{`$${data.price}`}</li>
							<li className="list-group-item">{`${data.duration} hr`}</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<a href="#" className="card-link">
								Card link
							</a>
							<a href="#" className="card-link">
								Another link
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HorizontalCarouselCardCard;
