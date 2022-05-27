import cn from "classnames";
import React, { FC } from "react";

import styles from "./Button.module.css";
import { IButton, TypeButtonAction } from "./Button.typings";

const Button: FC<IButton> = ({
    children,
    size = "S",
    type = "primary",
    style,
    className,
    typeButtonAction = "button",
}) => {
    return (
        <button
            style={style}
            className={cn(styles.button, className, {
                [styles.primary]: type === "primary",
                [styles.secondary]: type === "secondary",
                [styles.tertiary]: type === "tertiary",
                [styles.sizeS]: size === "S",
                [styles.sizeM]: size === "M",
                [styles.sizeL]: size === "L",
            })}
            type={typeButtonAction}
        >
            {children}
        </button>
    );
};

export default Button;
