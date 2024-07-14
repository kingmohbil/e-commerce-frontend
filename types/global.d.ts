export {};

declare global {
  type AuthenticatedUser = {
    _id: string;
  };

  type User = AuthenticatedUser & {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    createdAt: string;
    email: {
      emailAddress: string;
      verified: boolean;
    };
    phone: {
      phoneNumber: string;
      verified: boolean;
    };
  };

  type Metadata = {
    price: number;
    size: string;
    inStock: number;
  };

  type ProductType = {
    _id: string;
    categoryId: string;
    name: string;
    description: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    metadata: MetaData[];
    totalStock: number;
    imageURL: string;
    defaultPrice: number;
  };

  type CategoryType = {
    _id: string;
    name: string;
    description: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
  };

  type Prettify<T> = {
    [K in keyof T]: T[K];
  } & {};

  type LocaleParams = {
    params: {
      locale: string;
    };
  };
}
