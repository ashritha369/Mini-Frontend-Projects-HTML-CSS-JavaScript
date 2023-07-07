// We will create this
/*
    <div class="note">
      
    </div>
*/

const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => addNewNote());
const form = document.createElement("form");
form.setAttribute("id", "form");

// Create input element
const input = document.createElement("input");
function addNewNote() {
  input.setAttribute("type", "text");
  input.setAttribute("class", "input");
  input.setAttribute("id", "input");
  input.setAttribute("placeholder", "Enter your todo");
  input.setAttribute("autocomplete", "off");
  const note = document.createElement("div");
  note.classList.add("note");
  /////////////////////////
  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const todosUL = document.getElementById("todos");

  const todos = JSON.parse(localStorage.getItem("todos"));

  if (todos) {
    todos.forEach((todo) => addTodo(todo));
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
  });

  function addTodo(todo) {
    let todoText = input.value;
    if (todo) {
      todoText = todo.text;
    }
    //this will give the input value of whatever we entered
    console.log(todoText);
    //Constructing the list of todo items
    /*
        <li>My first todo</li>
        <li>My second todo</li>
  */
    if (todoText) {
      const todoEl = document.createElement("li");

      if (todo && todo.completed) {
        todoEl.classList.add("completed");
      }
      todoEl.innerText = todoText;
      // striking of todos by clicking on it, i.e we will toggle the css slecters
      todoEl.addEventListener("click", () => {
        todoEl.classList.toggle("completed");
        //   to remove the todo from the list of todo
        updateLS();
      });
      // to remove we are using contextmenu, upon clicking right the list item will be removed
      todoEl.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        todoEl.remove();
        //   to remove the todo from the list of todo
        updateLS();
      });
      todosUL.appendChild(todoEl);
      //clear the form
      input.value = "";

      // to add todos to local storage
      updateLS();
    }
  }

  //LOCAL STORAGE: syntax
  // localStorage.setItem("name", JSON.stringify(obj));
  // JSON.parse(localStorage.getItem(obj));

  // to add todos to local storage
  function updateLS() {
    todosEl = document.querySelectorAll("Li");
    const todos = [];
    todosEl.forEach((todoEl) => {
      todos.push({
        text: todoEl.innerText,
        completed: todoEl.classList.contains("completed"),
      });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  //////////////////////////
  note.appendChild(form);
  document.body.appendChild(note);
}
