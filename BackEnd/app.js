const express = require("express");
require("dotenv").config();
require("./db/db");
const cors = require("cors");

const app = express();

const indexRouter = require("./routes/index-route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`SERVER LISTING ON ${process.env.PORT}`);
});
