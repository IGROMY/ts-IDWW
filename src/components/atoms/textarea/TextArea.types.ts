import {ReactNode} from "react";

export interface ITextAreaProps {
    onChange?: () => void;
    errorMessage?: string;
    name: string;
    label: string;
    register?: () => void;
    value?: number;
    required?: string;
}
