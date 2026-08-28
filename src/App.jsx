import { useState } from 'react'
import './App.css'
import ProjectCard from './components/ProjectCard'
import ProjectForm from './components/ProjectForm'

const initialProjects = [
  { id: 'sample-1', name: 'Portfolio refresh', description: 'Update case studies and simplify the contact flow.', status: 'In Progress', priority: 'High', createdAt: '2026-08-18T09:00:00.000Z', updatedAt: '2026-08-25T04:30:00.000Z' },
  { id: 'sample-2', name: 'Reading tracker', description: 'A small app for tracking books and reading notes.', status: 'Planned', priority: 'Medium', createdAt: '2026-08-20T02:15:00.000Z', updatedAt: '2026-08-20T02:15:00.000Z' },
  { id: 'sample-3', name: 'Release checklist', description: 'Document and automate the final release checks.', status: 'Complete', priority: 'Low', createdAt: '2026-08-12T06:45:00.000Z', updatedAt: '2026-08-22T11:10:00.000Z' },
]

function createProject(values) {
  const timestamp = new Date().toISOString()
  return { id: crypto.randomUUID(), ...values, createdAt: timestamp, updatedAt: timestamp }
}

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [formMode, setFormMode] = useState(null)
  const [editingProject, setEditingProject] = useState(null)

  function openCreateForm() {
    setEditingProject(null)
    setFormMode('create')
  }

  function openEditForm(project) {
    setEditingProject(project)
    setFormMode('edit')
  }

  function closeForm() {
    setFormMode(null)
    setEditingProject(null)
  }

  function handleSubmit(values) {
    if (formMode === 'edit') {
      setProjects((currentProjects) => currentProjects.map((project) =>
        project.id === editingProject.id
          ? { ...project, ...values, updatedAt: new Date().toISOString() }
          : project,
      ))
    } else {
      setProjects((currentProjects) => [createProject(values), ...currentProjects])
    }
    closeForm()
  }

  function handleDelete(project) {
    if (!window.confirm(`Delete "${project.name}"? This cannot be undone.`)) return
    setProjects((currentProjects) => currentProjects.filter((item) => item.id !== project.id))
  }

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Project dashboard</p>
          <h1>Keep good work moving.</h1>
          <p className="intro">Track priorities, progress, and the next projects on your list.</p>
        </div>
        <button className="primary-button" type="button" onClick={openCreateForm}>
          <span aria-hidden="true">+</span> New project
        </button>
      </header>

      <section className="projects" aria-labelledby="projects-heading">
        <div className="section-heading">
          <h2 id="projects-heading">Projects</h2>
          <span className="project-count">{projects.length} {projects.length === 1 ? 'project' : 'projects'}</span>
        </div>
        {projects.length ? (
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onEdit={openEditForm} onDelete={handleDelete} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No projects yet</h3>
            <p>Create your first project to start tracking it.</p>
            <button className="primary-button" type="button" onClick={openCreateForm}>Create a project</button>
          </div>
        )}
      </section>

      {formMode && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={closeForm}>
          <section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-form-title" onMouseDown={(event) => event.stopPropagation()}>
            <ProjectForm key={editingProject?.id ?? 'new'} project={editingProject} onSubmit={handleSubmit} onCancel={closeForm} />
          </section>
        </div>
      )}
    </main>
  )
}

export default App
