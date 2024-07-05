'use client';
import React, { FC } from 'react';
import { motion, MotionProps } from 'framer-motion';

export interface AnimateChildrenProps extends MotionProps {}

const AnimateChildren: FC<AnimateChildrenProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

export default AnimateChildren;
