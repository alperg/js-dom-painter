$(document).ready(function() {

  var currentColor = "white";
  var clicked = false;

  for(var i = 0; i < 5400; i++) {
    var newDiv = $("<div>").attr("class", "box");
    $("#boxes").append(newDiv);
  }

  $("#red").on("click", function() {
    currentColor = "red";
  });
  $("#green").on("click", function() {
    currentColor = "green";
  });
  $("#blue").on("click", function() {
    currentColor = "blue";
  });
  $("#yellow").on("click", function() {
    currentColor = "yellow";
  });
  $("#white").on("click", function() {
    currentColor = "white";
  });

  $(".box").on("mousedown", function() {
    clicked = true;
  });

  $(".box").on("mouseup", function() {
    clicked = false;
  });

  $("#reset").on("click", function() {
    $(".box").removeClass("white green blue yellow red")
  });

  $(".box").on("mousemove", function() {
    if(clicked) {
      $(this).addClass(currentColor);
    }
  });

});
