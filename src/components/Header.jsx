import NavItems from "./NavItems";
import SocialMedia from "./SocialMedia";

function Header() {
    return (
        <header className="relative">
            <div className="flex flex-col justify-between gap-[70px]">
                <div>
                    <h1 className="font-raleway text-7xl md:text-8xl tracking-wide pb-3 cursor-default border-b-4">
                        <span className="text-amber-600 font-bold">M</span>ahdi{" "}
                        <br />{" "}
                        <span className="text-amber-600 font-bold">K</span>
                        arimian
                    </h1>
                    <h3 className="font-cabin text-3xl tracking-wider cursor-default mt-3">
                        Front-End developer
                    </h3>
                </div>
                <NavItems />
                <SocialMedia />
            </div>
        </header>
    );
} 

export default Header;
