export {};

declare global {
  interface BackendResponse {
    message: string;
  }

  type PaymentMethods = 'cash';

  type IconSvgProps = React.ComponentProps<'svg'> & {
    size?: number;
  };

  type AuthenticatedUser = {
    _id: string;
  };

  type UserType = AuthenticatedUser & {
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
    metadata: Metadata[];
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

  interface CartItem {
    id: string;
    name: string;
    count: number;
    price: number;
    size: string;
  }

  interface CartType {
    items: CartItem[];
    total: number;
  }

  type ServerActionResponseType<T = any> = {
    success: boolean;
    data?: T;
    errors?: FlattenError;
    message?: string;
  };

  type ServerActionResponse<T = any> = Promise<ServerActionResponseType<T>>;

  type UserRoles = 'admin' | 'user';
}
