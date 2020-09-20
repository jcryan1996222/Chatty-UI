const chatMessages = require("./chatMessages");

module.exports = function (app) {
  app.get("/messages", (_req, res, _next) => {
    res.json({ data: chatMessages });
  });
};
