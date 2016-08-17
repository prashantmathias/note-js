var div = {innerHTML: ""}

document.getElementById = function(){
  return div;
};
var noteList = new NoteList();
var noteController = new NoteController(noteList);


function appDisplaysNote(){
  noteList.store("Favourite drink: seltzer");
  noteController.displayView();
  assert.isTrue( div.innerHTML === "<ul><li>Favourite drink: sel</li></ul>");
};

appDisplaysNote();
