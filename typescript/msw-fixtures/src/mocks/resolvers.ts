import { Name, Person, personFixture } from "./fixtures"
import { match } from 'ts-pattern'

export const personResolver = (state: Name): Person | Person[] => {
    return match(state)
        .with('craig', () => personFixture().create({ name: state }))
        .with('dan', () => personFixture().createArray(5, { name: 'dan' }))
        .otherwise(() => personFixture().create())
}