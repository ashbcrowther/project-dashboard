import { useState } from 'react'

const statuses = ['Planned', 'In Progress', 'Blocked', 'Complete']
const priorities = ['Low', 'Medium', 'High']

function ProjectForm({ project, onSubmit, onCancel }) {
  const [values, setValues] = useState({ name: project?.name ?? '', description: project?.description ?? '', status: project?.status ?? 'Planned', priority: project?.priority ?? 'Medium' })
  const [nameError, setNameError] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setValues((currentValues) => ({ ...currentValues, [name]: value }))
    if (name === 'name' && value.trim()) setNameError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!values.name.trim()) {
      setNameError('Enter a project name.')
      return
    }
    onSubmit({ ...values, name: values.name.trim(), description: values.description.trim() })
  }

  return (
    <form className="project-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <div>
          <p className="eyebrow">{project ? 'Edit project' : 'New project'}</p>
          <h2 id="project-form-title">{project ? 'Update project' : 'Create a project'}</h2>
        </div>
        <button className="close-button" type="button" onClick={onCancel} aria-label="Close">&times;</button>
      </div>
      <label>
        Name <span aria-hidden="true">*</span>
        <input autoFocus name="name" value={values.name} onChange={updateField} aria-invalid={Boolean(nameError)} aria-describedby={nameError ? 'name-error' : undefined} />
      </label>
      {nameError && <p className="field-error" id="name-error">{nameError}</p>}
      <label>
        Description
        <textarea name="description" rows="4" value={values.description} onChange={updateField} />
      </label>
      <div className="form-row">
        <label>Status<select name="status" value={values.status} onChange={updateField}>{statuses.map((status) => <option key={status}>{status}</option>)}</select></label>
        <label>Priority<select name="priority" value={values.priority} onChange={updateField}>{priorities.map((priority) => <option key={priority}>{priority}</option>)}</select></label>
      </div>
      <div className="form-actions">
        <button className="secondary-button" type="button" onClick={onCancel}>Cancel</button>
        <button className="primary-button" type="submit">{project ? 'Save changes' : 'Create project'}</button>
      </div>
    </form>
  )
}

export default ProjectForm
