import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { auth } from '@/http/middlewares/auth'

const getOrganizationParams = z.object({
  slug: z.string(),
})

export async function getOrganization(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/organizations/:slug',
      {
        schema: {
          tags: ['Organizations'],
          summary: 'Get details from organization',
          security: [{ bearerAuth: [] }],
          params: getOrganizationParams,
          200: z.object({
            organization: z.object({
              id: z.string().uuid(),
              name: z.string(),
              slug: z.string(),
              domain: z.string().nullable(),
              shouldAttachUsersByDomain: z.boolean(),
              avatarUrl: z.string().nullable(),
              createdAt: z.date(),
              updatedAt: z.date(),
              ownerId: z.string(),
            }),
          }),
        },
      },
      async (request) => {
        const { slug } = getOrganizationParams.parse(request.params)
        const { organization } = await request.getUserMembership(slug)

        return {
          organization,
        }
      },
    )
}
