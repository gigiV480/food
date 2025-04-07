import React from "react";
import classes from "./Product.module.css";
import { useRef } from "react";
import Input from "../UI/Input";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

function Product(props) {
  const dispatch = useDispatch();
  const amountInputRef = useRef();

  const { title, price, id, src } = props.item;

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }

    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        amount: enteredAmountNumber,
      })
    );
  };

  // return (
  //   <div className={classes.container}>
  //     <img src={src} className={classes.image} />
  //     <div className={classes.titles}>
  //       <div>{title}</div>
  //       <div>{price}$</div>
  //       <form onSubmit={submitHandler}>
  //         <Input
  //           ref={amountInputRef}
  //           label="Amount"
  //           input={{
  //             id: "amount_" + id,
  //             type: "number",
  //             min: "1",
  //             max: "5",
  //             step: "1",
  //             defaultValue: "1",
  //           }}
  //         />
  //         <button>Add</button>
  //       </form>
  //     </div>
  //   </div>
  // );
  return (
    <div className={classes.container}>
      <div className={classes.yup}>
        <img src={src} className={classes.image} />
        <div>{title}</div>
        <div>{price}$</div>
      </div>

      <form onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Product;
