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

router.post("/notes", (req, res) => {
  console.log(req.body);
  fs.readFile(db, "utf8", (err, data) => {
    if (err) throw err;

    const allNotes = JSON.parse(data);

    let newNote = {
      id: 1,
      title: req.body.title,
      text: req.body.text,
    };

    allNotes.push(newNote);

    fs.writeFile(db, JSON.stringify(allNotes), (err) => {
      if (err) throw err;
      res.json({ msg: "success" });
    });
  });
});

router.delete("/notes/:id", (req, res) => {
  const frontId = req.params.id;

  console.log(frontId);

  fs.readFile(db, "utf8", (err, data) => {
    if (err) throw err;
    const allData = JSON.parse(data);
    const keepData = allData.filter((note) => note.id != frontId);

    fs.writeFile(db, JSON.stringify(keepData), (err) => {
      if (err) throw err;
      res.json({ msg: "Note deleted" });
    });
  });
});

module.exports = router;
