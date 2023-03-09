import classes from "./Menu.module.css";
import menuBtn from "../../../assets/menu-btn.svg";
import breakfastImg from "../../../assets/breakfast.png";
import dinnerImg from "../../../assets/dinner.png";
import supperImg from "../../../assets/supper.png";
import extraImg from "../../../assets/extra.svg";
import Modal from "../../UI/Modal";
import MenuForm from "./MenuForm";
import { menuActions } from "../../store/menu-slice";
import { useDispatch, useSelector } from "react-redux";
const Menu = () => {
  const showModal = useSelector((state) => state.menuReducer.showModal);
  const dispatch = useDispatch();

  const addMealHandler = () => {
    dispatch(menuActions.showModal("add"));
  };
  return (
    <>
      {showModal === true && (
        <Modal>
          <MenuForm />
        </Modal>
      )}
      <div className={classes["menu-layout"]}>
        <div className={classes["menu-container"]}>
          <div className={classes["menu-column"]}>
            <div className={classes["logo-box"]}>
              <span className={classes.logo}>Plan.this</span>
              <img src={menuBtn} />
            </div>
            <span className={classes.title}>FOOD MENU</span>
            <div className={classes["breakfast-container"]}>
              <span className={classes["meal-type"]}>Breakfast</span>
              <ul className={classes["meal-list"]}>
                <li className={classes["meal-item"]}>
                  <img src={breakfastImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={breakfastImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={breakfastImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={breakfastImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={breakfastImg} />
                  Eggs with Ham
                </li>
              </ul>
            </div>
          </div>
          <div className={classes["menu-column"]}>
            <div className={classes["dinner-container"]}>
              <span className={classes["meal-type"]}>Dinner</span>
              <ul className={classes["meal-list"]}>
                <li className={classes["meal-item"]}>
                  <img src={dinnerImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={dinnerImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={dinnerImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={dinnerImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={dinnerImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={dinnerImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={dinnerImg} />
                  Eggs with Ham
                </li>
              </ul>
              <button
                onClick={addMealHandler}
                className={classes["add-meal-btn"]}
              >
                Add meal
              </button>
            </div>
          </div>
          <div className={classes["menu-column"]}>
            <div className={classes["supper-container"]}>
              <span className={classes["meal-type"]}>Supper</span>
              <ul className={classes["meal-list"]}>
                <li className={classes["meal-item"]}>
                  <img src={supperImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={supperImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={supperImg} />
                  Eggs with Ham
                </li>
              </ul>
            </div>
            <div className={classes["extra-container"]}>
              <span className={classes["meal-type"]}>Extra</span>
              <ul className={classes["meal-list"]}>
                <li className={classes["meal-item"]}>
                  <img src={extraImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={extraImg} />
                  Eggs with Ham
                </li>
                <li className={classes["meal-item"]}>
                  <img src={extraImg} />
                  Eggs with Ham
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
