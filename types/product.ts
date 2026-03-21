// types/product.ts

export type ProductCategory =
  | "Food & Beverages"
  | "Beauty & Personal Care"
  | "Electronics"
  | "Clothing & Apparel"
  | "Home & Living"
  | "Health & Wellness"
  | "Agriculture"
  | "Other";

export type ProductView = "list" | "add" | "edit";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory | "";
  price: number;
  desc: string;
  delivery: string;
  inStock: boolean;
  img: string | null;
}
