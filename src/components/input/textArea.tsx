import { ChangeEvent, useState } from "react"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{ }

export function TextArea({ name, className, value }: TextAreaProps){
    const [currentValue, setCurrentValue] = useState<string>(value as string)
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentValue(event.target.value)
    }
    return (
        <textarea name={name} className={className} value={currentValue} onChange={(e) => handleChange(e)}></textarea>
    )
}