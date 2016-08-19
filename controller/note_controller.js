(function(exports) {

  function NoteController(noteList) {
    this._noteList = noteList;
    this._view = new NoteListView(this._noteList);
  }

  NoteController.prototype.insertHTML = function (id) {
    var element = this.getElement(id);
    element.innerHTML = this._view.getHTML();
  };

  NoteController.prototype.getElement = function(id) {
    return document.getElementById(id);
  }

  NoteController.prototype.listenForHashChange = function() {
    var self = this;
    window.addEventListener("hashchange", function() {
      self.showNote();
    });
  }

  NoteController.prototype.listenForSubmitEvents = function() {
    var self = this;
    window.addEventListener("submit", function(event){
      event.preventDefault();
      var noteText = event.target["text"].value;
      self.addNote(noteText);
    })
  }

  NoteController.prototype.showNote = function() {
    var id = parseInt(window.location.hash.split("#")[1]);
    var note = this._noteList.getNoteById(id);
    this._view = new SingleNoteView(note);
    this.insertHTML("app");
  }

  exports.NoteController = NoteController;

})(this);
