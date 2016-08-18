
describe("Controller", function() {
  it("can be instantiated with a note list", function() {
    var note_list = new NoteList();
    var controller = new NoteController(note_list);
    assert.isTrue(controller._noteList === note_list);
  });

  
});
