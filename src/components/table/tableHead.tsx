interface TableHeadProps {
    headers: string[]
}

export function TableHead({ headers }: TableHeadProps) {
    return (
        <thead className="border-b border-b-slate-400 pt-40">
            <tr>
                {
                    headers.map((item, index) => (
                        <th className="pt-8" key={index}>{item}</th>
                    ))
                }
            </tr>
        </thead>
    )
}