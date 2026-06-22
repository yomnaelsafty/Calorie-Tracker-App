import styles from "./CaloriesRecord.module.css";
import StyledRecordCell from "../common/StyledRecordCell";
import { useEffect, useContext } from "react";
import { AppContext } from "../APP-Context";
import Button from "../common/Button";

function CaloriesRecorder(props) {
  const { setTotalCalories: addCalories } = useContext(AppContext);

  if (props.calories < 0) {
    return null;
  }

  useEffect(() => {
    addCalories((prvTotal) => prvTotal + props.calories);

    return () => {
      addCalories((prvTotal) => prvTotal - props.calories);
    };
  }, []);

  const deleteHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this record?")) {
      props.onDelete(props.id);
    }
  };

  return (
    <ul className={styles.record}>
      {props.calories < 0 ? (
        <>
          <li></li>
          <li> Invalid Calories</li>
        </>
      ) : (
        <>
          <li>{props.meal}</li>
          <li>{props.content}</li>
        </>
      )}

      <li className={styles["record-calories"]}>
        <StyledRecordCell>{props.calories}</StyledRecordCell>
      </li>
      <li>
        <Button variant="secondary" onClick={deleteHandler}>
          Delete
        </Button>
      </li>
    </ul>
  );
}

export default CaloriesRecorder;
