import { ReactNode } from "react"

interface TableBodyProps{
    children: ReactNode
}

export function TableBody({ children }: TableBodyProps){
    return (
        <tbody className="text-sm">
            {children}
        </tbody>
    )
}