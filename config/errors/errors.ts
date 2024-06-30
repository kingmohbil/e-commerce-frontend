import { userConfig } from '../user';

const ERROR_MESSAGES = {
  INVALID_OBJECT_ID: 'The id provided is invalid object id',
  INVALID_EMAIL: 'Please provide a valid email address',
  INVALID_PASSWORD:
    'The password should contain one upper case, one lower case, one digit and one special character',
  INVALID_FIRST_NAME: `First name should be at least ${userConfig.validation.firstName.length} characters long`,
  INVALID_LAST_NAME: `Last name should be at least ${userConfig.validation.lastName.length} characters long`,
  INVALID_PHONE_NUMBER: 'Please provide a valid phone number',
  INVALID_DATE_OF_BIRTH: `The user should be at least ${userConfig.validation.age} years old`,
  DUPLICATE_USER_EMAIL: 'There is already an account associated with this email address',
  DUPLICATE_USER_PHONE_NUMBER: 'There is already an account associated with this phone number',
  INCORRECT_PASSWORD: 'Password is incorrect',
  EMAIL_NOT_FOUND: 'Email address was not found',
  USER_ID_NOT_PROVIDED: 'Please provide user id',
  USER_ID_NOT_FOUND: 'User was not found',
  SERVER_ERROR: `Oops that's can't be right`,
} as const;

export default ERROR_MESSAGES;
