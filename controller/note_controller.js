(function(exports) {

  function NoteController(noteList) {
    this._noteList = noteList;
    this._note_markup = new NoteListView(this._noteList);
  }

  NoteController.prototype.insertHTML = function (id) {
    var element = this.getElement(id);
    element.innerHTML = this._note_markup.getHTML();
  };

  NoteController.prototype.getElement = function(id) {
    return document.getElementById(id);
  }

  exports.NoteController = NoteController;

})(this);
