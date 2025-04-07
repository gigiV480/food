import styles from "./OrdersList.module.css";
import ListMember from "./ListMember";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCartData } from "../../store/cart-actions";

function OrderList() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCartData());
  // }, [dispatch]);

  const list = useSelector((state) => state.profile.items);
  // list.forEach((obj) => {
  //   console.log(obj.items);
  // });

  return (
    <div className={styles.listContainer}>
      <div className={styles.title}>Order History</div>
      <div className={styles.list}>
        {list.map((obj) => (
          <ListMember
            price={obj.totalPrice}
            key={obj.id}
            date={obj.date}
            currentTimes={obj.exactTime}
            items={obj.items}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderList;
