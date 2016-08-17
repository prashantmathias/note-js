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
});
