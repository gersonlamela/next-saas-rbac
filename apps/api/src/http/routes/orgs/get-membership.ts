import { roleSchema } from '@saas/auth/src/roles'
import type { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { auth } from '@/http/middlewares/auth'

const slugSchema = z.object({
  slug: z.string(),
})

export async function getMemberShip(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/organizations/:slug/membership',
      {
        schema: {
          tags: ['Organizations'],
          summary: 'Get user membership on organization',
          security: [{ bearerAuth: [] }],
          params: slugSchema,
          response: {
            200: z.object({
              membership: z.object({
                id: z.string().uuid(),
                role: roleSchema,
                userId: z.string().uuid(),
                organizationId: z.string().uuid(),
              }),
            }),
          },
        },
      },
      async (request) => {
        const { slug } = slugSchema.parse(request.params)
        const { membership } = await request.getUserMembership(slug)

        return {
          membership: {
            role: roleSchema.parse(membership.role),
            id: membership.id,
            userId: membership.userId,
            organizationId: membership.organizationId,
          },
        }
      },
    )
}
