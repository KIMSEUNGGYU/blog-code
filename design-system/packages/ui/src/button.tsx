export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other} className="BTN2_line bg-primary200">
      {children}
    </button>
  );
}

Button.displayName = "Button";
