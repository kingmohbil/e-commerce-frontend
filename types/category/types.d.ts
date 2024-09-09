import { ProductType } from '../product';
export interface CategoryType {
  _id: string;
  name: string;
  description: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetAllResponse {
  count: number;
  categories: CategoryType[];
}

export interface GetAllProductsByIdResponse extends BackendResponse {
  count: number;
  category: CategoryType;
  products: Omit<ProductType, 'categoryId'>[];
}
