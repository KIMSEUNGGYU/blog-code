'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { inputVariants } from './style';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * 에러 유무
   */
  error?: boolean;
  /**
   * Input UI 유형
   */
  variant?: 'default' | 'underline';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default', //
      error,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <input
        className={cn(inputVariants({ variant, disabled: props.disabled, error }), className)}
        placeholder="placeholder"
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

