import {ReactNode} from "react";

export interface IParagraphProps {
    children : ReactNode;
    variant: "large" | "medium" | "small";
}