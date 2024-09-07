import { useAppDispatch } from '@/redux/store';
import { setFlashMessage, FlashMessageType } from '@/redux/slices/flash-message';

const useFlashMessage = () => {
  const dispatcher = useAppDispatch();

  return {
    send: (params: FlashMessageType) => dispatcher(setFlashMessage(params)),
  };
};

export { useFlashMessage };
