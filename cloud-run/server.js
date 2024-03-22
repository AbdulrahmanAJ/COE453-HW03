const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add route
app.post("/add", (req, res) => {
  const { X, Y } = req.body;
  const Result = X + Y;
  res.json({
    X,
    Y,
    Result,
  });
});

// Subtract route
app.post("/sub", (req, res) => {
  const { X, Y } = req.body;
  const Result = X - Y;
  res.json({
    X,
    Y,
    Result,
  });
});

// Multiply route
app.post("/mul", (req, res) => {
  const { X, Y } = req.body;
  const Result = X * Y;
  res.json({
    X,
    Y,
    Result,
  });
});

// Divide route
app.post("/div", (req, res) => {
  const { X, Y } = req.body;
  if (Y === 0) {
    res.status(400).send("Cannot divide by zero");
  } else {
    const Result = X / Y;
    res.json({
      X,
      Y,
      Result,
    });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
