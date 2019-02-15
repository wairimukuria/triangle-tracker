var triangle = function(sideOne, sideTwo, sideThree){
  if (isTriangle(sideOne, sideTwo, sideThree)) {
    return triangleType(sideOne, sideTwo, sideThree)
  } else {
    return "These sides do not a triangle make.";
  }
};

var triangleType = function(sideOne, sideTwo, sideThree){
  if (sideOne===sideTwo && sideTwo===sideThree) {
    return "equilateral";
  } else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

var isTriangle = function(sideOne, sideTwo, sideThree) {
  return sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo)
};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {

    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());
    var result = triangle(sideOne, sideTwo, sideThree);

    sideOne = parseInt($("input#sideOne").val(""));
    sideTwo = parseInt($("input#sideTwo").val(""));
    sideThree = parseInt($("input#sideThree").val(""));

    $("#result").append(result);
    event.preventDefault();
    alert("result");
  });
});
