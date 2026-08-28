const statusClasses = { Planned: 'planned', 'In Progress': 'in-progress', Blocked: 'blocked', Complete: 'complete' }

function ProjectCard({ project, onEdit, onDelete }) {
  return (
    <article className="project-card">
      <div className="card-topline">
        <span className={`status status-${statusClasses[project.status]}`}>{project.status}</span>
        <span className={`priority priority-${project.priority.toLowerCase()}`}>{project.priority} priority</span>
      </div>
      <div className="card-content">
        <h3>{project.name}</h3>
        <p>{project.description || 'No description provided.'}</p>
      </div>
      <div className="card-footer">
        <small>Updated {new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(new Date(project.updatedAt))}</small>
        <div className="card-actions">
          <button type="button" onClick={() => onEdit(project)}>Edit</button>
          <button className="delete-button" type="button" onClick={() => onDelete(project)}>Delete</button>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
