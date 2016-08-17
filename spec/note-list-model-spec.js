var notelist = new NoteList();
notelist.store('note1')
notelist.store('note2')
notelist.store('note3')

function storesListOfNotes() {
  assert.isTrue(notelist._listArr[0].text() === 'note1')
};

function getNoteById() {
  assert.isTrue(notelist.listById(1).text() === 'note2')
}

storesListOfNotes();
getNoteById()
