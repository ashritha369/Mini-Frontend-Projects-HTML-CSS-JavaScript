const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());
  notif.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notif);
  // we can close all the appeared random message after certain timeout using settimeout of 3s on each appeared message, i.e after 3s it will be removed
  setTimeout(() => {
    notif.remove();
  }, 3000);
}
function getRandomMessage() {
  // return will return the any random message from message array on click: messages[index] where the index is generated randomly using Math.floor(Math.random() * messages.length)
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
