import { MouseEventHandler } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({ children, type, onClick }: ButtonProps) {
    return (
        <button type={type} onClick={onClick} className="bg-indigo-700 px-4 py-2 m-3 text-xl text-white rounded-md">
            {children}
        </button>
    )
}