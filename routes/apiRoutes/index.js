const router = require("express").Router();
const {createNewNote, validateNote } = require("../../lib/notes");
const db = require("../../data/db.json");
const uuid = require('uuid');

router.get("/notes", (req, res) => {
    res.json(db);
});

router.post("/notes", (req, res) => {
  // set unique id
  req.body.id = uuid.v4();

  // if any data in req.body is incorrect, send 400 error back
  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted.");
  } else {
    const note = createNewNote(req.body, db);
    res.json(note);
  }
});

module.exports = router;