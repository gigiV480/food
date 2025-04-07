import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
import { profileActions } from "./profile-slice";

export const addCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      // const response = await fetch(
      //   "https://react-8e13b-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({
      //       items: cart.items,
      //       totalQuantity: cart.totalQuantity,
      //       totalPrice: cart.totalPrice,
      //     }),
      //     headers: {
      //       "Content-type": "application/json",
      //     },
      //   }
      // );
      const items = [];
      items.push(cart.items.map((item) => `${item.name} ${item.quantity}`));
      const finalItems = items.join(", ");
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();
      const response = await fetch(
        "https://react-8e13b-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "POST",
          body: JSON.stringify({
            id: Math.floor(Math.random() * 1000000),
            items: finalItems,
            totalQuantity: cart.totalQuantity,
            totalPrice: cart.totalPrice,
            date: `${day}/${month}/${year}`,
            exactTime: `${hour}:${minute}:${second}`,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending order failed.");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-8e13b-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Sending order failed.");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      // console.log(Object.values(cartData));
      // console.log(cartData);
      // Object.values(cartData).map((item) =>
      //   dispatch(profileActions.getList(item))
      // );
      // dispatch(profileActions.getList(cartData));
      dispatch(profileActions.getList(Object.values(cartData)));
    } catch (error) {
      console.log("erroraa");
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};
