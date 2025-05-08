import { ComponentProps, ReactNode } from "react";

interface ButtonCreateProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export default function ButtonCreateLogin({ children, ...props }: ButtonCreateProps) {
  return (
    <button className="create-login" {...props}>
      <div className="button-text">{children}</div>
    </button>
  );
}
