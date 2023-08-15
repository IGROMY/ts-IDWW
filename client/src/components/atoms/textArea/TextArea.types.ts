export interface ITextAreaProps {
    onChange?: (event:any) => void;
    errorMessage?: string;
    name: string;
    label: string;
    register?: () => void;
    value?: string;
    required?: string;
}
