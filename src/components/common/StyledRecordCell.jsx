import styles from "./StyledRecordCell.module.CSS";

function StyledRecordCell(props) {
  return <div className={styles["styled-record-cell"]}>{props.children}</div>;
}

export default StyledRecordCell;
