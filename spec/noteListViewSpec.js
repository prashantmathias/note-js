var noteList, noteListView;

function setNoteListView() {
  noteList = new NoteList();
  noteListView = new NoteListView(noteList);
}

describe( "The note list view", function() {
  it( "It can create a new list view and store note list", function() {
    setNoteListView();
    assert.isTrue(noteListView.getNoteList() instanceof NoteList);

  });

  it("has a method that returns a HTML markup if there's notes", function() {
    setNoteListView();
    noteList.addNote("Testing sucks!");
    noteList.addNote("I hate testing!");
    htmlString = "<ul>" +
                   "<li><div><a href=\"#" + noteList.getNotes()[0].id + "\">Testing sucks!</a></div></li>" +
                   "<li><div><a href=\"#" + noteList.getNotes()[1].id + "\">I hate testing!</a></div></li>" +
                 "</ul>";
    assert.isEqual(noteListView.getHTML(), htmlString);
  });

  it("getHTML doesn't returns markup if there's no notes", function() {
    setNoteListView();
    assert.isTrue(noteListView.getHTML() === "");
  });

  it("only displays the first 20 characters", function() {
    setNoteListView();
    noteList.addNote("Testing twice really sucks!");
    htmlString = "<ul><li><div><a href=\"#" + noteList.getNotes()[0].id + "\">Testing twice really</a></div></li></ul>";
    assert.isEqual(noteListView.getHTML(), htmlString);
  });

});
