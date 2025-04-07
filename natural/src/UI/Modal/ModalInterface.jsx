import classes from "./ModalInterface.module.css";
import { useState } from "react";

const DUMMY_CARDS = [
  {
    id: 1,
    name: "MasterCard",
    cardNumber: "123123123123",
    valid: "69/69",
    cvv: "420",
  },
  {
    id: 2,
    name: "MasterCard",
    cardNumber: "123123123123",
    valid: "69/69",
    cvv: "420",
  },
];

function ModalInterface(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={classes.modalContainer}>
      <h2 style={{ textAlign: "center" }}>Payment Method</h2>
      <div className={classes.cardList}>
        {DUMMY_CARDS.map((item) => (
          <button className={classes.option} id={item.id}>
            <div>
              <div>
                {item.name} {item.cardNumber}
              </div>
              <div>{item.valid}</div>
            </div>
            <div className={classes.tick}></div>
          </button>
        ))}
        <button className={classes.addCard}>
          <h2 className={classes.buttoni}>+</h2>
          <p>Add Card</p>
        </button>
      </div>
    </div>
  );
}

export default ModalInterface;
