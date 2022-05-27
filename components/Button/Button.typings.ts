import { ReactNode, CSSProperties } from "react";

export type TypeButton = "primary" | "secondary" | "tertiary";
export type SizeButton = "S" | "M" | "L";
export type TypeButtonAction = "submit" | "button" | "reset";

export interface IButton {
    children: ReactNode;
    type?: TypeButton;
    size?: SizeButton;
    style?: CSSProperties;
    typeButtonAction?: TypeButtonAction;
    className?: string;
}
