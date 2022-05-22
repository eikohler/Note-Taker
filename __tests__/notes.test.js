const fs = require("fs");
const {
  createNewNote,
  validateNote,
} = require("../lib/notes.js");
const db = require("../data/db.json");

jest.mock('fs');

test("creates an note object", () => {
  const note = createNewNote(
    { title: "Bob's Note", text: "I love bob", id:"1234" },
    db
  );

  expect(note.title).toBe("Bob's Note");
  expect(note.text).toBe("I love bob");
  expect(note.id).toBe("1234");
});

test("validates note values", () => {
  const note = {
      title: "New note",
      text: "This is a cool note",
      id: "1234",
  };

  const invalidNote = {
    id: "23e2nninw",
    title: "New note",
  };

  const result = validateNote(note);
  const result2 = validateNote(invalidNote);

  expect(result).toBe(true);
  expect(result2).toBe(false);
});