(function(exports) {
  function NoteListView(notelist) {
    this._noteList = notelist;
  }
  NoteListView.prototype.getNoteList = function () {
    return this._noteList;
  };


  NoteListView.prototype.getHTML = function () {
    var markup = "<ul><li><div>";
    var notes_array = this._noteList.getNotes();
    if (notes_array.length === 0) {
      return "";
    } else {
      markup += notes_array.map(function(note) {
        return "<a href=\"#"+ note.id + "\">" + note.getText().substr(0,20) + "</a>";
      }).join("</div></li><li><div>");
      return markup += "</div></li></ul>";
    }
  };


  exports.NoteListView = NoteListView;
})(this);
