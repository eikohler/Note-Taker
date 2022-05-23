const router = require("express").Router();
const {createNewNote, validateNote, deleteById } = require("../../lib/notes");
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

router.delete('/notes/:id', (req, res) => {
    const result = deleteById(req.params.id, db);
    if (result) {
        res.json(db);
    } else {
        res.send(404);
    }
});

module.exports = router;