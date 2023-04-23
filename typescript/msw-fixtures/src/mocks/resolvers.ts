import { Name, Person, personFixture } from "./fixtures"
import { match } from 'ts-pattern'

export const personResolver = (state: Name): Person | Person[] => {
    return match(state)
        .with('craig', () => personFixture().create({ name: state }))
        .with('dan', () => personFixture().createUniArray([
        {
            name: "craig",
            birthday: '15/06/1990',
            pets: undefined,
        },
        {
            birthday: '15/01/1990',
        }
        ]))
        .with('bill', () => personFixture().createArray(2))
        .otherwise(() => personFixture().create())
}