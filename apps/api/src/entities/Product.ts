export interface IngredientEntity {
  name: string;
  icon: string;
}

export interface ProductEntity {
  id?: string;
  name: string;
  description: string;
  imagePath: string;
  price: number;
  ingredients: IngredientEntity[];
  category: string;
}
