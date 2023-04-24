const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  //here input is username element-> see below: the event listener
  const formControl = input.parentElement;
  //basically we can overwrite the class name of index.html classes with our custom classes
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  //Overwriting the message from 'Error message' to custom error message as shown below
  small.innerText = message;
}
// Show input success outline
function showSuccess(input) {
  //here input is username element-> see below: the event listener
  const formControl = input.parentElement;
  //basically we can overwrite the class name of index.html classes with our custom classes
  formControl.className = "form-control success";
}

// CHECK EMAIL IS VALID
function isValidEmail(email) {
  // using regex: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Adding event listener on the button, when we submit the form.
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   USERNAME
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  //   EMAIL
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }
  // PASSWORD
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
  // CONFIRM PASSWORD
  if (password2.value === "") {
    showError(password2, "Password2 is required");
  } else {
    showSuccess(password2);
  }
});
