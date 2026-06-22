import { Link } from "react-router-dom";

import styles from "./LandingPage.module.css";

export function LanddingPage() {
  return (
    <div className={styles.hero}>
      <div className={styles.card}>
        <div className={styles.icon}>🍎</div>
        <h1 className={styles.title}>Welcome to Calorie Tracker</h1>
        <p className={styles.subtitle}>
          Track your daily meals, monitor your progress, and achieve your
          fitness goals with ease.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryBtn} to="track">
            Start Tracking Now
          </Link>
        </div>
      </div>
    </div>
  );
}
