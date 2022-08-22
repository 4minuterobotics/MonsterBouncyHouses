import React from "react";

const VerticalServicesCardCard = (props) => {
	return (
		<div id="VerticalServiceCard" className="row ">
			{props.data.map(createCard)}{" "}
		</div>
	);
};

function createCard(data) {
	return (
		<div className="pricing-column col-lg-3 col-md-6">
			<div className="card">
				<img src={data.imageUrl} className="card-img-top" alt={data.alt} />
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
	);
}

export default VerticalServicesCardCard;
