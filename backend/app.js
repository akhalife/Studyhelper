const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require("./routes/user");
const quizRoutes = require("./routes/quiz");

const app = express();

mongoose.connect("mongodb+srv://studyhelper:studyhelper@cluster0.2w9j8.mongodb.net/users")
    .then(() => {
        console.log('Connected to database')
    })
    .catch(() => {
        console.log('Connection failed');
    });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/quiz", quizRoutes);
module.exports = app;   