import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from "./CartBar.module.css";

const CartBar = (props) => {
	return (
		<nav className={classes.cartBarNav}>
			<div className={classes.nav_box}>
				<Link to="/">
					<span className={classes.my_shop}>My Shopping</span>
				</Link>
				<Link to="/cart">
					<div className={classes.cart}>
						<span>
							<i class="fa-solid fa-cart-shopping"></i>
						</span>
						<span>{props.size}</span>
					</div>
				</Link>
			</div>
		</nav>
	);
};

export default CartBar;
