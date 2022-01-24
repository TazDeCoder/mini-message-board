var express = require("express");
var router = express.Router();

var messages = [
  {
    text: "Hi there!",
    user: "Elias",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Alexander",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  var { authorName, messageText } = req.body;
  var message = {
    text: messageText,
    user: authorName,
    added: new Date(),
  };
  messages.push(message);
  res.redirect("/");
});

module.exports = router;
