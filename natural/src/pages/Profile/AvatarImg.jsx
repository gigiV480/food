import React, { useState } from "react";
import classes from "./AvatarImg.module.css";

function AvatarImg() {
  const [avatar, setAvatar] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.avatarContainer}>
      <h2>Change Avatar</h2>
      <div className={classes.avatar}>
        {avatar ? (
          <img src={avatar} alt="avatar" className={classes.avatarImg} />
        ) : (
          <div className={classes.avatarPlaceholder}>No Avatar</div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={classes.avatarInput}
      />
    </div>
  );
}

export default AvatarImg;
