export interface Metadata {
  price: number;
  size: string;
  inStock: number;
}

export interface ProductType {
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
}
