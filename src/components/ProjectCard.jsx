const classNames = {
  Blocked: 'blocked',
  Complete: 'complete',
  High: 'high',
  'In Progress': 'in-progress',
  Low: 'low',
  Medium: 'medium',
  Planned: 'planned',
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__badges">
        <span className={`badge badge--${classNames[project.status]}`}>
          {project.status}
        </span>
        <span className={`badge badge--${classNames[project.priority]}`}>
          {project.priority} priority
        </span>
      </div>

      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </article>
  )
}

export default ProjectCard
