import axios from 'axios';
import { useState } from 'react';

import { useFunnel } from '@/hooks/useFunnel.tsx';
import { PageLayout, 가입방식, 가입완료, 주민번호, 집주소 } from '@/pages';

const InitRegisterData = {
  가입방식: '',
  주민번호: '',
  집주소: '',
};

function App() {
  const [Funnel, setStep] = useFunnel<'가입방식' | '주민번호' | '집주소' | '가입성공'>('가입방식');

  const [registerData, setRegisterData] = useState<RegisterData>(InitRegisterData);
  return (
    <PageLayout>
      <Funnel>
        <Funnel.Step name="가입방식">
          <가입방식
            onNext={(data) => {
              setRegisterData((prev) => ({ ...prev, 가입방식: data }));
              setStep('주민번호');
            }}
          />
        </Funnel.Step>
        <Funnel.Step name="주민번호">
          <주민번호
            onNext={(data) => {
              setRegisterData((prev) => ({ ...prev, 주민번호: data }));
              setStep('집주소');
            }}
          />
        </Funnel.Step>
        <Funnel.Step name="집주소">
          <집주소
            onNext={(data) => {
              axios
                .post('/api/user', { ...registerData, 집주소: data })
                .then(() => {
                  alert('가입성공');
                  setStep('가입성공');
                })
                .catch((error) => {
                  alert('유저 정보 등록 실패');
                  console.error('error', error);
                });
            }}
          />
        </Funnel.Step>
        <Funnel.Step name="가입성공">
          <가입완료 onNext={() => setStep('가입방식')} />
        </Funnel.Step>
      </Funnel>
    </PageLayout>
  );
}

export default App;

export type RegisterData = {
  가입방식: string;
  주민번호: string;
  집주소: string;
};
