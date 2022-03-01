export type Food = {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
};

export type FormFood = Omit<Food, "id" | "available">;
