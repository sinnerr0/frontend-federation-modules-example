/// <reference types="react" />
import type { ButtonProps } from './Button';
export declare const StyledButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements>;
} & Omit<ButtonProps, "label">, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
