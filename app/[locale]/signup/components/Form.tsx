'use client';
import React from 'react';
import { Input, DateInput, Card } from '@nextui-org/react';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { useTranslation } from 'react-i18next';

import { signup } from './action';

import { ServerActionButton } from '@/components';
import Typography from '@/components/Typography';
import PasswordInput from '@/components/inputs/PasswordInput';

export interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = ({}) => {
  const [res, action] = useFormState(signup, { success: false });
  const { t } = useTranslation('signup-form');

  return (
    <form action={action}>
      <Card className="w-[500px] flex items-center p-10 py-5 gap-3">
        <Typography className="pb-5" variant="h3">
          {t('title.form')}
        </Typography>
        <div className="flex flex-row gap-4">
          <Input
            isRequired
            errorMessage={res?.errors?.firstName}
            isInvalid={!!res?.errors?.firstName}
            label={t('label.firstName')}
            labelPlacement="outside"
            name="firstName"
            placeholder={t('placeholder.firstName')}
            variant="bordered"
          />
          <Input
            isRequired
            errorMessage={res?.errors?.lastName}
            isInvalid={!!res?.errors?.lastName}
            label={t('label.lastName')}
            labelPlacement="outside"
            name="lastName"
            placeholder={t('placeholder.lastName')}
            variant="bordered"
          />
        </div>
        <Input
          isRequired
          errorMessage={res?.errors?.email}
          isInvalid={!!res?.errors?.email}
          label={t('label.email')}
          labelPlacement="outside"
          name="email"
          placeholder={t('placeholder.email')}
          variant="bordered"
        />
        <PasswordInput
          isRequired
          errorMessage={res?.errors?.password}
          isInvalid={!!res?.errors?.password}
          label={t('label.password')}
          labelPlacement="outside"
          name="password"
          placeholder={t('placeholder.password')}
          variant="bordered"
        />
        <PasswordInput
          isRequired
          errorMessage={res?.errors?.confirmPassword}
          isInvalid={!!res?.errors?.confirmPassword}
          label={t('label.confirmPassword')}
          labelPlacement="outside"
          name="confirmPassword"
          placeholder={t('placeholder.confirmPassword')}
          variant="bordered"
        />
        <Input
          isRequired
          errorMessage={res?.errors?.phoneNumber}
          isInvalid={!!res?.errors?.phoneNumber}
          label={t('label.phoneNumber')}
          labelPlacement="outside"
          name="phoneNumber"
          placeholder={t('placeholder.phoneNumber')}
          variant="bordered"
        />
        <DateInput
          isRequired
          errorMessage={res?.errors?.dateOfBirth}
          isInvalid={!!res?.errors?.dateOfBirth}
          label={t('label.dateOfBirth')}
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
          {t('button.submit')}
        </ServerActionButton>
        <span className="text-sm w-full">
          {t('haveAnAccount')} &nbsp;
          <Link className="text-sky-500" href="/login">
            {t('login')}
          </Link>
        </span>
      </Card>
    </form>
  );
};

export default SignUpForm;
