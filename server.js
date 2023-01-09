const express = require("express");
const dotenv = require("dotenv"); // dotenv 라이브러리 활용하여 환경변수 값 설정
const morgan = require("morgan"); // 로그 관리
const bodyparser = require("body-parser");
const path = require("path");

const mongoose = require("mongoose");
const connectDB = require("./server/database/connection");
mongoose.set("strictQuery", true); // [MONGOOSE] DeprecationWarning 되어 추가해줌

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// log requests
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// load router
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
