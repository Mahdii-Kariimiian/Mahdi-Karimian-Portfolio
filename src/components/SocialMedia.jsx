function SocialMedia() {
    return (
        <ul className="flex gap-10 text-5xl">
            <li className="social-" aria-label="github">
                <a
                    title="Github"
                    target="_blank"
                    href="https://github.com/Mahdii-Kariimiian"
                >
                    <i className="fa-brands fa-github hover:text-amber-600 transition-b"></i>
                </a>
            </li>

            <li aria-label="linkedin">
                <a
                    title="Linkedin"
                    target="_blank"
                    href="https://www.linkedin.com/in/mahdi-karimian-116643273/"
                >
                    <i className="hover:text-amber-600 transition fa-brands fa-linkedin"></i>
                </a>
            </li>

            <li>
                <a
                    title="My Resume"
                    target="_blank"
                    href="https://drive.google.com/file/d/18NQdaXavKppjgXtr9shCPE02iZPeRPn9/view?usp=drive_link"
                >
                    <i className="hover:text-amber-600 transition fa-solid fa-file"></i>
                </a>
            </li>
        </ul>
    );
}

export default SocialMedia;
