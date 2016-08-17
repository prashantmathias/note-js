(function(exports) {

  var IDcounter = -1

  function Note(text) {
    this._id = IDcounter++
    this.save_note = text;
  }

  Note.prototype.text = function () {
    return this.save_note;
  };

  exports.Note = Note;
})(this);
