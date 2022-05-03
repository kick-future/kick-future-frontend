import cn from "classnames";
import React, { FC } from "react";

import styles from "./Button.module.css";
import { IButton } from "./Button.typings";

const Button: FC<IButton> = ({
    children,
    size = "S",
    type = "primary",
    style,
    className,
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
            type="button"
        >
            {children}
        </button>
    );
};

export default Button;
