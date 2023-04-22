// src/mocks/handlers.js
import { rest } from 'msw'
import { personResolver } from './resolvers'

export const handlers = [
    rest.get('/', (_, res, ctx) => {
        return res(
          ctx.status(200),
          // use resolver for response
          ctx.json(personResolver('dan'))
        )
    }),
]