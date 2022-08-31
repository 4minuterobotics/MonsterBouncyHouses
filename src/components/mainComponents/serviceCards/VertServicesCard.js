//This page can be duplicated to make a horizontal card page using the commented out code below

import React from "react";

const VertServicesCard = (props) => {
	//const { index, id, title, subtitle, alt, price, imageUrl } = props.service;

	return (
		<div className="container-fluid">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={props.service.imageUrl} className="img-fluid rounded-start" alt={props.service.alt} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{props.service.title}</h5>
							<p className="card-text">{props.service.subtitle}</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item price-text">{`$${props.service.price}`}</li>
							<li className="list-group-item">{`${props.service.duration} hr`}</li>
							<li className="list-group-item">A third item</li>
						</ul>
						<div className="card-body">
							<a href="#" className="card-link">
								<button
									onClick={() => props.handleClick(props.service)}
									type="button"
									className="btn btn-primary btn-sm"
								>
									Add To Cart
								</button>
							</a>
							<a href="#" className="card-link">
								Another link
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		// 	<div className="pricing-column col-lg-3 col-md-6">
		// 		<div className="card">
		// 			<img src={props.service.imageUrl} className="card-img-top" alt={props.service.alt} />
		// 			<div className="card-body">
		// 				<h5 className="card-title">{props.service.title}</h5>
		// 				<p className="card-text">{props.service.subtitle}</p>
		// 			</div>
		// 			<ul className="list-group list-group-flush">
		// 				<li className="list-group-item price-text">{`$${props.service.price}`}</li>
		// 				<li className="list-group-item">{`${props.service.duration} hr`}</li>
		// 				<li className="list-group-item">A third item</li>
		// 			</ul>
		// 			<div className="card-body">
		// 				<a href="#" className="card-link">
		// 					Card link
		// 				</a>
		// 				<a href="#" className="card-link">
		// 					Another link
		// 				</a>
		// 			</div>
		// 		</div>
		// 	</div>
	);
};

export default VertServicesCard;

// 		index, id, title, subtitle, alt, price, imageUrl
