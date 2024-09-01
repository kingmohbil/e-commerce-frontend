import React, { FC } from 'react';
import { Button, Card, CardHeader } from '@nextui-org/react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

import { useAppDispatch } from '@/hooks';
import { add, remove } from '@/redux/slices/cart';

export interface ItemProps {
  item: CartItem;
}

const Item: FC<ItemProps> = ({ item }) => {
  const dispatcher = useAppDispatch();

  return (
    <Card>
      <CardHeader className="justify-between">
        <div className="flex gap-5 self-start pt-1">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-medium font-semibold leading-none text-default-600">{item.name}</h4>
            {item.size && (
              <h5 className="text-small tracking-tight text-default-400">{item.size}</h5>
            )}
          </div>
        </div>
        <div className="flex-col flex items-end gap-2">
          <p className="text-small tracking-tight text-default-400">$ {item.price.toFixed(2)}</p>
          <div className="flex gap-2 items-center">
            <Button isIconOnly color="secondary" size="sm" onPress={() => dispatcher(add(item))}>
              <FaPlus />
            </Button>
            <p className="text-medium">{item.count}</p>
            <Button isIconOnly color="secondary" size="sm" onPress={() => dispatcher(remove(item))}>
              <FaMinus />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Item;
