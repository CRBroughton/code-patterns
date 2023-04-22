// src/mocks/handlers.js
import { rest } from 'msw'
import { personResolver } from './resolvers'

export const handlers = [
    rest.get('/', (_, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(personResolver('dan'))
        )
    }),
]