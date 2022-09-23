const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    console.log("This browser does not support notification");
    return;
  }

  const notify = () => {
    if (Notification.permission === "granted") {
      console.log("granted");
      new Notification(title, options);
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    }
  };

  return notify;
};

export { useNotification };
