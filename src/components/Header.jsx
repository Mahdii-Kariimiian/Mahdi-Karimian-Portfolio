import React from 'react';
import NavItems from './NavItems';
import SocialMedia from './SocialMedia';
import './style.css';

function Header() {
	return (
		<header id="about" className="Header">
			<div className="Header__specs">
				<div>
					<h1 className="Header__specs__title">Mahdi Karimian</h1>
					<h3 className="Header__specs__job-title">
						Front-End developer to be!
					</h3>
				</div>
				<NavItems />
				<SocialMedia />
			</div>
		</header>
	);
}

export default Header;
