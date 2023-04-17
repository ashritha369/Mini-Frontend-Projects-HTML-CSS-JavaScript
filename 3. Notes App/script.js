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
addBtn.addEventListener("click", () => addNewNote("hi"));

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
  });
  document.body.appendChild(note);
}
