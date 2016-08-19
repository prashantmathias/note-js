var note_list = new NoteList();
note_list.addNote("Favourite drink: seltzer");
note_list.addNote("Hello from Arunas!");
note_list.addNote("Come to Manchester, guys! It's awesome");
var note_controller = new NoteController(note_list);

note_controller.insertHTML("app");
note_controller.listenForHashChange();
note_controller.listenForSubmitEvents();
