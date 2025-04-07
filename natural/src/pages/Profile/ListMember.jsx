import { useState } from "react";
import styles from "./ListMember.module.css";

function ListMember(props) {
  const [visible, setVisible] = useState(false);
  const pullDown = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  let foods = props.items;
  return (
    <div className={styles.order}>
      <div className={styles.show} onClick={pullDown}>
        <p>Total: {props.price.toFixed(2)}$</p>
        <p>Date: {props.date}</p>
      </div>

      <div
        className={`${styles.expand} ${
          visible ? styles.visible : styles.invisible
        }`}
      >
        <p className={styles.items}>items: {foods}</p>
        <p className={styles.time}>exact time: {props.currentTimes}</p>
      </div>
    </div>
  );
}

export default ListMember;
