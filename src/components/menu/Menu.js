import classes from "./Menu.module.css";
import menuBtn from "../../assets/menu-btn.svg";
import breakfastImg from "../../assets/breakfast.png";
import dinnerImg from "../../assets/dinner.png";
import supperImg from "../../assets/supper.png";
import extraImg from "../../assets/extra.svg";
import Modal from "../UI/Modal";
import MenuForm from "./MenuForm";
import { menuActions } from "../store/menu-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMenuData } from "../store/menu-actions";
import MenuItem from "./MenuItem";
const Menu = () => {
  const dispatch = useDispatch();

  const menuIsUpdated = useSelector((state) => state.menuReducer.menuIsUpdated);
  useEffect(() => {
    dispatch(fetchMenuData());
  }, [menuIsUpdated]);
  const breakfast = useSelector((state) => state.menuReducer.menuBreakfast);
  const dinner = useSelector((state) => state.menuReducer.menuDinner);
  const supper = useSelector((state) => state.menuReducer.menuSupper);
  const extra = useSelector((state) => state.menuReducer.menuExtra);

  console.log(breakfast);
  const showModal = useSelector((state) => state.menuReducer.showModal);

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
                {breakfast.map((item) => (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    img={breakfastImg}
                    data={item}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className={classes["menu-column"]}>
            <div className={classes["dinner-container"]}>
              <span className={classes["meal-type"]}>Dinner</span>
              <ul className={classes["meal-list"]}>
                {dinner.map((item) => (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    img={dinnerImg}
                    data={item}
                  />
                ))}
              </ul>
              <button
                onClick={() => {
                  dispatch(menuActions.showModal("Add"));
                }}
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
                {supper.map((item) => (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    img={supperImg}
                    data={item}
                  />
                ))}
              </ul>
            </div>
            <div className={classes["extra-container"]}>
              <span className={classes["meal-type"]}>Extra</span>
              <ul className={classes["meal-list"]}>
                {extra.map((item) => (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    img={extraImg}
                    data={item}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
