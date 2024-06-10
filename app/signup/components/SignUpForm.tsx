'use client';
import React from 'react';
import { Button, Input, DateInput } from '@nextui-org/react';
import Link from 'next/link';

import Typography from '@/components/Typography';
import PasswordInput from '@/components/Inputs/PasswordInput';
import FormSection from '@/components/Forms/FormSection';

export interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = ({}) => {
  return (
    <FormSection>
      <Typography className="pb-7" variant="h3">
        Sign Up
      </Typography>
      <Input placeholder="First name" size="lg" variant="bordered" />
      <Input placeholder="Last name" size="lg" variant="bordered" />
      <Input placeholder="example@domain.com" size="lg" variant="bordered" />
      <PasswordInput size="lg" variant="bordered" />
      <Input placeholder="Phone number" size="lg" variant="bordered" />
      <DateInput size="lg" variant="bordered" />
      <Button fullWidth className="mt-3" color="primary" variant="solid">
        Sign Up
      </Button>
      <span className="text-sm w-full">
        Already have an account? &nbsp;
        <Link className="text-sky-500" href="/signin">
          Sign In now
        </Link>
      </span>
    </FormSection>
  );
};

export default SignUpForm;
