var Note = require("../src/note-model")
var assert = require("./assert")

function test() {
  var showNote = new Note('I like js');
  assert.isTrue(showNote.printNote() === "I like js")
}

test()
