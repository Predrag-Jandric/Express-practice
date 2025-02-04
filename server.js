require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// subscribers is database name

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("Server is running on port 3000"));

// https://youtu.be/fgTGADljAeg?si=n_2RBBYXRHSOfhji
