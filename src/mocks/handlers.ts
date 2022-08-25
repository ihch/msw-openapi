import { rest } from 'msw';
import openapi from '../openapi/openapi.json';


export const handlers = [
  rest.get('http://localhost:8000/', (_, res, ctx) => {
    const response = openapi.paths['/'].get.responses[200].content['application/json'].example;
    return res(
      ctx.json(response),
      ctx.status(200),
    )
  }),
]
