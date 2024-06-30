import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';

export interface AnimatedImageProps extends ImageProps {}

const AnimatedImage: FC<AnimatedImageProps> = ({ ...props }) => {
  return (
    <div className="overflow-hidden relative w-full h-full">
      <Image
        {...props}
        className={clsx(
          'object-cover transition-all duration-300 ease-in-out hover:scale-[1.2]',
          props.className
        )}
      />
    </div>
  );
};

export default AnimatedImage;
