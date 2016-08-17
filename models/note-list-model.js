(function(exports) {

    function NoteList() {
      this._listArr = [];
    }

    NoteList.prototype.store = function (message) {
      var note = new Note(message);
      this._listArr.push(note);
    }

    NoteList.prototype.list = function () {
      return this._listArr;
    }

    NoteList.prototype.listById = function (id) {
      var showNote
      this._listArr.forEach(function(note){
        if(note._id === id) {
           showNote = note;
        }
      });
      return showNote
    }

    exports.NoteList = NoteList;

})(this);
