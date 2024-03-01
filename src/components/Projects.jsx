import React from 'react';

function Projects(props) {
	return (
		<div className="projects">
			<div>
				<img
					className="projects__img"
					src={`../../public/img/screenshots/${props.src}`}
					alt={props.name}
				/>
				<h3 className="projects__name">{props.name}</h3>
				<div className="projects__buttons">
					<a href={props.href}>
						<button className="projects__button">Open Page</button>
					</a>

					<a href={props.githubrepo}>
						<button className="projects__button">
							Github Repo
						</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
