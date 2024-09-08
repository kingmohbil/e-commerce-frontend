import { UserType } from '@/types/user';

export type OrderStatuses =
  | 'processing'
  | 'processed'
  | 'waiting-for-delivery'
  | 'delivering'
  | 'delivered';

export interface OrderItem {
  product: string;
  size: string;
  quantity: number;
}

export interface OrderItemType extends OrderItem {
  name: string;
  price: number;
}

export interface OrderType<T extends 'populated' | '' = ''> {
  _id: string;
  user: T extends 'populated' ? UserType : string;
  items: OrderItemType[];
  address: string;
  paymentMethod: PaymentMethod;
  status: OrderStatuses;
  total: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateParams {
  items: OrderItem[];
  address: strings;
}

export interface CreateResponse extends BackendResponse {
  order: OrderType;
}

export interface GetAllParams {}

export interface GetAllResponse extends BackendResponse {
  orders: OrderType<'populated'>[];
  count: number;
}
