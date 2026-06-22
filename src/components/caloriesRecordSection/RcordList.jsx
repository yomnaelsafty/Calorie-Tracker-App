import styles from "./RcordList.module.css";
import CaloriesRecorder from "./CaloriesRecorder";
import { useState, useContext } from "react";
import { AppContext } from "../APP-Context";
import { Link } from "react-router-dom";
import { TextContent } from "../common/TextContent";

function RcordList(props) {
  const { totalCalories } = useContext(AppContext);
  const resultElement = props.records?.length ? (
    <ul className={styles["record-list"]}>
      {props.records.map((record) => (
        <li className={styles["list-item"]} key={record.id}>
          <Link to={`/track/${record.id}`}>
            <CaloriesRecorder {...record} onDelete={props.onDelete} />
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <TextContent value="NO records found for this day" />
  );

  return (
    <>
      {resultElement}
      <label>Total Calories: {totalCalories}</label>
    </>
  );
}

export default RcordList;
