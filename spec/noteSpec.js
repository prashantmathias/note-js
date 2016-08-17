describe( "Note", function () {
  it( "Can create a note", function () {
      var note = new Note( "Ruby trumps javascript" );
      asserts.isTrue( note.getText() === "Ruby trumps javascript" );
  } );
} );
