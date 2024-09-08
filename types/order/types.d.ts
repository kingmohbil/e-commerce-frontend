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

export interface OrderType {
  _id: string;
  user: string;
  items: (OrderItem & { name: string; price: number })[];
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
