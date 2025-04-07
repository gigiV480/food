import React, { useEffect, useState } from "react";
import classes from "./AvatarImg.module.css";

function AvatarImg({ isActive }) {
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setAvatar(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        localStorage.setItem("uploadedImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("file-input").click(); // Programmatically trigger the file input
  };

  return (
    <div className={classes.avatarContainer}>
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
        id="file-input"
        onChange={handleImageChange}
        className={classes.avatarInput}
        style={{ display: "none" }}
      />

      <button className={classes.button} onClick={triggerFileInput}>
        Change Avatar
      </button>
    </div>
  );
}

export default AvatarImg;
