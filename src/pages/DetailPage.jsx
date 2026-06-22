import { data, Link, useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";
import { useEffect, useState } from "react";
import { TextContent } from "../components/common/TextContent";

export function DetailPage() {
  const params = useParams();
  const [detail, setDetail] = useState();
  const [error, setError] = useState();

  function loadDetails(id) {
    try {
      const storageRecords = localStorage.getItem("caloriesRecord");

      if (storageRecords != null && storageRecords !== "undefined") {
        const parsedRecords = JSON.parse(storageRecords).map((record) => ({
          ...record,
          date: new Date(record.date),
          calories: Number(record.calories),
        }));

        const recordByID = parsedRecords.find((record) => record.id === id);

        if (!recordByID) {
          throw new Error("Record not found");
        }

        setDetail(recordByID);
      }
    } catch (error) {
      setError("Failed to load recoard details");
    }
  }

  useEffect(() => {
    loadDetails(params.recordId);
  }, []);

  let content = <TextContent value={error} />;

  if (!error) {
    content = detail && (
      <div className={styles.container}>
        <div className={styles.item}>
          <p>Date:</p>
          <p>{detail.date.toLocaleDateString()}</p>
        </div>
        <div className={styles.item}>
          <p>Meal:</p>
          <p>{detail.meal}</p>
        </div>
        <div className={styles.item}>
          <p>Content:</p>
          <p>{detail.content}</p>
        </div>
        <div className={styles.item}>
          <p>Calories:</p>
          <p>{detail.calories}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {content}
      <Link to="..">Back to list page</Link>
    </>
  );
}
