import React, { useState } from "react";

import inflatablesData from "./data/services/inflatablesData";
import toddlerFunData from "./data/services/toddlerFunData";
import gamesData from "./data/services/gamesData";
import tentsTablesChairsData from "./data/services/tentsTablesChairsData";
import concessionData from "./data/services/concessionData";

import CartBar from "./components/headerComponents/CartBar";
import Cart from "./components/headerComponents/Cart";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import OldTemplateSite from "./OldTemplateSite";

const App = () => {
	const [showServices, setShowServices] = useState(true);
	const [cart, setCart] = useState([]);

	const handleClick = (service) => {
		if (cart.indexOf(service) !== -1) return;
		setCart([...cart, service]);
	};

	const handleChange = (service, d) => {
		const ind = cart.indexOf(service);
		const arr = cart;
		arr[ind].amount += d;

		if (arr[ind].amount === 0) arr[ind].amount = 1;
		setCart([...arr]);
	};

	return (
		<div>
			<CartBar setShowServices={setShowServices} size={cart.length} />
			{showServices ? (
				<React.Fragment>
					<Header />
					<Main
						inflatablesData={inflatablesData}
						toddlerFunData={toddlerFunData}
						gamesData={gamesData}
						tentsTablesChairsData={tentsTablesChairsData}
						concessionData={concessionData}
						handleClick={handleClick}
					/>
					<OldTemplateSite data={inflatablesData} />
					<Footer />
				</React.Fragment>
			) : (
				<Cart cart={cart} setCart={setCart} handleChange={handleChange} />
			)}
		</div>
	);
};

export default App;
