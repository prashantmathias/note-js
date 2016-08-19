
describe("Controller", function() {
  it("can be instantiated with a note list", function() {
    var note_list = new NoteList();
    var controller = new NoteController(note_list);
    assert.isTrue(controller._noteList === note_list);
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

    assert.isTrue(appDiv.innerHTML === controller._note_markup.getHTML() );

  });

});
