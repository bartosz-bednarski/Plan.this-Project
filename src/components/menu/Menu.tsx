import classes from "./Menu.module.css";
import menuBtn from "../../assets/menu-btn.svg";
import breakfastImg from "../../assets/breakfast.png";
import dinnerImg from "../../assets/dinner.png";
import supperImg from "../../assets/supper.png";
import extraImg from "../../assets/extra.svg";
import Modal from "../UI/Modal";
import MenuForm from "./MenuForm";
import { menuActions } from "../store/menu-slice";
import { useEffect } from "react";
import { fetchMenuData } from "../store/menu-actions";
import MenuItem from "./MenuItem";
import { useAppDispatch } from "../store";
import { useAppSelector } from "../store";
const Menu: React.FC = () => {
  const dispatch = useAppDispatch();

  const menuIsUpdated = useAppSelector(
    (state) => state.menuReducer.menuIsUpdated
  );
  useEffect(() => {
    dispatch(fetchMenuData());
  }, [menuIsUpdated]);
  const breakfast = useAppSelector((state) => state.menuReducer.menuBreakfast);
  const dinner = useAppSelector((state) => state.menuReducer.menuDinner);
  const supper = useAppSelector((state) => state.menuReducer.menuSupper);
  const extra = useAppSelector((state) => state.menuReducer.menuExtra);

  const showModal = useAppSelector((state) => state.menuReducer.showModal);

  return (
    <>
      {showModal === true && (
        <Modal>
          <MenuForm />
        </Modal>
      )}
      <div className={classes["menu-layout"]}>
        <main className={classes["menu-container"]}>
          <section className={classes["menu-column"]}>
            <header className={classes["logo-box"]}>
              <span className={classes.logo}>Plan.this</span>
              <img src={menuBtn} />
            </header>
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
          </section>
          <section className={classes["menu-column"]}>
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
          </section>
          <section className={classes["menu-column"]}>
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
          </section>
        </main>
      </div>
    </>
  );
};

export default Menu;
