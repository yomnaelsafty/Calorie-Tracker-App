import ListingSection from "../components/caloriesRecordSection/listingSection.jsx";
import styles from "./TrackPage.module.css";
import { TextContent } from "../components/common/TextContent.jsx";
import { useLoadData } from "../utils/hooks/index.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function TrackPage() {
  const [records, setRecords, loading] = useLoadData();

  const deleteHandler = (id) => {
    const updatedRecordes = records.filter((record) => record.id !== id);
    setRecords(updatedRecordes);
  };

  return (
    <div>
      <h1 className={styles.title}>Calorie Tracker</h1>

      {loading && !records ? (
        <TextContent value="Looding...." />
      ) : (
        records && (
          <ListingSection
            allRecords={records}
            isloading={loading}
            onDelete={deleteHandler}
          />
        )
      )}

      <Link className={styles["add-btn"]} to="create">
        Track Food
      </Link>
    </div>
  );
}
