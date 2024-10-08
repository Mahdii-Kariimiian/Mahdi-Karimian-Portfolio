import { useState } from "react";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";
import Main from "./components/Main.jsx";
import myProjects from "./components/my-projects.jsx";
import Contact from "./components/Contact.jsx";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./app.css";

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const projectPerPage = 6;
    const lastIndex = currentPage * projectPerPage;
    const firstIndex = lastIndex - projectPerPage;
    const projects = myProjects.slice(firstIndex, lastIndex);
    const nPages = Math.ceil(myProjects.length / projectPerPage);
    const numbers = [...Array(nPages + 1).keys()].slice(1);

    const nextPage = (e) => {
        e.preventDefault();
        if (currentPage < nPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const changeCurrentPage = (page) => {
        setCurrentPage(page);
    };

    const renderProjects = projects.map((project) => {
        return (
            <Projects
                key={project.id}
                name={project.name}
                src={project.src}
                href={project.href}
                githubRepo={project.githubRepo}
                techs={project.tech}
            />
        );
    });

    return (
        <div
            id="about"
            className="scroll-smooth p-10 md:px-15 py-[60px] text-white  
            "
        >
            <div class="background -z-10">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <section className="lg:flex gap-10 ">
                <div className=" lg:fixed">
                    <Header />
                </div>
                <div className="flex flex-col gap-5 font-raleway lg:ml-[50%] xl:ml-[40%] text-xl leading-10 mt-16 lg:mt-[22px] max-w--600PX]">
                    <Main />
                </div>
            </section>

            <section className="mt-[7rem] lg:mt-[10px] mb-[3rem] lg:ml-[50%] xl:ml-[35%]">
                <MdKeyboardArrowDown className="animate-pulse max-lg:hidden text-5xl mt-12 m-auto" />

                <h2
                    id="projects"
                    className=" mt-[7rem]  mb-[2rem]  text-4xl font-cabin"
                >
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-10 text-2xl  ">
                    {renderProjects}
                </div>
                <section className="mt-16">
                    <div className=" flex gap-5 list-none justify-center mt-8">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                prevPage(e);
                            }}
                            className="hover:outline-amber-600 transition outline rounded-md px-2 py-1 text-xl"
                            disabled={currentPage === 1}
                        >
                            <a href="#projects">Prev</a>
                        </button>
                        {numbers.map((number, index) => {
                            return (
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        changeCurrentPage(index + 1);
                                    }}
                                    className={`hover:text-amber-600 transition ${
                                        number === currentPage
                                            ? "text-amber-600"
                                            : null
                                    } `}
                                    key={index}
                                >
                                    <a
                                        className="text-xl font-bold"
                                        href="#projects"
                                    >
                                        {number}
                                    </a>{" "}
                                </button>
                            );
                        })}
                        <button
                            onClick={(e) => {
                                if (currentPage < nPages) {
                                    e.preventDefault();
                                    nextPage(e);
                                }
                            }}
                            className="hover:outline-amber-600 transition outline rounded-md px-2 py-1 text-xl"
                            disabled={currentPage === nPages}
                        >
                            <a href="#projects">next</a>
                        </button>
                    </div>
                </section>
            </section>
            <section className="lg:ml-[50%] xl:ml-[40%]">
                <Contact />
            </section>
        </div>
    );
}

export default App;
