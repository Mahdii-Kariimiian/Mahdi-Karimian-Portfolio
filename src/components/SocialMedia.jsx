import React from 'react';
import './style.css';

function SocialMedia() {
	return (
		<ul className="social-media">
			<li className="social-media__icon" aria-label="github">
				<a
					title="Github"
					target="_blank"
					href="https://github.com/Mahdii-Kariimiian"
				>
					<i className="fa-brands fa-github"></i>
				</a>
			</li>

			<li aria-label="linkedin">
				<a
					title="Linkedin"
					className="social-media__icon"
					target="_blank"
					href="https://www.linkedin.com/in/mahdi-karimian-116643273/"
				>
					<i className="fa-brands fa-linkedin social-media__icon"></i>
				</a>
			</li>

			<li>
				<a
					title="My CV"
					className="social-media__icon"
					target="_blank"
					href="https://drive.google.com/file/d/1i4lRuDld89dajyQoCZxNikSaGM5wY7RZ/view?usp=drive_link"
				>
					<i className="fa-solid fa-file"></i>
				</a>
			</li>
		</ul>
	);
}

export default SocialMedia;
