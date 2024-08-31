'use client';
import React from 'react';
import { useFormState } from 'react-dom';
import { Input } from '@nextui-org/react';
import Link from 'next/link';

import { login } from './action';

import Typography from '@/components/Typography';
import PasswordInput from '@/components/inputs/PasswordInput';
import FormSection from '@/components/forms/FormSection';
import { ServerActionButton } from '@/components';
import paths from '@/config/paths.json';
import text from '@/config/languages/en/text.json';

export interface LogInFormProps {}

const loginFormText = text.screens.login;

const LogInForm: React.FC<LogInFormProps> = ({}) => {
  const [data, action] = useFormState(login, { success: false });

  return (
    <FormSection action={action}>
      <Typography className="pb-10" variant="h3">
        {loginFormText.title.form}
      </Typography>
      <Input
        isRequired
        errorMessage={data?.errors?.email}
        id="email"
        isInvalid={!!data?.errors?.email}
        label={loginFormText.label.email}
        labelPlacement="outside"
        name="email"
        placeholder={loginFormText.placeholder.email}
        size="lg"
        variant="bordered"
      />
      <PasswordInput
        isRequired
        errorMessage={data?.errors?.password}
        id="password"
        isInvalid={!!data?.errors?.password}
        label={loginFormText.label.password}
        labelPlacement="outside"
        name="password"
        placeholder={loginFormText.placeholder.password}
        size="lg"
        variant="bordered"
      />
      <ServerActionButton fullWidth className="mt-3" color="primary" variant="solid">
        {loginFormText.button.submit}
      </ServerActionButton>
      <span className="text-sm w-full">
        {loginFormText.doesHaveAccount} &nbsp;
        <Link className="text-sky-500" href={paths.signup}>
          {loginFormText.registerNow}
        </Link>
      </span>
    </FormSection>
  );
};

export default LogInForm;
