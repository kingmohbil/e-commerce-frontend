'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import { Input } from '@nextui-org/react';
import Link from 'next/link';

import { login } from './action';

import messages from '@/config/languages/en';
import Typography from '@/components/Typography';
import PasswordInput from '@/components/inputs/PasswordInput';
import FormSection from '@/components/forms/FormSection';
import { ServerActionButton } from '@/components';

export interface LogInFormProps {}

const LogInForm: React.FC<LogInFormProps> = ({}) => {
  const [{ errors }, action] = useFormState(login, { success: false });

  return (
    <FormSection action={action}>
      <Typography className="pb-10" variant="h3">
        {messages.loginForm.title}
      </Typography>
      <Input
        isRequired
        errorMessage={errors?.email}
        id="email"
        isInvalid={!!errors?.email}
        label={messages.loginForm.emailField}
        labelPlacement="outside"
        name="email"
        placeholder={messages.loginForm.emailFieldPlaceholder}
        size="lg"
        variant="bordered"
      />
      <PasswordInput
        isRequired
        errorMessage={errors?.password}
        id="password"
        isInvalid={!!errors?.password}
        label={messages.loginForm.passwordField}
        labelPlacement="outside"
        name="password"
        placeholder={messages.loginForm.passwordFieldPlaceholder}
        size="lg"
        variant="bordered"
      />
      <ServerActionButton fullWidth className="mt-3" color="primary" variant="solid">
        {messages.loginForm.submitTitle}
      </ServerActionButton>
      <span className="text-sm w-full">
        {messages.loginForm.noAccount} &nbsp;
        <Link className="text-sky-500" href="/signup">
          {messages.loginForm.registerNow}
        </Link>
      </span>
    </FormSection>
  );
};

export default LogInForm;
