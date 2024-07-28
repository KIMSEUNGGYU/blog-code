import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';


// GYU-TODO: 타입 상위로 추출하기
type IconProps = ComponentPropsWithoutRef<'svg'>;
export function IconClose({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn('fill-gray500', className)}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM6 7.06066L8.9394 10.0001L6 12.9395L7.06077 14L10.0001 11.0607L12.9393 14L14 12.9393L11.0607 10.0001L14 7.06077L12.9395 6L10.0001 8.9394L7.06066 6L6 7.06066Z"
        // fill="#64748B"
        fillRule="evenodd"
      />
    </svg>
  );
}
