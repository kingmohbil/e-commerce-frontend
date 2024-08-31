'use client';
import React, { FC, ComponentProps } from 'react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export interface DrawerProps {
  direction?: 'left' | 'right';
  dialog?: ComponentProps<'div'>;
  open: boolean;
  onClose?: () => void;
}

const Drawer: FC<DrawerProps> = ({ direction = 'left', dialog, open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed min-h-svh min-w-full z-50 flex">
          {/* Overlay component */}
          <motion.div
            animate={{ opacity: 0.8 }}
            className="bg-black/40 flex-1 "
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            role="presentation"
            onClick={onClose}
          />
          <motion.div
            animate={{ x: '100%' }}
            className={clsx(
              `fixed min-h-svh bg-white w-full md:w-[40%] ${direction}-0`,
              dialog?.className
            )}
            exit={{ x: 0 }}
            initial={{ x: 0 }}
          >
            <div {...dialog}>{/* Overlay component */}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
