import { api } from './api-client'

interface GetOrganizationResponse {
  organization: {
    id: string
    name: string
    slug: string
    domain: string | null
    shouldAttachUsersByDomain: boolean
    avatarUrl: string | null
    createdAt: string
    updatedAt: string
    ownerId: string
  }
}

export async function getOrganization(org: string) {
  const result = await api
    .get(`organizations/${org}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        tags: ['organizations'],
      },
    })
    .json<GetOrganizationResponse>()

  return result
}
