var resetBtn = document.getElementById("reset");
var redBtn = document.getElementById("red");
var greenBtn = document.getElementById("green");
var blueBtn = document.getElementById("blue");
var yellowBtn = document.getElementById("yellow");
var whiteBtn = document.getElementById("white");
var boxesDiv = document.getElementById("boxes");

var currentColor = "white";

redBtn.addEventListener("click", function() {
  currentColor = "red";
});
greenBtn.addEventListener("click", function() {
  currentColor = "green";
});
blueBtn.addEventListener("click", function() {
  currentColor = "blue";
});
yellowBtn.addEventListener("click", function() {
  currentColor = "yellow";
});
whiteBtn.addEventListener("click", function() {
  currentColor = "white";
});
resetBtn.addEventListener("click", function(event) {
  document.querySelectorAll(".box").forEach(function(box) {
    box.classList.remove("white", "green", "blue", "yellow", "red");
  });
});

for(var i = 0; i < 5400; i++) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "box");
  boxesDiv.appendChild(newDiv);
}

boxesDiv.addEventListener("mousemove", function(event) {
  if(event.target.classList.contains("box")) {
    event.target.classList.remove("white", "green", "blue", "yellow", "red");
    event.target.classList.add(currentColor);
  }
});
