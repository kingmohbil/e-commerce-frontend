import { useAppDispatch, useAppSelector } from '@/redux/store';
import { actions, AddParams, RemoveParams } from '@/redux/slices/cart';

const useCart = () => {
  const dispatcher = useAppDispatch();
  const cart = useAppSelector((store) => store.cart);

  return {
    cart,
    add: (data: AddParams) => dispatcher(actions.add(data)),
    remove: (data: RemoveParams) => dispatcher(actions.remove(data)),
    clear: () => dispatcher(actions.clear()),
  };
};

export { useCart };
