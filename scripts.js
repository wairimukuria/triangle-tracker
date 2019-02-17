var triangle = function(sideOne, sideTwo, sideThree){
    if (isTriangle(sideOne, sideTwo, sideThree)) {
      return triangleType(sideOne, sideTwo, sideThree)
    } else {
      alert ("These sides do not make a triangle .");
    }
  };

  var triangleType = function(sideOne, sideTwo, sideThree){
    if (sideOne===sideTwo && sideTwo===sideThree) {
      alert ("equilateral");
    } else if (sideOne===sideTwo || sideOne===sideThree || sideThree===sideTwo) {
      alert ("isosceles");
    } else {
      alert( "scalene");
    }
  };

  var isTriangle = function(sideOne, sideTwo, sideThree) {
    return sideOne <= (sideTwo + sideThree) && sideTwo <= (sideThree + sideOne) && sideThree <= (sideOne + sideTwo)
  };
  window.onload = function() {
    //get the form from the html doc
    var form = document.querySelector("form");
    //add listener for the submit action
    form.addEventListener("submit", function(event) {
        //get the triangle side values
      var sOne = form.elements[0].value;
      var sTwo = form.elements[1].value;
      var sThree = form.elements[2].value;
      //compute the value to get triangle type
      var result = triangleType(sOne, sTwo, sThree);
      //display the result on the screen h3#result
      document.getElementById('result').innerHTML=result;
      //reset the form to empty fields
      form.reset();
      // prevent page refresh for the submit event
      event.preventDefault();
    });
  };
