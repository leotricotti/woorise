import { useState, useEffect } from "react";
import styles from "./counter.module.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.counter}>
      <div className={styles.counterInner}>
        <div className={styles.counterInnerItem}>{counter}</div>
      </div>
    </div>
  );
}

export default Counter;
