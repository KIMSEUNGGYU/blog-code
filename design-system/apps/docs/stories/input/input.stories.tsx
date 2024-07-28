import { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@acme/ui/components';

const meta: Meta<typeof Input> = {
  title: 'DS/Input',
  component: Input,
  argTypes: {},
  render: (props) => {
    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const onReset = () => {
      setValue('');
    };

    return <Input {...props} onChange={onChange} onReset={onReset} value={props.value ?? value} />;
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Underline: Story = {
  args: {
    variant: 'underline',
  },
};

export const Focus: Story = {
  args: {
    autoFocus: true,
  },
};

export const Readonly: Story = {
  args: {
    readOnly: true,
    value: 'Value',
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
  },
};

// Examples
export const ExampleDefault: Story = {
  render: (props) => {
    return (
      <div className="flex flex-col gap-2">
        <Input {...props} />
        <Input {...props} autoFocus />
        <Input {...props} value="Value" />
        <Input {...props} error value="Value" />
        <Input {...props} disabled value="Value" />
        <Input {...props} readOnly value="Value" />
      </div>
    );
  },
};

export const ExampleUnderline: Story = {
  args: {
    variant: 'underline',
  },
  render: (props) => {
    return (
      <div className="flex flex-col gap-2">
        <Input {...props} />
        <Input {...props} autoFocus />
        <Input {...props} value="Value" />
        <Input {...props} error value="Value" />
        <Input {...props} disabled value="Value" />
        <Input {...props} readOnly value="Value" />
      </div>
    );
  },
};
