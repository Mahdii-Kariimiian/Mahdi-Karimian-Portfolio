function NavItems() {
    return (
        <ul className="font-cabin relative flex flex-col text-xl gap-8">
            <li className="flex items-baseline gap-2">
                <div className=" bg-amber-600 w-8 h-[5px] rounded-sm "></div>{" "}
                <a className="font-bold hover:text-amber-600 transition tracking-widest lg:text-xl" href="#about">
                    About me
                </a>
            </li>

            <li className="flex items-baseline gap-2">
                <div className="bg-amber-600 w-8 h-[5px] rounded-sm"></div>
                <a className="font-bold hover:text-amber-600 transition lg:text-xl tracking-widest" href="#projects">
                    My projects
                </a>
            </li>

            <li className="flex items-baseline gap-2">
                <div className="bg-amber-600 w-8 h-[5px] rounded-sm "></div>
                <a className="font-bold hover:text-amber-600 transition lg:text-xl tracking-widest" href="#contact">
                    Contact me
                </a>
            </li>
        </ul>
    );
}

export default NavItems;
