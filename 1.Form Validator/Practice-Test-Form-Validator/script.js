// listen to event from button submit
//onsubmit of the form collect all the values and output it

let formEl = document.querySelector("form");
let inputText = document.querySelector("#fullname");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let inputNumber = document.querySelector("#number");

let submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", formSubmit);

function formSubmit(e) {
  //   e.preventDefault();
  console.log(`Submitted the form`);
  console.log(`Submitted the form`, inputText.value);
  console.log(`Submitted the form`, inputEmail.value);
  console.log(`Submitted the form`, inputNumber.value);
  console.log(`Submitted the form`, inputPassword.value);
}
