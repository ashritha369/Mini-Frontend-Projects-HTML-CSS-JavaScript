const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Mukesh Ambani",
  "Gautam Adani",
  "Shiv Nadar",
  "Savitri Jindal and Family",
  "Cyrus Poonawalla",
  "Dilip Shanghvi",
  "Kumar Birla",
  "Kushal Pal Singh",
  "Lakshmi Mittal",
  "Radhakishan Damani",
];

//Store listItems
const listItems = [];

let dragStartIndex;

createList();

// Insert List Items into DOM

function createList() {
  [...richestPeople]
    //   created an object of arrays [{},{}]
    .map((a) => ({ value: a, sort: Math.random() }))
    // creating sorted array [{},{},{}]===>
    .sort((firstItem, secondItem) => firstItem.sort - secondItem.sort)
    //take each item {} in [{},{},{}] and take its value, with item.value
    .map((item) => item.value)
    .forEach((person, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
    <p class="person-name">${person}</p>
    <ion-icon name="menu"></ion-icon>
    </div>
    `;

      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
  addEventListener();
}

///////////////
function dragStart() {
  //   console.log(`Event: DragStart`);
}
function dragEnter() {
  //   console.log(`Event: DragEnter`);
}
function dragLeave() {
  //   console.log(`Event: DragLeave`);
}
function dragOver() {
  //   console.log(`Event: DragOver`);
}
function dragDrop() {
  //   console.log(`Event: Drop`);
}
///////////////

function addEventListener() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}
