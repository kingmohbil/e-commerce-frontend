'use client';
import { Card } from '@nextui-org/react';
import React from 'react';

export interface FormSectionProps {
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ children }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card className="w-96 flex items-center p-10 pb-16 gap-5">{children}</Card>
    </form>
  );
};

export default FormSection;
