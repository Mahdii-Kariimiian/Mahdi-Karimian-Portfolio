function Projects({ href, name, src, githubrepo, techs }) {
    const usedTechnologies = techs
        ? techs.map((tech, index) => (
              <div
                  key={index}
                  className=" bg-amber-200 text-sm md:text-md lg:text-md lg:opacity-70 text-sky-950 font-cabin py-1 px-2 rounded-md"
              >
                  {tech}
              </div>
          ))
        : null;
    return (
        <div className="max-w-[600px] relative font-raleway transition ring-4 ring-white flex flex-col items-center text-center min-w-[250px] outline-2 outline-transparent rounded-md mx-5">
            <div>
                <img
                    className="max-w-full rounded-md p-2"
                    src={`../../img/screenshots/${src}`}
                    alt={name}
                />
                <div className="xl:absolute max-md:absolute max-sm:static lg:font-bold flex gap-2 flex-wrap right-6 top-6">
                    {usedTechnologies}
                </div>
                <div className="flex sm:flex-row gap-8 md:justify-around items-center flex-wrap">
                    <a className="p-3 flex flex-col gap-6 mb-3" href={href}>
                        <h3 className="hover:outline-amber-700 transition text-lg whitespace-nowrap outline outline-white p-2 rounded-md max-w-[max-content]">
                            {name}
                        </h3>
                    </a>
                    <div className="cursor-pointer">
                        <a href={githubrepo}>
                            <button className="hover:outline-amber-700 transition text-lg whitespace-nowrap outline outline-white p-2 rounded-md">
                                Github Repo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
