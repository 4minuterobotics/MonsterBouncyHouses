import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

//Service data
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

//Vertical service card components
import InflatablesVertServices from "./components/mainComponents/serviceCards/inflatables/InflatablesVertServices";
import ToddlerFunVertServices from "./components/mainComponents/serviceCards/toddlerFun/ToddlerFunVertServices";
import GamesVertServices from "./components/mainComponents/serviceCards/games/GamesVertServices";
import TentsTablesChairsVertServices from "./components/mainComponents/serviceCards/tentsTablesChairs/TentsTablesChairsVertServices";
import ConcessionVertServices from "./components/mainComponents/serviceCards/concession/ConcessionVertServices";

const App = () => {
	const [cart, setCart] = useState([]);

	const handleClick = (service) => {
		if (cart.indexOf(service) !== -1) {
			return;
		}
		setCart([...cart, service]);
	};

	const handleChange = (service, d) => {
		const ind = cart.indexOf(service);
		const arr = cart;
		arr[ind].amount += d;

		if (arr[ind].amount === 0) {
			arr[ind].amount = 1;
		}
		setCart([...arr]);
	};

	return (
		<div>
			<CartBar size={cart.length} />

			<React.Fragment>
				<Routes>
					<Route
						path="/"
						element={
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
								<Footer />
							</React.Fragment>
						}
					/>
					<Route
						path="inflatables"
						element={
							<React.Fragment>
								<Header /> <InflatablesVertServices handleClick={handleClick} />
							</React.Fragment>
						}
					/>
					<Route
						path="toddlerFun"
						element={
							<React.Fragment>
								<Header /> <ToddlerFunVertServices handleClick={handleClick} />
							</React.Fragment>
						}
					/>
					<Route
						path="games"
						element={
							<React.Fragment>
								<Header /> <GamesVertServices handleClick={handleClick} />
							</React.Fragment>
						}
					/>
					<Route
						path="tentsTablesChairs"
						element={
							<React.Fragment>
								<Header /> <TentsTablesChairsVertServices handleClick={handleClick} />
							</React.Fragment>
						}
					/>
					<Route
						path="concession"
						element={
							<React.Fragment>
								<Header /> <ConcessionVertServices handleClick={handleClick} />
							</React.Fragment>
						}
					/>
					<Route
						path="cart"
						element={
							<React.Fragment>
								<Cart cart={cart} setCart={setCart} handleChange={handleChange} />
							</React.Fragment>
						}
					/>
				</Routes>
			</React.Fragment>
		</div>
	);
};

export default App;
