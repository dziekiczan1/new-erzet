import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  textarea?: boolean;
  rows?: number;
  name: string;
  required?: boolean;
  pattern?: string;
  errorMessage?: string;
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(
  (
    {
      label,
      name,
      textarea = false,
      rows,
      required,
      pattern,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const [isValid, setIsValid] = React.useState(true);

    const handleBlur = (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      validateInput(e.target);
    };
    const handleChange = (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      validateInput(e.target);
      if (props.onChange) props.onChange(e);
    };

    const validateInput = (target: HTMLInputElement | HTMLTextAreaElement) => {
      if (required && !target.value) {
        setIsValid(false);
        return;
      }
      if (pattern && !new RegExp(pattern).test(target.value)) {
        setIsValid(false);
        return;
      }
      setIsValid(true);
    };

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={name}
            className="text-xs font-semibold tracking-wide uppercase text-primary/80"
          >
            {label}
            {required && <span className="text-primary ml-1">*</span>}
          </label>
        )}

        {textarea ? (
          <textarea
            id={name}
            name={name}
            rows={rows}
            required={required}
            className={`input-field h-auto resize-none`}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            onBlur={handleBlur}
            onChange={handleChange}
            aria-describedby={
              !isValid && errorMessage ? `${name}-error` : undefined
            }
            aria-invalid={!isValid}
            {...props}
          />
        ) : (
          <input
            id={name}
            name={name}
            pattern={pattern}
            required={required}
            className={`input-field`}
            ref={ref as React.Ref<HTMLInputElement>}
            onBlur={handleBlur}
            onChange={handleChange}
            aria-describedby={
              !isValid && errorMessage ? `${name}-error` : undefined
            }
            aria-invalid={!isValid}
            {...props}
          />
        )}

        {!isValid && errorMessage && (
          <p
            id={`${name}-error`}
            role="alert"
            aria-live="polite"
            className="text-xs text-red-500"
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
