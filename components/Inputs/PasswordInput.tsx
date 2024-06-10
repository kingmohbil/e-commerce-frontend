'use client';
import React from 'react';
import { InputProps, Input } from '@nextui-org/input';
import { IoMdEye } from 'react-icons/io';
import { IoMdEyeOff } from 'react-icons/io';

export interface PasswordInputProps extends InputProps {}

const PasswordInput: React.FC<PasswordInputProps> = ({ ...props }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Input
        className="max-w-xs"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <IoMdEyeOff className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <IoMdEye className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        placeholder="Enter your password"
        type={isVisible ? 'text' : 'password'}
        {...props}
      />
    </>
  );
};

export default PasswordInput;
