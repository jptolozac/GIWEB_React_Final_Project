import { MutableRefObject, useState } from "react"
import { MagnifyingGlass } from "./magnifyngGlass"

interface InputProps{
    inputRef?: MutableRefObject<HTMLInputElement | null>,
    handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>, index?: number) => void
    search?: boolean;
    className?: string;
    value?: string;
    name?: string;
    enabled?: boolean
    onChange?: any
}

export function NumberInput({ inputRef, handleInputChange, search=false, className, value, name, enabled=true }: InputProps) {
    const [currentValue, setCurrentValue] = useState(value)
    const handleInputChangeAux = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(e.currentTarget.value)
    }
    
    return (
        <div className="bg-slate-600 border-0 px-2 rounded-lg flex">
            {search && <MagnifyingGlass className="w-5 mr-2" />}
            <input name={name} className={`text-white px-2 py-1 overflow-auto ${className}`} ref={inputRef} onChange={handleInputChange || handleInputChangeAux} type="text" value={currentValue} disabled={!enabled}/>
        </div>
    )
}
