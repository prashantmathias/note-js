(function(exports) {
  function SingleNoteView(note) {
    this._single_note = note;
  }
  SingleNoteView.prototype.getNoteHTML = function () {
    var     note_markup = "<div>";
            note_markup += this._single_note.getText();
    return  note_markup += "</div>";
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
