import styles from "./Button.module.css";
import { memo } from "react";

function Button(props) {
  const { disabled, children, variant, ...rest } = props;
  return (
    <button {...rest} disabled={disabled} className={styles[variant]}>
      {children}
    </button>
  );
}

export default memo(Button);
