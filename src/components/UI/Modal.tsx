import classes from "./Modal.module.css";
import { menuActions } from "../store/menu-slice";
import { useDispatch } from "react-redux";
const Modal: React.FC<{ children: any }> = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={classes.layout}
        onClick={() => dispatch(menuActions.hideModal())}
      ></div>
      <div className={classes.content}>{props.children}</div>
    </>
  );
};

export default Modal;
