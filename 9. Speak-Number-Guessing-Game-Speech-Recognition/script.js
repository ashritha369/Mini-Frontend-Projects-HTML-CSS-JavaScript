const msgEl = document.getElementById("msg");
const randomNum = getRandomNumber();

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Checkout this:  https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
let recognition = new window.SpeechRecognition();

console.log("Number:", randomNum);

// Start recognition and game
recognition.start();

// Capture user speak
function onSpeak(e) {
  const msg = e.results[0][0].transcript;

  writeMessage(msg);
  checkNumber(msg);
  console.log(msg);
}

// write what user speaks
function writeMessage(msg) {
  msgEl.innerHTML = `
  <div>You said:</div>
  <span class="box">${msg}</span>
  `;
}
// Check msg against number
function checkNumber(msg) {
  const num = +msg;
  //check if valid number
  if (Number.isNaN(num)) {
    msgEl.innerHTML += "<div>That is not a valid number</div>";
    return;
  }
  //Check in range
  if (num > 100 || num < 1) {
    msgEl.innerHTML += "<div>Number must be between 1 and 100</div>";
    return;
  }
  // check num
  if (num === randomNum) {
    document.body.innerHTMl = `<h2>Congrats! You have guessed the number!<br> <br>It was ${num}<br></h2>
    <button class="play-again" id="play-again">Play Again</button>
    `;
  } else if (num > randomNum) {
    msgEl.innerHTML += "<div>GO LOWER</div>";
  } else {
    msgEl.innerHTML += "<div>GO HIGHER</div>";
  }
}
// Generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Speak result
recognition.addEventListener("result", onSpeak);

//End SR Service
recognition.addEventListener("end", () => recognition.start());
