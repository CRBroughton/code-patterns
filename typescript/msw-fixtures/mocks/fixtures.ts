import { z } from 'zod'

// Schema/Contract/Source of truth for the front end
const nameSchema = z.union([z.literal('craig'), z.literal('dan'), z.literal('bill')])
const PersonSchema = z.object({
	name: nameSchema,
	birthday: z.date(),
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

// Create a fixture
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

    const create = (props?: Partial<Person>): Person => {
        return { ...person, ...props }
    }

    const createArray = (count: number, props?: Partial<Person>): Person[] => {
       return Array(count).fill(count).map(() => {
            return {
                ...person,
                ...props,
            }
        })
    }

    return {
        create,
        createArray,
    }

}