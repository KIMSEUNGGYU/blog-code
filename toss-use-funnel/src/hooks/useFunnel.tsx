import { Children, isValidElement, ReactNode, useState } from 'react';

type FunnelProps = {
  children: ReactNode;
};

type StepProps<T extends string> = {
  name: T;
  children?: ReactNode;
};

export function useFunnel<T extends string>(initStep: T) {
  const [step, setStep] = useState<T>(initStep);

  const Step = (props: StepProps<T>) => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const validElement = Children.toArray(children).filter(isValidElement);
    const targetElement = validElement.find((children) => (children.props as StepProps<T>).name === step);

    if (!targetElement) {
      return null;
    }

    return <>{targetElement}</>;
  };

  return [Object.assign(Funnel, { Step: (props: StepProps<T>) => <Step {...props} /> }), setStep] as const;
}
