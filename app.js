var student = {
  name: "",
  type: "student"
};

var name = "name";
let totalNameValue = 0;

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById(name).addEventListener("keyup", keyUp);
}

function keyUp(event) {
  calculateNumeric(totalNameValue);
}

function calculateNumeric(totalNameValue) {
  student.name = document.getElementById(name).value;

  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charCodeAt(i);
  }
      outputStr(totalNameValue);
}

function outputStr(totalNameValue) {
  // Insert result into page
  var output = "Total Numeric value of person's name is " + totalNameValue;
  document.getElementById('output').innerText = output;
}

// var student = {
//   name: "",
//   type: "student"
// };
//
// document.addEventListener('DOMContentLoaded', contentLoaded);
//
// function contentLoaded(event) {
//   document.getElementById('name').addEventListener("keyup", keyUp);
// }
//
// function keyUp(event) {
//   calculateNumericOutput();
// }
//
// function calculateNumericOutput() {
//   student.name = document.getElementById('name').value;
//
//   var totalNameValue = 0;
//   for (var i = 0; i < student.name.length; i++) {
//     totalNameValue += student.name.charCodeAt(i);
//      console.log("calc " + totalNameValue);
//   }
//
//   // Insert result into page
//   var output = "Total Numeric value of person's name is " + totalNameValue;
//   document.getElementById('output').innerText = output;
// }
