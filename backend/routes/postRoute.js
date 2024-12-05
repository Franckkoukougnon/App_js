const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Mon serveur tourne bien" });
});

router.post("/", (req, res) => {
  console.log(req.body);
  console.log(typeof req.body);
  res.json({ data: req.body });
});

router.put("/:id", (req, res) => {
  console.log(req.params.id, req.body);
  res.json({
    id: req.params.id,
    data: req.body,
  });
});

router.delete("/:id", (req, res) => {
  console.log("====================================");
  console.log(req.params.id, req.body);
  console.log("====================================");
  res.json({
    id: req.params.id,
    message: req.body,
  });
});

router.patch("/like/:id", (req, res) => {
  console.log("le post " + req.params.id + "a été lické");
  res.json({
    message: "le post " + req.params.id + "a été lické",
  });
});

router.patch("/dislike/:id", (req, res) => {
  console.log("le post " + req.params.id + "a été dislické");
  res.json({
    message: "le post " + req.params.id + "a été dislické",
  });
});
module.exports = router;
