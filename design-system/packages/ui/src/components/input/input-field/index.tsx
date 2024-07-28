'use client';

import * as React from 'react';
import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { inputWrapperVariants, inputVariants } from './style';
import { IconViewOn } from './IconViewOn';
import { IconViewOff } from './IconViewOff';
import { IconSearch } from './IconSearch';
import { IconClose } from './IconClose';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input UI 유형
   */
  variant?: 'default' | 'underline';
  /**
   * 에러 유무
   */
  error?: boolean;
  /**
   * 입력시 clear 할 수 있는 버튼 표시 (onReset 이벤트 필요)
   */
  withClear?: boolean;
  /**
   * Search Input 으로 SearchIcon 표시
   */
  withSearch?: boolean;
  /**
   * 최대 높이
   */
  fullWidth?: boolean;
  /**
   * 오른쪽 Slot (Icon), (DS 요소는 아니지만 추후 확장성을 위해 추가한 요소)
   */
  rightSlot?: React.ReactNode;
  /**
   * (사용권장 X) Input 요소의 Wrapping 된 className
   * 상위 요소 제어가 필요할 때 사용 (ex. 높이 조절 등)
   */
  wrapperClassName?: string;
  /**
   * clear Icon 클릭시 이벤트, (DS 요소는 아니지만 추후 확장성을 위해 추가한 요소)
   */
  onReset?: () => void;
  /**
   * Search Icon 클릭시 이벤트, (DS 요소는 아니지만 추후 확장성을 위해 추가한 요소)
   */
  onSearch?: () => void;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      variant = 'default', //
      error,
      withClear,
      withSearch,
      fullWidth = false,
      rightSlot,
      type,
      className,
      wrapperClassName,
      onReset,
      onSearch,
      ...props
    },
    ref,
  ) => {
    const [viewOn, setViewOn] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // 포커스 되었을 때 클리어 버튼 보이기
    const handleFocus = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        props.onFocus?.(event);
      },
      [props],
    );

    // 포커스 벗어났을 때 클리어 버튼 숨기기
    const handleBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        // 약간의 딜레이가 있어야 close 아이콘 클릭 이벤트가 정상적으로 동작하여 포커스 해제를 약간 딜레이줌
        setTimeout(() => {
          setIsFocused(false);
        }, 100);

        props.onBlur?.(event);
      },
      [props],
    );

    const disabled = props.disabled;
    const isPasswordType = type === 'password';
    const _type = type === 'password' && viewOn ? 'text' : type;
    return (
      <div className={cn(inputWrapperVariants({ error, disabled, variant, fullWidth }), wrapperClassName)}>
        <input
          // TODO: group 써서 처리하기 - 현재 찾아보니깐, group 으로 하기 어려운거 같음.
          // not 지원안함, 복자한 형제, 부모 제어를 위한 방식 없음?
          className={cn(inputVariants({ disabled, variant }), 'input', className)}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder="placeholder"
          ref={ref}
          type={_type}
          {...props}
        />

        <div className="flex items-center gap-3">
          {withClear && isFocused ? <IconClose className="icon-close" onClick={onReset} /> : null}

          {isPasswordType ? (
            viewOn ? (
              <IconViewOn
                className={cn(props.disabled && 'fill-gray300')}
                onClick={() => {
                  if (props.disabled) return;
                  setViewOn(false);
                }}
              />
            ) : (
              <IconViewOff
                className={cn(props.disabled && 'fill-gray300')}
                onClick={() => {
                  if (props.disabled) return;
                  setViewOn(true);
                }}
              />
            )
          ) : null}

          {withSearch ? (
            <IconSearch aria-disabled={disabled} className={cn('', 'icon-search')} onClick={onSearch} />
          ) : null}

          {rightSlot}
        </div>
      </div>
    );
  },
);
InputField.displayName = 'InputField';

export { InputField };
