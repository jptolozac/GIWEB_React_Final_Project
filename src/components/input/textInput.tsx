import { MutableRefObject, useEffect, useState } from "react"
import { MagnifyingGlass } from "./magnifyngGlass"
// import { useForm } from "react-hook-form";

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

export function TextInput({ inputRef, handleInputChange, search=false, className, value='', name, enabled=true }: InputProps) {
    // const { register } = useForm()
    const [currentValue, setCurrentValue] = useState<string | null>(value!)
    const handleInputChangeAux = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(e.currentTarget.value)
        if(handleInputChange)
            handleInputChange(e)
    }
    console.log(currentValue);
    

    return (
        <div className="bg-slate-600 border-0 px-2 rounded-lg flex">
            {search && <MagnifyingGlass className="w-5 mr-2" />}
            <input 
                name={name} 
                className={`text-white px-2 py-1 overflow-auto ${className}`} 
                ref={inputRef} onChange={(e) => handleInputChangeAux(e)} 
                type="text" 
                value={currentValue!} 
                disabled={!enabled} 
                /* {...register(name!)} */
                />
        </div>
    )
}
