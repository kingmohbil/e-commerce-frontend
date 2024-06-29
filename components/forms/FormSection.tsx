'use client';
import React, { ComponentProps } from 'react';
import { Card } from '@nextui-org/react';

export interface FormSectionProps extends ComponentProps<'form'> {
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ children, ...props }) => {
  return (
    <form {...props}>
      <Card className="w-96 flex items-center p-10 pb-16 gap-5">{children}</Card>
    </form>
  );
};

export default FormSection;
