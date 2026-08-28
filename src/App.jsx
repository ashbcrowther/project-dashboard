import './App.css'
import ProjectCard from './components/ProjectCard.jsx'
import { projects } from './data/projects.js'

function App() {
  return (
    <main className="dashboard">
      <header className="dashboard__header">
        <div>
          <p className="dashboard__eyebrow">Workspace</p>
          <h1>Project Dashboard</h1>
          <p className="dashboard__subtitle">
            Keep the work that matters in view.
          </p>
        </div>

        <div className="project-count" aria-label={`${projects.length} projects`}>
          <strong>{projects.length}</strong>
          <span>Projects</span>
        </div>
      </header>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading">All projects</h2>
        <ul className="project-grid">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
