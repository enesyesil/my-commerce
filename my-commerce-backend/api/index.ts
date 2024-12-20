const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

// Do not listen on a specific port in the code
// Instead, export the app for Vercel to use
module.exports = app;
