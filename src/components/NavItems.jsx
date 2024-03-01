import React from 'react';
import './style.css';

function NavItems() {
	return (
		<ul className="navigation">
			<div className="line"></div>
			<li className="navigation__menu">
				<a href="#about">About</a>
			</li>
			<div className="line"></div>
			<li className="navigation__menu">
				<a href="#projects">Projects</a>
			</li>
			<div className="line"></div>
			<li className="navigation__menu">
				<a href="#contact">Contact me</a>
			</li>
		</ul>
	);
}

export default NavItems;
