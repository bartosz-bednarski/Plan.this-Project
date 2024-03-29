export type Meal = {
  name: string;
  ingredients: string;
  directions: string;
};

export type FoodInitialState = {
  [key: string]: any;
  meals: [];
  date: string;
  todayMeals: any[];
  Breakfast: Meal;
  Dinner: Meal;
  Supper: Meal;
  Extra: Meal;
  foodIsUpdated: boolean;
  displayMenu: {
    value: boolean;
    type: string;
    action: string;
    id: string;
  };
};
export type SendUpdateMeal = {
  date: string;
  type: string;
  name: string;
  id?: string | null;
  ingredients: string;
  directions: string;
};

export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
