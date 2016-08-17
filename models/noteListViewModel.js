(function(exports) {
  function NoteListView(notelist) {
    this._noteList = notelist;
  }
  NoteListView.prototype.getNoteList = function () {
    return this._noteList;
  };
  exports.NoteListView = NoteListView;
})(this);
