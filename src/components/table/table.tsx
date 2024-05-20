import { ReactNode } from "react"
import { TableHead } from "./tableHead"
import { TableBody } from "./tableBody"

interface TableProps {
    headers?: string[],
    children: ReactNode
}

export function Table({ headers, children }: TableProps) {
    return (
        <div className="flex flex-col">
            <table className="mb-12">
                <TableHead headers={headers!} />
                <TableBody>
                    {children}
                </TableBody>
            </table>
        </div>
    )
}