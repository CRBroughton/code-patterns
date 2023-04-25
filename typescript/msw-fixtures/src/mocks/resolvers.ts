import { match } from 'ts-pattern'
import { createFixture } from './builder'
import type { Name, Person } from './fixtures'
import { PersonSchema } from './fixtures'

export function personResolver(state: Name): Person | Person[] {
  const { create, createArray, createUniArray } = createFixture(PersonSchema.parse({}))

  return match(state)
    .with('craig', () => create({ name: state }))
    .with('dan', () => createUniArray([
      {
        name: 'craig',
        birthday: '15/06/1990',
        pets: undefined,
      },
      {
        birthday: '15/01/1990',
      },
    ]))
    .with('bill', () => createArray(2))
    .otherwise(() => create())
}
