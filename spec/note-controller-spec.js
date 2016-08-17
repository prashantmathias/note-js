var div = {innerHTML: ""}

document.getElementById = function(){
  return div;
};
var noteList = new NoteList();
var noteController = new NoteController(noteList);

function appDisplaysNote(){
  noteController.displayView();
  assert.isTrue( div.innerHTML === "<ul><li>Favourite drink: sel</li></ul>");
};

appDisplaysNote();
