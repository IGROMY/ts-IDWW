export interface IInputProps {
    type: string;
    value: string;
    onChange: (event:any) => void;
    maxLength?: number;
    minLength?: number;
    name: string;
    id: string;
    placeholder?: string;
    errorMessage?: string;
    label?: string;
    register?: string;
    required?: string;
}
