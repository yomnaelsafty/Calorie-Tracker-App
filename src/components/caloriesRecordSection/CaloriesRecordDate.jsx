import styles from "./CaloriesRecordDate.module.css";
import StyledRecordCell from "../common/StyledRecordCell";

const Month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function CaloriesRecordDate(props) {
  const month = Month[props.date.getMonth()];
  const day = props.date.getDate();
  const year = props.date.getFullYear();

  return (
    <StyledRecordCell className={styles.styledRecordCell}>
      <div className={styles["record-date-month"]}>{month}</div>
      <div className={styles["record-date-day "]}>{day}</div>
      <div className={styles["record-date-year"]}>{year}</div>
    </StyledRecordCell>
  );
}

export default CaloriesRecordDate;
