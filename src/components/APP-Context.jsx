import { createContext, useState } from "react";
import { getDateFromString, getDateStringNoTimezone } from "../utils.js";

export const AppContext = createContext({
  currentDate: new Date(),
  setCurrentDate: () => {},
  totalCalories: 0,
  setTotalCalories: () => {},
  currentDateStr: "",
  isDateValid: false,
});

function AppContextProvider(props) {
  const { children } = props;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [totalCalories, setTotalCalories] = useState(0);

  const updateCurrentDate = (val) => {
    setCurrentDate(getDateFromString(val));
  };

  const currentDateStr = !!currentDate
    ? getDateStringNoTimezone(currentDate)
    : "";

  return (
    <AppContext.Provider
      value={{
        currentDate,
        setCurrentDate: updateCurrentDate,
        totalCalories,
        setTotalCalories,
        currentDateStr,
        isDateValid: !!currentDateStr,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
