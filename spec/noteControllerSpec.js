
describe("Controller", function() {
  it("can be instantiated with a note list", function() {
    var note_list = new NoteList();
    var controller = new NoteController(note_list);
    assert.isTrue(controller._noteList === note_list);
  });

  it("can add a new note and then displays in on the page", function() {
    var noteList = new NoteList();
    var controller = new NoteController(noteList);
    var noteListView = new NoteListView(noteList);
    var appDiv = document.createElement('div', {id: 'app'} );
    controller.getElement = function () {
      return appDiv;
    }

    controller.addNote("Some new note");
    htmlString = "<ul><li><div><a href=\"#" + noteList.getNotes()[0].id + "\">Some new note</a></div></li></ul>";


    assert.isEqual(appDiv.innerHTML, htmlString);

  });

  it("can return note's text formatted in HTML", function () {
    var note_list = new NoteList();
    var controller = new NoteController(note_list);
    note_list.addNote("Favourite drink: seltzer");

    var appDiv = document.createElement('div', {id: 'app'} );
    controller.getElement = function () {
      return appDiv;
    }

    controller.insertHTML('app');

    assert.isTrue(appDiv.innerHTML === controller._view.getHTML() );

  });

  it("can load content for single note page", function() {
    var noteList = new NoteList();
    noteList.addNote("new note");
    var note = noteList.getNotes()[0];
    var singleNote = new SingleNoteView(note);
    var controller = new NoteController(noteList);

    var appDiv = document.createElement('div', {id: 'app'} );
    controller.getElement = function () {
      return appDiv;
    }

    controller.insertHTML('app');
    window.location.hash = "#" + note.id;
    controller.showNote();
    assert.isEqual(appDiv.innerHTML, singleNote.getHTML() );
    window.location.hash = "";
  });

});
