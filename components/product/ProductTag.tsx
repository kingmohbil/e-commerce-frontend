import cn from 'clsx';
import { Chip, ChipProps } from '@nextui-org/react';

export interface ProductTagProps {
  containerClassName?: string;
  className?: string;
  priceChipProps?: ChipProps;
  name: string;
  price: number;
  currency?: string;
}

const ProductTag: React.FC<ProductTagProps> = ({ currency = 'USD', ...props }) => {
  return (
    <div className={cn('flex flex-col items-start gap-4', props.containerClassName)}>
      <h3 className={cn('text-4xl font-semibold', props?.className)}>{props?.name}</h3>
      <Chip color="primary" size="lg" {...props?.priceChipProps}>
        ${props.price.toFixed(2)} {currency}
      </Chip>
    </div>
  );
};

export default ProductTag;
