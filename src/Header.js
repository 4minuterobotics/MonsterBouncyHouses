import React from "react";
import TitleAndLogo from "./components/headerComponents/TitleAndLogo";
import Language from "./components/headerComponents/Language";
import Social from "./components/headerComponents/Social";
import Navbar from "./components/headerComponents/Navbar";

const Header = () => {
	return (
		<React.Fragment>
			<section className="white-section" id="title">
				<div className="container-fluid">
					<TitleAndLogo />
					<Language />
					<Social />
					<Navbar />
				</div>
			</section>
		</React.Fragment>
	);
};

export default Header;
