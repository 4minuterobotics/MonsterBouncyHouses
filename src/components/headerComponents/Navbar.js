import React from "react";

const Navbar = () => {
	return (
		<React.Fragment>
			{/* Nav Bar  */}

			<nav className="navbar navbar-expand-lg navbar-light">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item ">
							<a className="nav-link purple-font" href="#title">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link " href="#bookOnline">
								Book Online
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#inflatables">
								Inflatables
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#toddlerFun">
								Toddler Fun
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#games">
								Games
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#tablesChairs&Tents">
								Tables Chairs & Tents
							</a>
						</li>

						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								More
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item" href="#movieNight">
										Movie Night
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#concession">
										Concession
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#decorations">
										Decorations
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#graduationPackages">
										Graduation Packages
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#parks">
										Parks
									</a>
								</li>
							</ul>
						</li>

						{/*  
      <li className="nav-item">
        <a className="nav-link" href="#features"> Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#testimonials"> Testimonials</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#pricing"> Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#cta"> Book Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#footer"> Contact</a>
      </li>
      */}
					</ul>
				</div>
			</nav>

			<div>
				<h1>using local navbar class</h1>
				<div className="container-sm green-section">100% wide until small breakpoint</div>
				<div className="container-md green-section">100% wide until medium breakpoint</div>
				<div className="container-lg green-section">100% wide until large breakpoint</div>
				<div className="container-xl green-section">100% wide until extra large breakpoint</div>
				<div className="container-xxl green-section">
					100% wide until extra extra large breakpoint
				</div>
				<br />
			</div>
		</React.Fragment>
	);
};

export default Navbar;
