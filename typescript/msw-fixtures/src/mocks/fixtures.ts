import { z } from 'zod'
import { builder } from './builder'

// Schema/Contract/Source of truth for the front end
const nameSchema = z.enum(['craig','dan','bill'])
const PersonSchema = z.object({
	name: nameSchema,
	birthday: z.union([z.date(), z.string()]),
	address: z.object({
		street: z.string(),
		city: z.string(),
		state: z.string(),
	}),
	pets: z.array(z.object({ name: z.string(), breed: z.string() })),
})

// Create a type
export type Person = z.infer<typeof PersonSchema>
export type Name = z.infer<typeof nameSchema>

/**
 * Creates a person object or array of objects using
 * the provided create, createArray and createUniArray functions.
 */
export const personFixture = () => {
    const person: Person = {
        name: 'craig',
        birthday: new Date('15/06/1990'),
        address: {
            street: 'my-street',
            city: 'my-city',
            state: 'my-state'
        },
        pets: [{breed: 'best', name: "doggo"}],
    }

    // Use generic builder for person functions
    const { create, createArray, createUniArray } = builder(person)

    return {
        create,
        createArray,
        createUniArray
    }

}