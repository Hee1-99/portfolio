import { Navigate, useParams } from 'react-router-dom'
import { getProject } from '../content/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/" replace />
  return (
    <main className="min-h-screen grid place-items-center font-display text-3xl">
      {project.title.ko}
    </main>
  )
}
