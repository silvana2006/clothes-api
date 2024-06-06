const express = require("express");
const mongoose = require("mongoose");

const clothesRoute = require("./routes/clothes.route");
const shoesRoute = require("./routes/shoes.route");
const bagsRoute = require("./routes/bags.route");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/clothes", clothesRoute);
app.use("/api/shoes", shoesRoute);
app.use("/api/bags", bagsRoute);


app.get("/", (_, res) => {
    res.send("Hello, World");
});

const port = 3000;

mongoose.connect(
    "mongodb://localhost:27017/clothes-api"
).then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
