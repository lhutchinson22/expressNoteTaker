const path = require("path");
const fs = require("fs");
const db = path.join(__dirname, "../db/db.json");

module.exports = (app) => {
  // => HTML GET Requests
  // In each of the below cases the user is shown an HTML page of content
  app.get("/notes", (req, res) => {
    //console.log(db);
    fs.readFile(db, "utf8", (err, data) => {
      if (err) throw err;
      //console.log(data);
      return res.json(JSON.parse(data));
    });
  });

  app.post("/api/notes", (req, res) => {});
};
