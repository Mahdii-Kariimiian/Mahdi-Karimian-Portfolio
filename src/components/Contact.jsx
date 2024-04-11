function Contact() {
    return (
        <div className="text-4xl flex flex-col gap-8 font-cabin">
            <h3 id="contact" className="mt-[5rem]">
                Contact me
            </h3>
            <ul className="flex gap-11 text-3xl">
                <li className="text-5xl">
                    <a title="E-mail" href="mailto:mahdii.kariimiian@gmail.com">
                        <i className="hover:text-amber-700 transition fa-solid fa-envelope"></i>
                    </a>
                </li>

                <li className="text-5xl hover">
                    <a
                        title="Telegram"
                        target="_blank"
                        href="https://t.me/mahdiikariimiian/"
                    >
                        <i className="hover:text-amber-700 transition fa-brands fa-telegram"></i>
                    </a>
                </li>

                <li className="text-5xl">
                    <a
                        title="Whatsapp"
                        target="_blank"
                        href="https://wa.me/qr/KCJK5QOXSGEHC1"
                    >
                        <i className="hover:text-amber-700 transition fa-brands fa-whatsapp"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;
