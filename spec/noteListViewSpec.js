var noteList, noteListView;

function setNoteListView() {
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
}

describe( "The note list view", function() {
  it( "It can create a new list view and store note list", function() {
    setNoteListView();
    asserts.isTrue(noteListView.getNoteList() instanceof NoteList);

  });



  it("has a method that returns a HTML markup if there's notes", function() {
    setNoteListView();
    noteList.addNote("Testing sucks!")
    noteList.addNote("I hate testing!")
    asserts.isTrue(noteListView.getHTML() === "<ul><li><div>Testing sucks!</div></li><li><div>I hate testing!</div></li></ul>");
  });

  it("getHTML doesn't returns markup if there's no notes", function() {
    setNoteListView();
    asserts.isTrue(noteListView.getHTML() === null);
  });


});
