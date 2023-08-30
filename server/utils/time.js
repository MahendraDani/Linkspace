const { format } = require("date-fns");

const hour = format(new Date(), "HH:mm:ss:a..aa").split(":")[0];
const time = format(new Date(), "HH:mm:ss").split(":");
if (hour < 12) {
  time[1] = ":";
  time[3] = " AM";
} else {
  time[1] = ":";
  time[3] = " PM";
}

module.exports = { time };
