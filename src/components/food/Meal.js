import classes from "./Meal.module.css";
import breakfast from "../../assets/breakfast.png";
import dinner from "../../assets/dinner.png";
import supper from "../../assets/supper.png";

const Meal = (props) => {
  //   const [mealType, setMealType] = useState({ type: "Meal Type", img: dinner });
  //   const mealTypeHandler = ()
  //   if (props.type.type === "breakfast") {
  //     setMealType({ type: "Breakfast", img: breakfast });
  //   }
  //   if (props.type.type === "dinner") {
  //     setMealType({ type: "Dinner", img: dinner });
  //   }
  //   if (props.type.type === "supper") {
  //     setMealType({ type: "Supper", img: supper });
  //   }

  return (
    <div className={classes["meal-box"]}>
      <span className={classes["meal-type"]}>{props.type}</span>
      <span className={classes["meal-name"]}>Eggs with ham</span>
      {props.type === "Breakfast" && <img src={breakfast} />}
      {props.type === "Dinner" && <img src={dinner} />}
      {props.type === "Supper" && <img src={supper} />}

      <span className={classes["meal-ingredients"]}>INGREDIENTS</span>
      <ul>
        <li>eggs</li>
        <li>eggs</li>
        <li>eggs</li>
        <li>eggs</li>
        <li>eggs</li>
        <li>eggs</li>
        <li>eggs</li>
      </ul>
    </div>
  );
};
export default Meal;
