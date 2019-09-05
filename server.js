require("dotenv").config();

require("./config/dbConnection");
const express = require("express");
const hbs = require("hbs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");

const userRouter = require("./routes/user");
app.use("/", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});
