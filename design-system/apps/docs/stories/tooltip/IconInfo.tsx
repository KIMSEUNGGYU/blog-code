import type {ComponentPropsWithoutRef} from 'react';

type IconProps = ComponentPropsWithoutRef<'svg'>;
export function IconInfo({ className, ...props }: IconProps) {
  return (
    <svg //
      className={`fill-gray500 cursor-pointer ${  className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M16.5 10C16.5 13.5899 13.5899 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10.75 7V5.5H9.25V7H10.75ZM9.25 8V14.5H10.75V8H9.25Z"
        fill="white"
        fillRule="evenodd"
      />
    </svg>
  );
}
