const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const User = require("./models/UserModel");

 const app =express();

 app.use(cors());
 app.use(express.json());

mongoose.connect("mongodb+srv://rubee303:Dm0pPpAP4P1xyXQk@cluster0.vnl4x8t.mongodb.net/flixxit",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
.then(() => {
    console.log("DB Connected");
  });
  app.use("/api/user", userRoutes);

 app.listen(5000, console.log("server started"));
