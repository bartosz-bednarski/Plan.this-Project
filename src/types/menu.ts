export type MenuInitialState = {
  [key: string]: any;
  menuMeals: any[];
  menuBreakfast: any[];
  menuDinner: any[];
  menuSupper: any[];
  menuExtra: any[];
  actionType: string;
  showModal: boolean;
  menuIsUpdated: boolean;
  mealToUpdate: MealToUpdate;
};
export type sendUpdateNewMeal = {
  type: string;
  id?: string | null;
  date?: string;
  name: string;
  ingredients: string;
  directions: string;
};

export type MealToUpdate = {
  id?: string;
  type: string;
  name: string;
  ingredients: string;
  directions: string;
};
