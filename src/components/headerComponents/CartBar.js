import React from "react";
import classes from "./CartBar.module.css";

const CartBar = (props) => {
	return (
		<nav className={classes.cartBarNav}>
			<div className={classes.nav_box}>
				<span className={classes.my_shop} onClick={() => props.setShowServices(true)}>
					My Shopping
				</span>
				<div className={classes.cart} onClick={() => props.setShowServices(false)}>
					<span>
						<i class="fa-solid fa-cart-shopping"></i>
					</span>
					<span>{props.size}</span>
				</div>
			</div>
		</nav>
	);
};

export default CartBar;
