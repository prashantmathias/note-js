var note_list = new NoteList();
note_list.addNote("Favourite drink: seltzer");
var note_controller = new NoteController(note_list);

note_controller.setupView();
note_controller.insertHTML("app");
