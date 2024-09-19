/* eslint-disable prettier/prettier */
import { z } from 'zod'

export const userSubject = z.tuple([
  z.union([z.literal('get'),z.literal('update'),z.literal('delete'), z.literal('manage')]),
  z.literal('User'),
])

export type UserSubject = z.infer<typeof userSubject>
