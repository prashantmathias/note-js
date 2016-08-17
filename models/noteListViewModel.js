(function(exports) {
  function NoteListView(notelist) {
    this._noteLists = [];
    this._noteLists.push(notelist);
  }
  NoteListView.prototype.getNoteLists = function () {
    return this._noteLists;
  };
  exports.NoteListView = NoteListView;
})(this);
