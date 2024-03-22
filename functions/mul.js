const functions = require('@google-cloud/functions-framework');

functions.http('mul', (req, res) => {
  const { X, Y } = req.body;
  const result = X * Y;
  res.json({
    X,
    Y,
    Result: result
  });
});
