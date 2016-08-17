var noteList = new NoteList();
var noteListView = new NoteListView(noteList);

function viewReturnsHtmlZeroNotes(){
  assert.isTrue(noteListView.displayNotes() === "<ul></ul>");
};

function viewReturnsHtmlOneNote(){
  noteList.store("Favourite food: pesto");
  assert.isTrue(noteListView.displayNotes() === "<ul><li>Favourite food: pest</li></ul>");
};

function viewReturnsHtmlMultipleNote(){
  noteList.store("Favourite drink: tea");
  assert.isTrue(noteListView.displayNotes() === "<ul><li>Favourite food: pest</li><li>Favourite drink: tea</li></ul>");
};

function displaysOnlyFirst20Chars(){
  assert.isTrue(noteListView.displayNotes() === "<ul><li>Favourite food: pest</li><li>Favourite drink: tea</li></ul>" )
}


viewReturnsHtmlZeroNotes();
viewReturnsHtmlOneNote();
viewReturnsHtmlMultipleNote()
displaysOnlyFirst20Chars()
