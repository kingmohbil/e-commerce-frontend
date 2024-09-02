'use client';
import React, { FC } from 'react';
import { ThemeColors, Button } from '@nextui-org/react';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

export interface FlashMessageProps extends React.PropsWithChildren {
  color?: keyof ThemeColors;
  open?: boolean;
  onClose?: () => void;
}

const FlashMessage: FC<FlashMessageProps> = ({ color = 'default', onClose, open, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          animate={{ x: 0 }}
          className={`${'bg-' + color} fixed bottom-0 right-0 z-50 m-5 py-2 pl-4 shadow-lg rounded-md`}
          exit={{ x: 200 }}
          initial={{ x: 200 }}
          transition={{ type: 'tween' }}
        >
          <div
            className={`${'text-' + color + '-foreground'} flex items-center justify-between w-fit gap-2`}
          >
            {children}
            {onClose && (
              <Button
                isIconOnly
                className={`${'text-' + color + '-foreground'} mr-1`}
                radius="full"
                variant="light"
                onPress={onClose}
              >
                {<AiOutlineClose size="20px" />}
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlashMessage;
