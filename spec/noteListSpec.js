describe("Note List Model", function() {

  it("returns an empty array at start", function() {
    var noteList = new NoteList();
    assert.isTrue(Array.isArray(noteList.getNotes()));
  });

  // it("can create a list of notes", function() {
  //   var note = new Note("Testing text");
  //   var note_list = new NoteList();
  //   note_list.addNote("note");
  //   asserts.isTrue(note_list._allNotes.includes("note"));
  // });
  it("adds a new note", function() {
    var noteList = new NoteList();
    noteList.addNote('My favourite language is Fortran 77');
    noteList.addNote('My favourite language is Javascript');
    testNote = noteList._allNotes[0];
    assert.isTrue(testNote instanceof Note);
    assert.isTrue(testNote.getText() === 'My favourite language is Fortran 77');
  });

  it("has a method that will return stored notes", function() {
    var note_list = new NoteList();
    note_list.addNote("note1");
    note_list.addNote("note2");
    assert.isTrue(note_list.getNotes() === note_list._allNotes );

  });
});
