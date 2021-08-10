const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

const dotenv = require("dotenv");

const routesUrl = require("./routes/routes");
var flash = require("connect-flash");
dotenv.config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 3001;
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Database Connected");
  }
);

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);
app.use(flash());
app.use("/api", routesUrl);

app.listen(PORT, function () {
  console.log(`Server is active at port ${PORT}`);
});
