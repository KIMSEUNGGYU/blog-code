import { helloHandlers } from './hello';
import { userHandlers } from './user';

export const handlers = [...helloHandlers, ...userHandlers];

export function delay(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
