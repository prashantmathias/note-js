(function(exports) {
  function NoteList() {
    this._allNotes = [];
  }

NoteList.prototype.addNote = function (string) {
  this._allNotes.push(new Note(string));
};

NoteList.prototype.getNotes = function () {
  return this._allNotes;
};

  exports.NoteList = NoteList;
})(this);
