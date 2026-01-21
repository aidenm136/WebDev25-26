// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function calculateAverage() {
  let g1 = Number(document.getElementById("grade1").value);
  let g2 = Number(document.getElementById("grade2").value);
  let g3 = Number(document.getElementById("grade3").value);


  let average = (g1 + g2 + g3) / 3;


  document.getElementById("averageResult").innerHTML =
    "Average: " + average.toFixed(2);
}
// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function calculateSlope() {
  let x1 = Number(document.getElementById("x1").value);
  let y1 = Number(document.getElementById("y1").value);
  let x2 = Number(document.getElementById("x2").value);
  let y2 = Number(document.getElementById("y2").value);


  let slope = (y2 - y1) / (x2 - x1);


  document.getElementById("slopeResult").innerHTML =
    "Slope: " + slope.toFixed(2);
}
// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function calculateBMI() {
  let height = Number(document.getElementById("height").value); 
  let weight = Number(document.getElementById("weight").value);


  let bmi = weight / (height * height);


  document.getElementById("bmiResult").innerHTML =
    "BMI: " + bmi.toFixed(2);
}



