import { SwitchCase } from '@toss/react';

import { RegisterForm } from './RegisterForm.tsx';
import { RegisterLayout } from './RegisterLayout.tsx';
import { Select } from './Select.tsx';
export function ExampleApp6() {
  const banks = ['토스뱅크', '카카오뱅크', '신한은행', '국민은행', '하나은행', '기업은행', '우리은행'];

  return (
    <div>
      <h1>ExampleApp6</h1>
      <RegisterLayout title="내 계좌 등록하기">
        <Select options={banks}>
          {({ selected: bank }) => {
            return (
              <SwitchCase
                value={bank}
                caseBy={{
                  // 각각 다른 컴포넌트로 대체 가능 (여기서는 bank 값 전달하는 구조)
                  토스뱅크: <RegisterForm bank={bank} />,
                  카카오뱅크: <RegisterForm bank={bank} />,
                  신한은행: <RegisterForm bank={bank} />,
                  국민은행: <RegisterForm bank={bank} />,
                  하나은행: <RegisterForm bank={bank} />,
                  기업은행: <RegisterForm bank={bank} />,
                  우리은행: <RegisterForm bank={bank} />,
                }}
                defaultComponent={<>에러</>}
              />
            );
          }}
        </Select>
      </RegisterLayout>
    </div>
  );
}
