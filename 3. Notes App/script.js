// We will create this
/*
    <div class="note">
      <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>

      <div class="hidden"></div>
      <textarea></textarea>
    </div>
*/

const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

      <div class= "main ${text ? "" : "hidden"}"></div>
      <textarea class=${text ? "hidden" : ""}></textarea>
  `;
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  //using marked down library using 'marked' : NOT WORKING: marked(text) for main.innerHTML
  main.innerHTML = text;
  //   main.innerHTML = marked(text);
  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLocalStorage();
  });
  //   we have to toggle name and text area
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    //desturtured e.target.value
    const { value } = e.target;
    //using marked down library using 'marked' : NOT WORKING: marked(value) for main.innerHTML
    main.innerHTML = value;
    updateLocalStorage();
  });
  document.body.appendChild(note);
}

//LOCAL STORAGE

function updateLocalStorage() {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];
  notesText.forEach((note) => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}
