/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function distance(){
      let x1 = parseFloat(document.getElementById("x1").value);
      let y1 = parseFloat(document.getElementById("y1").value);
      let x2 = parseFloat(document.getElementById("x2").value);
      let y2 = parseFloat(document.getElementById("y2").value);
      let output = document.getElementById("output");

      led d = Math.sqrt ( Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2) );

      output.innerHTML = `Distance between ($(x1) , $(y1) ) and ($(x2) , $(y2) ) is $(d).`;
}

/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/



