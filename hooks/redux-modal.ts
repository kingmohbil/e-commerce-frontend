import { actions } from '@/redux/slices/modal';
import { useAppDispatch, useAppSelector } from '@/redux/store';

const useReduxModal = (modalId: string) => {
  const dispatcher = useAppDispatch();
  const modal = useAppSelector((store) => store.modal);

  return {
    open: (data: any) => dispatcher(actions.open({ data, modalId })),
    isOpen: modal.isOpen,
    data: modal.data,
    modalId: modal.modalId,
    set: () => (data: any) => dispatcher(actions.set({ data, modalId })),
    close: () => dispatcher(actions.close()),
  };
};

export { useReduxModal };
