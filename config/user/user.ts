export const userConfig = {
  validation: {
    firstName: {
      length: 2,
    },
    lastName: {
      length: 2,
    },
    password: {
      length: 8,
      upperCase: 1,
      lowerCase: 1,
      symbols: 1,
      digits: 1,
      spaces: 0,
    },
    age: 18,
  },
  testUser: {
    firstName: 'test',
    lastName: 'test',
    email: { emailAddress: 'test@gmail.com', verified: false },
    password: 'Admin@123',
    phone: { phoneNumber: '12345678912', verified: false },
    dateOfBirth: '2003-01-01T00:00:00.000Z',
  },
} as const;
