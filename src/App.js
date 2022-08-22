import React from "react";
import "./App.css";

import inflatablesData from "./data/services/inflatablesData";
import toddlerFunData from "./data/services/toddlerFunData";
import gamesData from "./data/services/gamesData";
import tentsTablesChairsData from "./data/services/tentsTablesChairsData";
import concessionData from "./data/services/concessionData";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import OldTemplateSite from "./OldTemplateSite";

const App = () => {
	return (
		<div>
			<Header />
			<Main
				inflatablesData={inflatablesData}
				toddlerFunData={toddlerFunData}
				gamesData={gamesData}
				tentsTablesChairsData={tentsTablesChairsData}
				concessionData={concessionData}
			/>
			<OldTemplateSite data={inflatablesData} />
			<Footer />
		</div>
	);
};

export default App;
