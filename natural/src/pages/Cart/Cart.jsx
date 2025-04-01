import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from "../../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { addCartData } from "../../store/cart-actions";
import Notification from "../../UI/Notification";
import React, { useState, useEffect } from "react";
import { uiActions } from "../../store/ui-slice";

const Cart = (props) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const notification = useSelector((state) => state.ui.notification);
  let show = false;

  function emptyCart() {
    dispatch(cartActions.emptyCart());
    console.log(cart);
  }

  function submitData() {
    dispatch(addCartData(cart));
    emptyCart();
  }

  if (notification) show = true;

  useEffect(() => {
    if (show) {
      setIsActive(true);
      const timer = setTimeout(() => {
        setIsActive(false);
        dispatch(uiActions.nullNotification());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <Card className={classes.cart}>
      <div>
        <h2>Your Shopping Cart</h2>
        <ul className={classes.cartItems}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
        {cartItems.length > 0 && (
          <>
            {" "}
            <h2>Your total is: {cartTotal.toFixed(2)}$</h2>
            <div className={classes.orderButtons}>
              <button onClick={emptyCart}>Cancel Order</button>
              <button onClick={submitData}>Submit Order</button>
            </div>
          </>
        )}
      </div>
      {notification && isActive && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </Card>
  );
};

export default Cart;
