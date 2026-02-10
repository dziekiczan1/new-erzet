import { ComponentProps } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const Button = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `btn`,
        variant === "primary" && "btn-primary",
        variant === "secondary" && "btn-secondary",
        size === "sm" && "btn-sm",
        size === "md" && "btn-md",
        size === "lg" && "btn-lg",
        className,
      )}
      {...props}
    />
  );
};
export default Button;
