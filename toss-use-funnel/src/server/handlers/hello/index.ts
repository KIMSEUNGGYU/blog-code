import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';

/**
 * 예제 API
 */
const hello = (_: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  return res(ctx.status(200), ctx.json({ data: 'hello world' }));
};

export const helloHandlers = [
  rest.get('/api/hello', hello), //
];
