import { clsx } from "clsx";

import classes from "./button.module.css";

import type { FC, ReactNode } from "react";

type ButtonProps = {
  readonly variant?: "default" | "outline" | "text";
  readonly size?: "sm" | "md" | "lg";
  readonly color?: "default" | "primary" | "secondary" | "danger";
  readonly startIcon?: ReactNode;
  readonly endIcon?: ReactNode;
  readonly disableShaddow?: boolean;
  readonly disabled?: boolean;
  readonly children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ variant = "default", children }) => {
  console.log(classes);
  return (
    <button
      className={clsx({
        [classes.btn]: true,
        [classes.variantDefault]: variant === "default",
        [classes.variantOutline]: variant === "outline",
        [classes.variantText]: variant === "text",
      })}
    >
      {children}
    </button>
  );
};
