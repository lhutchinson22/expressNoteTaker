const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const db = path.join(__dirname, "../db/db.json");
console.log(db);

router.get("/notes", (req, res) => {
  console.log("iam here");

  fs.readFile(db, "utf8", (err, data) => {
    console.log(data);
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});

module.exports = router;
