import React, { useState, useEffect } from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
	const [price, setPrice] = useState(0);

	const handleRemove = (id) => {
		const arr = props.cart.filter((service) => service.id !== id);
		props.setCart(arr);
		handlePrice();
	};

	const handlePrice = () => {
		let ans = 0;
		props.cart.map((service) => (ans += service.amount * service.price));
		setPrice(ans);
	};

	useEffect(() => {
		handlePrice();
	});

	return (
		<article>
			{props.cart.map((service) => (
				<div className={classes.cart_box} key={service.id}>
					<div className={classes.cart_img}>
						<img src={service.imageUrl} alt={service.alt} />
						<p>{service.title}</p>
					</div>
					<div>
						<button onClick={() => props.handleChange(service, 1)}>+</button>
						<button>{service.amount}</button>
						<button onClick={() => props.handleChange(service, -1)}>-</button>
					</div>
					<div>
						<span>{service.price}</span>
						<button onClick={() => handleRemove(service.id)}>Remove</button>
					</div>
				</div>
			))}
			<div className={classes.total}>
				<span>Total Price of Cart</span>
				<span>{`$${price}`}</span>
			</div>
		</article>
	);
};
//cart, setCart, handleChange
export default Cart;
