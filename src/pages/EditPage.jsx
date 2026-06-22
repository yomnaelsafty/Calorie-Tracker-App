import styles from "./EditPage.module.css";
import {
  useEffect,
  useReducer,
  useContext,
  useRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import { AppContext } from "../components/APP-Context";
import { FormInput } from "../components/common/index.js";
import Button from "../components/common/Button.jsx";
import { useLoadData } from "../utils/hooks/index.js";
import { useNavigate } from "react-router-dom";

const Default_Value = {
  meal: true,
  content: false,
  calories: true,
};

function formReducer(state, action) {
  const { key, value, auxValue } = action;
  let valid;
  switch (key) {
    case "content":
      valid =
        (value === "sport" && auxValue < 0) ||
        (value !== "sport" && auxValue >= 0);
      return {
        ...state,
        content: !!value,
        calories: valid,
      };

    case "calories":
      valid =
        (auxValue === "sport" && value < 0) ||
        (auxValue !== "sport" && value >= 0);
      return {
        ...state,
        calories: valid,
      };
    default:
      return {
        ...state,
        meal: !!value,
      };
  }
}

export function EditPage() {
  const {
    currentDate,
    isDateValid,
    currentDateStr,
    setCurrentDate,
    totalCalories,
  } = useContext(AppContext);

  const [formState, dispatchFn] = useReducer(formReducer, Default_Value);
  const [isTouched, setIsTouched] = useState(false);
  const navigate = useNavigate();
  const { content: isContentValid, calories: isCaloriesValid } = formState;

  const [records, setRecords, loading] = useLoadData();

  const contentRef = useRef();
  const caloriesRef = useRef();
  const mealRef = useRef();

  const isformValid = useMemo(() => {
    return isDateValid && isContentValid && isCaloriesValid;
  }, [isCaloriesValid, isContentValid, isDateValid]);

  const dateHandler = (e) => {
    setIsTouched(true);
    setCurrentDate(e.target.value);
  };

  const mealHandler = (e) => {
    setIsTouched(true);
    dispatchFn({ key: "meal", value: e.target.value });
  };

  const contentHandler = (e) => {
    setIsTouched(true);
    dispatchFn({
      key: "content",
      value: e.target.value,
      auxValue: Number(caloriesRef.current.value),
    });
  };

  const caloriesHandler = (e) => {
    setIsTouched(true);
    dispatchFn({
      key: "calories",
      value: Number(e.target.value),
      auxValue: contentRef.current.value,
    });
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    const newRecord = {
      date: currentDate,
      meal: mealRef.current.value,
      content: contentRef.current.value,
      calories: Number(caloriesRef.current.value),
      id: crypto.randomUUID(),
    };

    setRecords((prev) => {
      const updatedRecords = [newRecord, ...prev];
      localStorage.setItem("caloriesRecord", JSON.stringify(updatedRecords));
      return updatedRecords;
    });

    navigate("..");
  };

  const cancelHandler = useCallback(() => {
    navigate("..");
  }, [navigate]);

  useEffect(() => {
    if (!isContentValid && contentRef.current) {
      contentRef.current.focus();
    }
  }, [isContentValid]);

  return (
    <form className={styles.form} onSubmit={sumbitHandler}>
      {!isformValid && isTouched && (
        <p className={styles.warning}>
          Request faild,Failed to create new record
        </p>
      )}

      <FormInput
        label="Date:"
        type="date"
        id="date"
        value={currentDateStr}
        onChange={dateHandler}
        isValid={isDateValid}
      />

      <FormInput
        type="select"
        label="Meal:"
        id="meal"
        onBlur={mealHandler}
        ref={mealRef}
        isValid
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
      </FormInput>

      <FormInput
        text="text"
        label="Content:"
        id="content"
        onBlur={contentHandler}
        isValid={isContentValid}
        ref={contentRef}
      />

      <FormInput
        text="number"
        label="Calories:"
        id="calories"
        onBlur={caloriesHandler}
        isValid={isCaloriesValid}
        ref={caloriesRef}
      />

      <div className={styles.footer}>
        <Button disabled={!isformValid} variant="primary" type="submit">
          Add Record
        </Button>
        <Button variant="secondary" type="button" onClick={cancelHandler}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
