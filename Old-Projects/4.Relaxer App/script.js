const container = document.getElementById("container");
const text = document.getElementById("text");

// Total time to breathin+ breathout = 7.5s in css : 7500ms

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;

const holdTime = totalTime / 5;

console.log(breatheTime, holdTime);
// o/p : 3000, 1500
breathAnimation();

function breathAnimation() {
  // BREATH-IN
  text.innerText = "Breath-In..!";
  //   overwriting the classname
  container.className = "container grow";

  setTimeout(() => {
    // BREATH-HOLD
    text.innerText = "Hold-On..";
    // BREATH-OUT
    setTimeout(() => {
      text.innerText = "Breath out..!";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

// below will run every second we want
// that is: we want to run 'breathanimation' every '7.5s'
setInterval(breathAnimation, totalTime);
