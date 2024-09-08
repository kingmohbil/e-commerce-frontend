'use client';
import { Textarea, TextAreaProps } from '@nextui-org/react';
import React, { FC } from 'react';

import { ServerActionButton, ServerActionButtonProps } from '@/components';

export interface FormProps extends TextAreaProps {
  submitTitle?: string;
  submitProps?: ServerActionButtonProps;
}

const Form: FC<FormProps> = ({ submitTitle, submitProps, ...props }) => {
  return (
    <form>
      <Textarea isRequired id="address" name="address" size="lg" variant="bordered" {...props} />
      <ServerActionButton
        fullWidth
        className="mt-3"
        color="primary"
        variant="solid"
        {...submitProps}
      >
        {submitTitle}
      </ServerActionButton>
    </form>
  );
};

export default Form;
