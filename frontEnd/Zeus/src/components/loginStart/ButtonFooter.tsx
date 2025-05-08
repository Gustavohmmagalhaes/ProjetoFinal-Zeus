import { ComponentProps, ReactNode } from "react";

interface ButtonFooterProps extends ComponentProps<'button'> {
    children: ReactNode;
}
export default function ButtonFooter({ children, ...props }: ButtonFooterProps) {

    return <button className="button"{...props}> {children} </button>

}