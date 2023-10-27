import { ResponseComposition, rest, RestContext, RestRequest } from 'msw';

import { RegisterData } from '@/App.tsx';
import { delay } from '@/server/handlers';

const enroll = async (req: RestRequest, res: ResponseComposition, ctx: RestContext) => {
  await delay(500);

  const { 집주소, 주민번호, 가입방식 } = await req.json<RegisterData>();
  if (!가입방식 || !주민번호 || !집주소 || 집주소 === 'error' || 주민번호 === 'error') {
    return res(ctx.status(400), ctx.json({ message: '요청 데이터가 유효하지 않습니다.' }));
  }

  return res(ctx.status(201), ctx.json({ data: { 집주소, 주민번호, 가입방식 } }));
};

export const userHandlers = [
  rest.post('/api/user', enroll), //
];
