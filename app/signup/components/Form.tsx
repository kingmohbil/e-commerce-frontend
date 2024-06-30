'use client';
import React from 'react';
import { Button, Input, DateInput, DateValue, Card } from '@nextui-org/react';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import { signup } from './action';

import { ServerActionButton } from '@/components';
import messages from '@/config/languages/en';
import Typography from '@/components/Typography';
import PasswordInput from '@/components/inputs/PasswordInput';

export interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = ({}) => {
  const [{ errors }, action] = useFormState(signup, { success: false });

  // const signup = async (e: FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     if (confirmPassword === password) {
  //       await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/auth/signup`, {
  //         firstName,
  //         lastName,
  //         email,
  //         password,
  //         phoneNumber,
  //         dateOfBirth,
  //       });

  //       setErrorMessages({});
  //       router.push('/signin');
  //     } else setErrorMessages({ ...errorMessages, confirmPassword: 'passwords does not match' });
  //     setIsLoading(false);
  //   } catch (error: any) {
  //     const errors = error.response.data.error?.issues;
  //     const newErrors: any = {};

  //     errors?.forEach((error: any) => {
  //       newErrors[error.path[0]] = error.message;
  //     });
  //     setErrorMessages(newErrors);
  //     setIsLoading(false);
  //   }
  // };

  return (
    <form action={action}>
      <Card className="w-[500px] flex items-center p-10 py-5 gap-3">
        <Typography className="pb-5" variant="h3">
          Sign Up
        </Typography>
        <div className="flex flex-row gap-4">
          <Input
            isRequired
            errorMessage={errors?.firstName}
            isInvalid={!!errors?.firstName}
            label={messages.signupForm.firstNameField}
            labelPlacement="outside"
            name="firstName"
            placeholder={messages.signupForm.firstNameField}
            variant="bordered"
          />
          <Input
            isRequired
            errorMessage={errors?.lastName}
            isInvalid={!!errors?.lastName}
            label={messages.signupForm.lastNameField}
            labelPlacement="outside"
            name="lastName"
            placeholder={messages.signupForm.lastNamePlaceholder}
            variant="bordered"
          />
        </div>
        <Input
          isRequired
          errorMessage={errors?.email}
          isInvalid={!!errors?.email}
          label={messages.signupForm.emailField}
          labelPlacement="outside"
          name="email"
          placeholder={messages.signupForm.emailFieldPlaceholder}
          variant="bordered"
        />
        <PasswordInput
          isRequired
          errorMessage={errors?.password}
          isInvalid={!!errors?.password}
          label={messages.signupForm.passwordField}
          labelPlacement="outside"
          name="password"
          placeholder={messages.signupForm.passwordPlaceholder}
          variant="bordered"
        />
        <PasswordInput
          isRequired
          errorMessage={errors?.confirmPassword}
          isInvalid={!!errors?.confirmPassword}
          label={messages.signupForm.confirmPasswordField}
          labelPlacement="outside"
          name="confirmPassword"
          placeholder={messages.signupForm.passwordPlaceholder}
          variant="bordered"
        />
        <Input
          isRequired
          errorMessage={errors?.phoneNumber}
          isInvalid={!!errors?.phoneNumber}
          label={messages.signupForm.phoneNumberField}
          labelPlacement="outside"
          name="phoneNumber"
          placeholder={messages.signupForm.phoneNumberPlaceholder}
          variant="bordered"
        />
        <DateInput
          isRequired
          errorMessage={errors?.dateOfBirth}
          isInvalid={!!errors?.dateOfBirth}
          label={messages.signupForm.dateOfBirthField}
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
          {messages.signupForm.submitTitle}
        </ServerActionButton>
        <span className="text-sm w-full">
          {messages.signupForm.haveAccount} &nbsp;
          <Link className="text-sky-500" href="/login">
            {messages.signupForm.login}
          </Link>
        </span>
      </Card>
    </form>
  );
};

export default SignUpForm;
