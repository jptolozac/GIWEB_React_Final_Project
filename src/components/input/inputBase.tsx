import { useFormContext } from "react-hook-form";

type InputBaseFormProps = {
    children?: React.ReactNode;
    title?: string;
    name?: string;
    disabled?: boolean;
    isCustomChildren?: boolean;
    isLongTextInput?: boolean;
};

export function InputBase({
    children,
    name,
    title,
    disabled,
    isCustomChildren = false,
    isLongTextInput = false,
}: InputBaseFormProps) {
    const { formState } = useFormContext();
    const error = formState.errors[name!]

}