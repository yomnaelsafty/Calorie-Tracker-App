import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "caloriesRecord";

export function useLoadData() {
  const [loading, setLoading] = useState(false);
  const [records, setRecords] = useState();

  useEffect(() => {
    setLoading(true);

    const storageRecords = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storageRecords != null && storageRecords !== "undefined") {
      setRecords(
        JSON.parse(storageRecords).map((record) => ({
          ...record,
          date: new Date(record.date),
          calories: Number(record.calories),
        })),
      );
    } else {
      setRecords([]);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (records) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(records));
    }
  }, [records]);

  return [records, setRecords, loading];
}
