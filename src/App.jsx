import './App.css';
import './components/style.css';
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import Main from './components/Main.jsx';
import myProjects from './components/my-projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
	const renderProjects = myProjects.map((project) => {
		return (
			<Projects
				key={project.id}
				name={project.name}
				src={project.src}
				href={project.href}
				githubrepo={project.githubrepo}
			/>
		);
	});
	return (
		<div className="app">
			<Header />

			<section className="hero">
				<Main />
				<h2 id="projects" className="projects-title">
					My Mini Projects
				</h2>
				<div className="projects-section">{renderProjects}</div>
				<Contact />
			</section>
		</div>
	);
}

export default App;
