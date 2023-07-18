import {ReactNode} from "react";

export interface ITextProps {
    children : ReactNode;
    variant: "normal" | "bold" | "italic";
}