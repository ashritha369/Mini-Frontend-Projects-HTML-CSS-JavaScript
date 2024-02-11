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
}
