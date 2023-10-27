import { useState } from 'react';

import { RegisterForm } from './RegisterForm.tsx';
import { RegisterLayout } from './RegisterLayout.tsx';
import { Select } from './Select.tsx';

export function ExampleApp6() {
  const banks = ['토스뱅크', '카카오뱅크', '신한은행', '국민은행', '하나은행', '기업은행', '우리은행'];
  const [value, change] = useState<string>('토스뱅크');

  return (
    <div>
      <h1>ExampleApp6</h1>
      <RegisterLayout title="내 계좌 등록하기">
        <Select value={value} onChange={change} options={banks}>
          <RegisterForm />
        </Select>
      </RegisterLayout>
    </div>
  );
}
