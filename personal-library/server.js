const express = require("express");
// const mongoose = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("./public"));
// }
// app.use(routes);
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
