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
  console.log("Breath In!");
  setTimeout(() => {
    // BREATH-HOLD
    console.log("Hold ");
    // BREATH-OUT
    setTimeout(() => {
      console.log("Breath Out!");
    }, holdTime);
  }, breatheTime);
}

// O/P IN CONSOLE WILL BE:
// Breath In! -printed first
// Hold -printed after 3s or 3000 ms of breathtime
// BreathOut !-printed after 1500ms or 1.5s of holdtime
