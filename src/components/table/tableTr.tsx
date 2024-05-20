import { ReactNode } from "react"

interface TableTrProps {
    children: ReactNode,
    reference?: string
}

export function TableTr({ children, reference }: TableTrProps) {
    const handleClick = () => window.location.assign(`${window.location.origin}${reference}`)

    return (
        reference
            ? <tr className="max-w-screen-xl w-fit overflow-auto border-b border-b-slate-400 table-row align-middle cursor-pointer hover:bg-[rgba(0,0,0,0.2)]" onClick={handleClick} >
                {children}
            </tr>
            : <tr className="max-w-screen-xl w-fit overflow-auto border-b border-b-slate-400">
                {children}
            </tr>
    )
}