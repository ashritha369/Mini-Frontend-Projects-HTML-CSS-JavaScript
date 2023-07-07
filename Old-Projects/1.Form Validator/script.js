const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// SHOW ERROR MESSAGE: INPUT
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
// SHOW SUCCESS MESSAGE: INPUT
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// CHECK EMAIL IS VALID
function checkEmail(input) {
  // using regex: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  const regularExpression =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regularExpression.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// CHECK REQUIRED FIELD
function checkRequired(inputArray) {
  // loop through the array and  then check on the each item inside the array
  inputArray.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
}
// CHECK INPUT LENGTH
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be least ${min} characters`);
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}
// CHECK PASSWORD MATCH
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}
//GET FIELD NAME
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// ADDING EVENT LISTENER ON SUBMIT
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
