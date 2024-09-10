'use client';
import React, { FC } from 'react';
import cn from 'clsx';
import { Button, ButtonProps } from '@nextui-org/button';

import { Metadata } from '@/types/product';
import { sortMetadata } from '@/utils/common';

export interface SizesProps {
  className?: string;
  metadata: Metadata[];
  onChange: (size: Metadata) => void;
  value: Metadata;
  buttonProps?: ButtonProps;
}

const Sizes: FC<SizesProps> = ({ value, buttonProps, ...props }) => {
  return (
    <div className={cn('flex gap-2 flex-wrap', props.className)}>
      {sortMetadata(props.metadata).map((item) => (
        <Button
          key={item.size}
          isDisabled={item.inStock < 1}
          radius={'full'}
          size="sm"
          onPress={() => props.onChange(item)}
          {...buttonProps}
          className={cn(
            `capitalize border-primary ${value.size === item.size ? 'border-2' : ''}`,
            buttonProps?.className
          )}
        >
          {item.size}
        </Button>
      ))}
    </div>
  );
};

export default Sizes;
