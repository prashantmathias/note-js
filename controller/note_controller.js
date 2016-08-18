(function(exports) {

  function NoteController(noteList) {
    this._noteList = noteList;
    // this._note_markup = "";
  }
  //
  // NoteController.prototype.setupView = function () {
  //   var list_view = new NoteListView(this._noteList);
  //   var note_markup = list_view.getHTML();
  //   this._note_markup = note_markup;
  // };
  //
  // NoteController.prototype.insertHTML = function (id) {
  //   var element = document.getElementById(id);
  //   element.innerHTML = this._note_markup;
  // };
  //
  //
  exports.NoteController = NoteController;
})(this);
