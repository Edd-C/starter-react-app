import React from "react";
import styles from "./Button.module.scss";

export declare interface ExampleButtonProps {
  children: string;
  className?: string;
  ariaLabel?: string;
  onClick?: any;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  useAsyncStyle?: boolean;
}

const defaultProps = {
  type: "button",
  ariaLabel: undefined,
  onClick: () => {},
  className: "",
  useAsyncStyle: false,
};

const Button = function ExampleButton(props: ExampleButtonProps) {
  const { children, ariaLabel, type, onClick, className, useAsyncStyle } =
    props;

  const asyncStyle = useAsyncStyle ? styles.asyncButton : "";

  return (
    <button
      /* eslint-disable-next-line react/button-has-type */
      type={type}
      className={`${styles.button} ${className} ${asyncStyle}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
Button.defaultProps = defaultProps;
export default Button;
