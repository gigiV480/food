import classes from "./Notification.module.css";

function Notification(props) {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const classCss = `${classes.notification} ${specialClasses}`;

  return (
    <div className={classCss}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
}

export default Notification;
