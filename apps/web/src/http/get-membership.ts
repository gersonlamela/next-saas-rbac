import { Role } from '@saas/auth'

import { api } from './api-client'

interface GetMembershipResponse {
  membership: {
    id: string
    role: Role
    organizationId: string
    userId: string
  }
}

export async function getMembership(org: string) {
  const result = await api
    .get(`organizations/${org}/membership`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .json<GetMembershipResponse>()

  return result
}
