describe("Single Note View", function() {
  it("It can be instantiated with a note model", function() {
    var single_note = new Note("Test");
    var single_note_view = new SingleNoteView(single_note);
    assert.isTrue(single_note_view._single_note === single_note);
  });

  it("Has a method that returns a string of HTML of a note", function() {
    var single_note = new Note("Test");
    var single_note_view = new SingleNoteView(single_note);
    assert.isTrue(single_note_view.getHTML() === "<div>Test</div>");
  });
});
