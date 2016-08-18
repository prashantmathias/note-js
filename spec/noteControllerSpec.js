
describe("Controller", function() {
  it("can be instantiated with a note list", function() {
    var note_list = new NoteList();
    var controller = new NoteController(note_list);
    assert.isTrue(controller._noteList === note_list);
  });

  it("can return a note form within the note list", function() {
    var note_list = new NoteList();
    var controller = new NoteController(note_list);
    note_list.addNote("Favourite drink: seltzer");
    assert.isTrue(note_list.getNotes()[0].getText() === "Favourite drink: seltzer");
  });


  it("converts list_view into HTML and store it", function () {
    var note_list = new NoteList();
    var controller = new NoteController(note_list);
    note_list.addNote("Favourite drink: seltzer");
    controller.setupView();
    assert.isTrue(controller._note_markup === "<ul><li><div>Favourite drink: seltzer</div></li></ul>" );
  });

  it("can return note's text formatted in HTML", function () {
    var note_list = new NoteList();
    var controller = new NoteController(note_list);
    note_list.addNote("Favourite drink: seltzer");
    controller.setupView();

    var appDiv = document.createElement('div', {id: 'app'} );
    document.getElementById = function () {
      return appDiv;
    }

    controller.insertHTML('app');

    var element = document.getElementById("app");
    assert.isTrue(element.innerHTML === controller._note_markup );
  });

});
