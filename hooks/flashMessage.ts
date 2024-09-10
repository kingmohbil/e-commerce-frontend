import { useAppDispatch } from '@/redux/store';
import { setFlashMessage, FlashMessageType } from '@/redux/slices/flash-message';

export type { FlashMessageType };

const useFlashMessage = () => {
  const dispatcher = useAppDispatch();

  return {
    send: (params: FlashMessageType) => dispatcher(setFlashMessage(params)),
  };
};

export { useFlashMessage };
