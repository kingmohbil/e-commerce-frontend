'use client';
import React from 'react';
import { Input, DateInput, Card } from '@nextui-org/react';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import { signup } from './action';

import paths from '@/config/paths.json';
import text from '@/config/languages/en/text.json';
import { ServerActionButton } from '@/components';
import Typography from '@/components/Typography';
import PasswordInput from '@/components/inputs/PasswordInput';

export interface SignUpFormProps {}

const signupFormText = text.screens.signup;

const SignUpForm: React.FC<SignUpFormProps> = ({}) => {
  const [res, action] = useFormState(signup, { success: false });

  return (
    <form action={action}>
      <Card className="w-[500px] flex items-center p-10 py-5 gap-3">
        <Typography className="pb-5" variant="h3">
          {signupFormText.title.form}
        </Typography>
        <div className="flex flex-row gap-4">
          <Input
            isRequired
            errorMessage={res?.errors?.firstName}
            isInvalid={!!res?.errors?.firstName}
            label={signupFormText.label.firstName}
            labelPlacement="outside"
            name="firstName"
            placeholder={signupFormText.placeholder.firstName}
            variant="bordered"
          />
          <Input
            isRequired
            errorMessage={res?.errors?.lastName}
            isInvalid={!!res?.errors?.lastName}
            label={signupFormText.label.lastName}
            labelPlacement="outside"
            name="lastName"
            placeholder={signupFormText.placeholder.lastName}
            variant="bordered"
          />
        </div>
        <Input
          isRequired
          errorMessage={res?.errors?.email}
          isInvalid={!!res?.errors?.email}
          label={signupFormText.label.email}
          labelPlacement="outside"
          name="email"
          placeholder={signupFormText.placeholder.email}
          variant="bordered"
        />
        <PasswordInput
          isRequired
          errorMessage={res?.errors?.password}
          isInvalid={!!res?.errors?.password}
          label={signupFormText.label.password}
          labelPlacement="outside"
          name="password"
          placeholder={signupFormText.placeholder.password}
          variant="bordered"
        />
        <PasswordInput
          isRequired
          errorMessage={res?.errors?.confirmPassword}
          isInvalid={!!res?.errors?.confirmPassword}
          label={signupFormText.label.confirmPassword}
          labelPlacement="outside"
          name="confirmPassword"
          placeholder={signupFormText.placeholder.confirmPassword}
          variant="bordered"
        />
        <Input
          isRequired
          errorMessage={res?.errors?.phoneNumber}
          isInvalid={!!res?.errors?.phoneNumber}
          label={signupFormText.label.phoneNumber}
          labelPlacement="outside"
          name="phoneNumber"
          placeholder={signupFormText.placeholder.phoneNumber}
          variant="bordered"
        />
        <DateInput
          isRequired
          errorMessage={res?.errors?.dateOfBirth}
          isInvalid={!!res?.errors?.dateOfBirth}
          label={signupFormText.label.dateOfBirth}
          labelPlacement="outside"
          name="dateOfBirth"
          variant="bordered"
        />
        <ServerActionButton
          fullWidth
          className="mt-3"
          color="primary"
          type="submit"
          variant="solid"
        >
          {signupFormText.button.submit}
        </ServerActionButton>
        <span className="text-sm w-full">
          {signupFormText.haveAnAccount} &nbsp;
          <Link className="text-sky-500" href={paths.login}>
            {signupFormText.login}
          </Link>
        </span>
      </Card>
    </form>
  );
};

export default SignUpForm;
