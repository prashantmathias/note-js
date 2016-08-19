describe("Note List Model", function() {

  it("gives every note a unique id", function() {
    var note_list = new NoteList();
    note_list.addNote("first note");
    note_list.addNote("second note");

    assert.isTrue(note_list.getNotes()[0].id === 0);
    assert.isTrue(note_list.getNotes()[1].id === 1);
  });

  it("returns an empty array at start", function() {
    var noteList = new NoteList();
    assert.isTrue(Array.isArray(noteList.getNotes()));
  });

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

  it ("can return a specific note by ID", function() {
    var noteList = new NoteList();
    noteList.addNote("simple test note");
    var note = noteList.getNotes()[0];
    var id = note.id;

    assert.isEqual(noteList.getNoteById(id), note);
  })
});
