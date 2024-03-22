const functions = require("@google-cloud/functions-framework");

functions.http("div", (req, res) => {
  const { X, Y } = req.body;
  if (Y === 0) {
    return res.status(400).send({ error: "Cannot divide by zero" });
  }
  const result = X / Y;
  res.json({
    X,
    Y,
    Result: result,
  });
});
