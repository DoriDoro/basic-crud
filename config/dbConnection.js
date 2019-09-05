const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/toto",
  { useNewUrlParser: true },
  () => {
    console.log("connected to the database");
  }
);
