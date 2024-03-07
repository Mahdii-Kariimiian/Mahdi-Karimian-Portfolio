import React from 'react';
import './style.css';

function Contact() {
	return (
		<div className="contact">
			<h3 id="contact" className="contact__title">
				Contact me
			</h3>
			<ul className="contacts">
				<li className="contact-icon">
					<a title="E-mail" href="mailto:mahdii.kariimiian@gmail.com">
						<i className="fa-solid fa-envelope"></i>
					</a>
				</li>

				<li className="contact-icon">
					<a
						title="Telegram"
						target="_blank"
						href="https://t.me/mahdiikariimiian/"
					>
						<i className="fa-brands fa-telegram"></i>
					</a>
				</li>

				<li className="contact-icon">
					<a
						title="Whatsapp"
						target="_blank"
						href="https://wa.me/qr/KCJK5QOXSGEHC1"
					>
						<i className="fa-brands fa-whatsapp"></i>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Contact;
