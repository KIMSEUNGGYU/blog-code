import { useState, useRef } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '@acme/ui/components';

const meta: Meta<typeof InputField> = {
  title: 'DS/InputField',
  component: InputField,
  args: {
    onSearch: () => {
      console.log('search');
    },
  },
  render: (props) => {
    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const onReset = () => {
      setValue('');
    };

    return <InputField {...props} onChange={onChange} onReset={onReset} value={value} />;
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {};

export const WithClear: Story = {
  args: {
    withClear: true,
  },
};

export const WithSearch: Story = {
  args: {
    withSearch: true,
  },
};

export const WithFullIcon: Story = {
  args: {
    withSearch: true,
    withClear: true,
  },
};

export const error: Story = {
  args: {
    error: true,
  },
};

export const disabled: Story = {
  args: {
    disabled: true,
  },
  render: (props) => {
    return (
      <div className="flex flex-col gap-4">
        <InputField {...props} />
        <InputField {...props} value="Value" withClear />
        <InputField {...props} value="Value" withClear withSearch />
      </div>
    );
  },
};

// Exampls
export const ExampleText: Story = {
  render: (props) => {
    return (
      <div className="flex flex-col gap-2">
        <InputField {...props} />
        <InputField {...props} autoFocus />
        <InputField {...props} value="Value" withClear />
        <InputField {...props} error value="Value" />
        <InputField {...props} disabled value="Value" />
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
        <InputField {...props} />
        <InputField {...props} autoFocus />
        <InputField {...props} value="Value" withClear />
        <InputField {...props} error value="Value" />
        <InputField {...props} disabled value="Value" />
      </div>
    );
  },
};

export const ExampleWithSearch: Story = {
  args: {
    withSearch: true,
  },
  render: (props) => {
    return (
      <div className="flex flex-col gap-2">
        <InputField {...props} />
        <InputField {...props} autoFocus />
        <InputField {...props} value="Value" withClear />
        <InputField {...props} error value="Value" />
        <InputField {...props} disabled value="Value" />
      </div>
    );
  },
};

export const ExamplePassword: Story = {
  args: {
    type: 'password',
  },
  render: (props) => {
    return (
      <div className="flex flex-col gap-2">
        <InputField {...props} />
        <InputField {...props} autoFocus />
        <InputField {...props} value="Value" withClear />
        <InputField {...props} error value="Value" />
        <InputField {...props} disabled value="Value" />
      </div>
    );
  },
};

//
export const ExampleState: Story = {
  render: (props) => {
    const [value, setValue] = useState('');
    return (
      <div className="flex flex-col gap-2">
        <InputField
          {...props}
          onChange={(event) => setValue(event.target.value)}
          onReset={() => setValue('')}
          onSearch={() => {
            alert(value);
          }}
          value={value}
          withClear
          withSearch
        />
      </div>
    );
  },
};

export const ExampleRef: Story = {
  render: (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault();
      if (inputRef.current) {
        // console.log(':inputRef.current.value', inputRef.current.value);
        alert(`submit: ${inputRef.current.value}`);
      }
    };

    const handleReset = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    };

    return (
      <div className="flex flex-col gap-2">
        <form onSubmit={handleSubmit}>
          <InputField
            {...props}
            onReset={handleReset}
            onSearch={() => { handleSubmit(); }}
            ref={inputRef}
            withClear
            withSearch
          />
        </form>
      </div>
    );
  },
};

export const ExampleCustom: Story = {
  render: (props) => {
    return (
      <div className="flex flex-col gap-2">
        <InputField {...props} wrapperClassName="h-20 border-primary500" />
      </div>
    );
  },
};
