import React from "react";
const OldTemplateSite = (props) => {
	return (
		<div>
			<h1>Not inside container fluid</h1>
			<div className="container-sm green-section">100% wide until small breakpoint</div>
			<div className="container-md green-section">100% wide until medium breakpoint</div>
			<div className="container-lg green-section">100% wide until large breakpoint</div>
			<div className="container-xl green-section">100% wide until extra large breakpoint</div>
			<div className="container-xxl green-section">100% wide until extra extra large breakpoint</div>

			{/*  */}

			{/*  */}
		</div>
	);
};

export default OldTemplateSite;
