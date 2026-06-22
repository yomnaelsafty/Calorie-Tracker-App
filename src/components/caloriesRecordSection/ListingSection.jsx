import RcordList from "./RcordList";
import styles from "./ListingSection.module.css";
import { useContext, useState } from "react";
import { AppContext } from "../APP-Context";
import { TextContent } from "../common/TextContent";

function ListingSection(props) {
  const { allRecords, isloading, onDelete } = props;
  const { currentDate, setCurrentDate, currentDateStr } =
    useContext(AppContext);

  const dateChangeHandler = (event) => {
    setCurrentDate(event.target.value);
  };

  const dateFilter = (record) => {
    return (
      record.date.getDate() === currentDate.getDate() &&
      record.date.getMonth() === currentDate.getMonth() &&
      record.date.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="listingDate">
        Select Date
      </label>
      <input
        type="date"
        id="listingDate"
        className={styles["listing-picker-input"]}
        value={currentDateStr}
        onChange={dateChangeHandler}
      />
      {isloading ? (
        <TextContent value="Looding...." />
      ) : (
        <RcordList
          records={allRecords.filter(dateFilter)}
          onDelete={onDelete}
        ></RcordList>
      )}
    </>
  );
}

export default ListingSection;
