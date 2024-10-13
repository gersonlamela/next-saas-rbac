import { redirect } from 'next/navigation'

import { ability } from '@/auth/auth'

import ProjectForm from './project-form'

export default async function CreateProject() {
  const permisssions = await ability()

  if (permisssions?.cannot('create', 'Project')) {
    redirect('/')
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Create project</h1>
      <ProjectForm />
    </div>
  )
}
