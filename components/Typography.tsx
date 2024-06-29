import React from 'react';
import { twMerge } from 'tailwind-merge';

export type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';

const variantStyles: Record<VariantType, string> = {
  h1: 'text-5xl font-bold',
  h2: 'text-4xl font-bold',
  h3: 'text-3xl font-bold',
  h4: 'text-2xl font-bold',
  h5: 'text-xl font-semibold',
  h6: 'text-lg font-semibold',
  body: 'text-base font-normal',
};

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  component?: VariantType;
  variant?: VariantType;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'h1',
  component = 'h1',
  className,
  ...props
}) => {
  return (
    (component === 'body' && (
      <p className={twMerge(variantStyles[variant], className)} {...props}>
        {props.children}
      </p>
    )) ||
    (component === 'h1' && (
      <h1 className={twMerge(variantStyles[variant], className)} {...props}>
        {props.children}
      </h1>
    )) ||
    (component === 'h2' && (
      <h2 className={twMerge(variantStyles[variant], className)} {...props}>
        {props.children}
      </h2>
    )) ||
    (component === 'h3' && (
      <h3 className={twMerge(variantStyles[variant], className)} {...props}>
        {props.children}
      </h3>
    )) ||
    (component === 'h4' && (
      <h4 className={twMerge(variantStyles[variant], className)} {...props}>
        {props.children}
      </h4>
    )) ||
    (component === 'h5' && (
      <h5 className={twMerge(variantStyles[variant], className)} {...props}>
        {props.children}
      </h5>
    )) ||
    (component === 'h6' && (
      <h6 className={twMerge(variantStyles[variant], className)} {...props}>
        {props.children}
      </h6>
    ))
  );
};

export default Typography;