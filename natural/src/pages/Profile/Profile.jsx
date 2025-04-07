import { useEffect, useState } from "react";

import AvatarImg from "./AvatarImg";
import classes from "./Profile.module.css";
import Modal from "../../UI/Modal/Modal";
import ModalInterface from "../../UI/Modal/ModalInterface";
import OrderList from "./OrdersList";

function Profile() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.profilePage}>
      <div className={classes.profileSide}>
        <AvatarImg />
        <div className={classes.profileBtns}>
          <button className={classes.button} onClick={openModal}>
            Payment Method
          </button>
          {modalOpen && (
            <Modal onClose={closeModal}>
              <ModalInterface onClose={closeModal} />
            </Modal>
          )}
          <button className={classes.button}>Settings</button>
        </div>
      </div>
      <div className={classes.orderSide}>
        <OrderList />
      </div>
    </div>
  );
}

export default Profile;
