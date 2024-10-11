import { api } from './api-client'

interface GetOrganizationsResponse {
  organizations: {
    id: string
    slug: string
    name: string
    avatarUrl: string | null
  }[]
}

export async function getOrganizations() {
  const result = await api
    .get('organizations', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .json<GetOrganizationsResponse>()

  return result
}
