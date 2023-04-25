import { z } from 'zod'

// Schema/Contract/Source of truth for the front end
const nameSchema = z.enum(['craig', 'dan', 'bill']).default('craig')
export const PersonSchema = z.object({
  name: nameSchema,
  birthday: z.union([z.date(), z.string()]).default('15/06/1990'),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
  }).default(
    {
      street: 'my-street',
      city: 'my-city',
      state: 'my-state',
    },
  ),
  pets: z.array(z.object({ name: z.string(), breed: z.string() })).default(
    [{ breed: 'best', name: 'doggo' }],
  ),
})

// Create a type
export type Person = z.infer<typeof PersonSchema>
export type Name = z.infer<typeof nameSchema>
