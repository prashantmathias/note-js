(function(exports) {

  function Note(message) {
    this.note = message;
  };

  Note.prototype.printNote = function () {
    return this.note;
  };

  module.exports = Note;


})(this);
