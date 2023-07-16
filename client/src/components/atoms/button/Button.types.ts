import {ButtonHTMLAttributes} from "react";

export interface IButtonProps extends ButtonProps{
    text: string;
    variant: "primary" | "secondary" | "large";
}


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

