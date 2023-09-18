const setTime = () => {
  const date = new Date();
  const hour = date.getHours().toString();
  let minute = date.getMinutes().toString();
  if (minute < "10") {
    minute = `${"0"}${minute}`;
  }
  const time = [hour, ":", minute];

  if (hour > "12") {
    time[3] = " PM";
  } else {
    time[3] = " AM";
  }
  return time;
};

module.exports = { setTime };
