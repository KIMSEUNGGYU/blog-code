import { PropsWithChildren } from 'react';

type Props = {
  show: boolean;
};
export function Step({ show, children }: PropsWithChildren<Props>) {
  if (show === true) {
    return children;
  }
  return null;
}
