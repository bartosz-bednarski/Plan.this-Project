export type Meal = {
  name: string;
  ingredients: string;
  directions: string;
};

export type FoodInitialState = {
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
  }
