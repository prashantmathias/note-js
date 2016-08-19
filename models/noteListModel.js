(function(exports) {
  function NoteList() {
    this._allNotes = [];
  }

NoteList.prototype.addNote = function (string) {
  var note = new Note(string);
  this._allNotes.push(note);
  note.noteIcrementCounter();
};

NoteList.prototype.getNotes = function () {
  return this._allNotes;
};

NoteList.prototype.getNoteById = function(id) {
  var noteFound;
  this._allNotes.forEach(function(note){
    if (note.id === id) {
      noteFound = note;
    }
  });
  return noteFound;
}

  exports.NoteList = NoteList;
})(this);
