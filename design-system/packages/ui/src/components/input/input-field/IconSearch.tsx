import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';


// GYU-TODO: 타입 상위로 추출하기
type IconProps = ComponentPropsWithoutRef<'svg'>;
export function IconSearch({ ...props }: IconProps) {
  return (
    <svg
      className={cn('fill-gray400', props.className)}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.0303 19.9697L19.9697 21.0303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z"
        // fill=""
        fillRule="evenodd"
      />
    </svg>
  );
}
