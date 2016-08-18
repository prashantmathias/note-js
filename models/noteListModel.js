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

  exports.NoteList = NoteList;
})(this);
