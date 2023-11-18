import { useState } from 'react';

import { FrameworkMultiSelect } from './FrameworkSelect.tsx';

export function ExampleApp3() {
  const frameworks = [
    { label: 'Next.js' },
    { label: 'Remix' },
    { label: 'Gatsby' },
    { label: 'Relay' },
    { label: 'Vue' },
    { label: 'Nuxt' },
    { label: 'Solidjs' },
    { label: 'Angular' },
    { label: 'Qwick' },
    { label: 'jQuery' },
  ];
  const [selectedFrameworks, change] = useState<string[]>([]);

  return (
    <div>
      <h1>ExampleApp3</h1>
      <FrameworkMultiSelect
        frameworks={frameworks}
        selectedFrameworks={selectedFrameworks}
        onFrameworkChange={change}
      />
    </div>
  );
}
