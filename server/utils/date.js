const { format } = require("date-fns");

const date = format(new Date(), "dd-MM-yyyy").split("-").join(".");
module.exports = { date };
