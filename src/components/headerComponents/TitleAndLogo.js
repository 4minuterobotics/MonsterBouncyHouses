import React from "react";

const TitleAndLogo = () => {
	return (
		<React.Fragment>
			{/* <!-- Title --> */}
			<img
				className="title-image"
				src="../images/logos/Monster_Logo_White_Background.jpg"
				alt="logo"
			/>
			<h1 className="header-brand"> Monster Bouncy Houses</h1>
			<br />
			<h2 className="header-subtitle">
				Southern Florida's Finest Party Rental Company
			</h2>
			<br />
		</React.Fragment>
	);
};

export default TitleAndLogo;
