// option 1: directly set on the HTML element
{
  /* <button onclick="console.log(65)">Another button</button>; */
}

// option 2: add onclick function on the HTML element
//  <button onclick="makeRed()">Red</button>
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3: add onclick function
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option: 4
const auqaColor = document.getElementById("make-aqua");
auqaColor.onclick = function makeaqua() {
  document.body.style.backgroundColor = "aqua";
};

// option: 4 another
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option: 4 another
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option: 4 final
// document
//   .getElementById("make-goldenrod")
//   .addEventListener("click", function () {
//     document.body.style.backgroundColor = "goldenrod";
//   });
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
