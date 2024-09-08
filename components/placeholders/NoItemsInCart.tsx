import React, { ComponentProps, FC } from 'react';
import { BsCartX } from 'react-icons/bs';
import clsx from 'clsx';

export interface NoItemsInCartProps extends ComponentProps<'svg'> {
  text?: string;
  textProps?: ComponentProps<'p'>;
}

const NoItemsInCart: FC<NoItemsInCartProps> = ({ className, text, textProps, ...props }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <BsCartX {...props} className={clsx('text-9xl', className)} />
      {text && (
        <p {...textProps} className={clsx('text-sm opacity-95', textProps?.className)}>
          {text}
        </p>
      )}
    </div>
  );
};

export default NoItemsInCart;
