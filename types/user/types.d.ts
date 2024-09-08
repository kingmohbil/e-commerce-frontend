export interface UserType {
  _id: string;
  firstName: string;
  lastName: string;
  email: {
    emailAddress: string;
    verified: boolean;
  };
  phone: {
    phoneNumber: string;
    verified: boolean;
  };
  dateOfBirth: string;
  createdAt: string;
  role: UserRoles;
}
