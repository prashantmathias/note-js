(function(exports) {

  var listCounter = 0;

  function Note(string) {
    this.text = string || "";
    this.id = listCounter;
  }

  Note.prototype.getText = function () {
    return this.text;
  };

  Note.prototype.noteIcrementCounter = function () {
    listCounter++;
  };
  
  exports.Note = Note;

})(this);
