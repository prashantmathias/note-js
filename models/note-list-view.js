(function(exports){
  var NoteListView = function(noteList){
    this._noteList = noteList;
  };

  NoteListView.prototype.displayNotes = function(){
    var noteArray = this._noteList.list()
    var htmlString = "<ul>";
    for(var noteIndex = 0; noteIndex < noteArray.length; noteIndex++){
      var note = noteArray[noteIndex].text();
      htmlString += "<li>" + note.substr(0,20) + "</li>";
    }
    return htmlString + "</ul>";
  };

  // return  "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"

  exports.NoteListView = NoteListView;
})(this);
