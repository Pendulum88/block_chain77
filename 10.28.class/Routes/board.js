const router = require("express").Router();

const { Board } = require("../models/index.js");

router.get("/", (req, res) => {
  res.end();
});

// router.post("/add", (req, res) => {
//   console.log(req.body);
//   res.end();
// });

router.post("/add", (req, res) => {
  try {
    Board.create({
      title: req.body.title,
      text: req.body.text,
    });
    res.end();
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

router.put("/update", (req, res) => {
  res.end();
});

router.delete("/delete", (req, res) => {
  res.end();
});

module.exports = router;
