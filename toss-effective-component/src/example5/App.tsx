import { useState } from 'react';

import { MultiSelect } from './MultiSelect';

export function ExampleApp5() {
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
      <h1>ExampleApp5</h1>
      <MultiSelect value={selectedFrameworks} onChange={change} options={frameworks} />
    </div>
  );
}
